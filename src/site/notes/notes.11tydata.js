require('dotenv').config();
const settings = require('../../helpers/constants');
const path = require('path');
const fs = require('fs');

const allSettings = settings.ALL_NOTE_SETTINGS;

/**
 * Extract garden info from file path.
 * Expected structure: src/site/notes/{username}/{entity_type}/{slug}.md
 *
 * @param {string} inputPath - Full path to the note file
 * @returns {{ gardenUsername: string|null, entityType: string }}
 */
function extractGardenInfo(inputPath) {
  if (!inputPath) return { gardenUsername: null, entityType: 'note' };

  const pathParts = inputPath.split(path.sep);
  const notesIndex = pathParts.findIndex((p) => p === 'notes');

  if (notesIndex >= 0 && pathParts.length > notesIndex + 2) {
    return {
      gardenUsername: pathParts[notesIndex + 1],
      entityType: pathParts[notesIndex + 2] || 'note',
    };
  }

  return {
    gardenUsername: null,
    entityType: 'note',
  };
}

/**
 * Create URL-friendly slug from string.
 */
function slugify(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Check if a note is a diagram/Excalidraw file.
 */
function isDiagram(data) {
  // Check frontmatter type
  if (data.type === 'diagram' || data['dg-entity-type'] === 'diagram') {
    return true;
  }

  // Check file path for diagram folder or .excalidraw extension
  const inputPath = data.page?.inputPath || '';
  if (inputPath.includes('/diagram/') || inputPath.includes('/diagrams/')) {
    return true;
  }

  // Check if file has .excalidraw in the name
  if (inputPath.includes('.excalidraw')) {
    return true;
  }

  return false;
}

module.exports = {
  eleventyComputed: {
    layout: (data) => {
      // Garden entry (home page)
      if (data.tags && data.tags.indexOf('gardenEntry') != -1) {
        return 'layouts/index.njk';
      }

      // Diagram files use special layout
      if (isDiagram(data)) {
        return 'layouts/diagram.njk';
      }

      // Default note layout
      return 'layouts/note.njk';
    },

    /**
     * Dynamic permalink generation.
     *
     * For multi-user garden notes (with username in path):
     *   /garden/{username}/{entity_type}/{slug}/
     *
     * For single-user notes (no username in path):
     *   /notes/{slug}/
     *
     * For gardenEntry (home page):
     *   /
     */
    permalink: (data) => {
      // Garden entry becomes home page
      if (data.tags && data.tags.indexOf('gardenEntry') != -1) {
        return '/';
      }

      // If explicit permalink is set in frontmatter, use it
      if (data.permalink) {
        return data.permalink;
      }

      // Extract garden info from file path
      const { gardenUsername, entityType } = extractGardenInfo(data.page?.inputPath);

      // If note belongs to a user's garden, use garden permalink structure
      if (gardenUsername) {
        const slug = data.slug || slugify(data.title) || data.page?.fileSlug || 'untitled';
        return `/garden/${gardenUsername}/${entityType}/${slug}/`;
      }

      // Default to standard note permalink
      return undefined;
    },

    /**
     * Add garden-specific computed data.
     */
    gardenUsername: (data) => {
      if (data.gardenUsername) return data.gardenUsername;
      const { gardenUsername } = extractGardenInfo(data.page?.inputPath);
      return gardenUsername;
    },

    entityType: (data) => {
      // Prefer frontmatter type, fall back to path-based detection
      if (data.type) return data.type;
      if (data.entityType) return data.entityType;

      // Check for diagram type
      if (isDiagram(data)) {
        return 'diagram';
      }

      const { entityType } = extractGardenInfo(data.page?.inputPath);
      return entityType;
    },

    /**
     * Read SVG content for Excalidraw files.
     * The SVG file should be in the same directory with .svg extension.
     */
    svgContent: (data) => {
      if (!isDiagram(data)) {
        return null;
      }

      const inputPath = data.page?.inputPath;
      if (!inputPath) {
        return null;
      }

      // For .excalidraw.md files, look for corresponding .svg file
      // Example: "Drawing.excalidraw.md" -> "Drawing.excalidraw.svg"
      let svgPath = inputPath;
      if (inputPath.endsWith('.excalidraw.md')) {
        svgPath = inputPath.replace('.excalidraw.md', '.excalidraw.svg');
      } else if (inputPath.endsWith('.md')) {
        // For other diagram types, try replacing .md with .svg
        svgPath = inputPath.replace('.md', '.svg');
      }

      try {
        if (fs.existsSync(svgPath)) {
          const svgContent = fs.readFileSync(svgPath, 'utf-8');
          return svgContent;
        }
      } catch (err) {
        console.warn(`Failed to read SVG file: ${svgPath}`, err.message);
      }

      return null;
    },

    settings: (data) => {
      const noteSettings = {};
      allSettings.forEach((setting) => {
        let noteSetting = data[setting];
        let globalSetting = process.env[setting];

        let settingValue = noteSetting || (globalSetting === 'true' && noteSetting !== false);
        noteSettings[setting] = settingValue;
      });
      return noteSettings;
    },
  },
};
