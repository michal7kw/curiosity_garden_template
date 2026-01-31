---
created: 2026-01-30
updated: 2026-01-30
---
# CLAUDE.md - curiosity_garden_template

## Overview
This directory contains a digital garden template for publishing learning-focused knowledge content from Obsidian to the web. It's built on Eleventy (11ty) and designed for exploring ideas, tracking skills, and sharing insights across any domain.

This is a fork of `digitalgarden_template` customized for the Curiosity Knowledge Garden.

## Key Components

### Core Template System
- **Eleventy Configuration** - Static site generator setup for learning content
- **Custom Styling** (`src/styles/`) - Learning-focused design system
- **Note Processing** - Automated processing of Obsidian markdown files
- **Graph Integration** - Knowledge graph visualization in web format

### Publishing Features (`src/site/`)
- **Note Publishing** (`notes/`) - Automated publishing of selected Obsidian notes
- **Entity Type Pages** - Dedicated pages for each learning entity type
- **Search Functionality** - Full-text search across published content
- **Graph Visualization** - Interactive knowledge graph display

### Entity Types (Learning-Focused)
1. **Concept** - Core ideas and mental models
2. **Course** - Learning journeys and curricula
3. **Skill** - Abilities to develop and track
4. **Resource** - Books, articles, and learning materials
5. **Question** - Open inquiries and research gaps
6. **Insight** - Aha moments and realizations

### Custom Helpers (`src/helpers/`)
- **File Tree Utils** - Navigation structure generation
- **Link Utils** - Cross-reference and backlink processing
- **Constants** - Configuration and constant definitions

## Development Commands

### Prerequisites
- **Node.js 18+** (required for Eleventy)
- **npm** (package manager)
- **Obsidian vault** (curiosity_kg with content to publish)

### Setup and Development
```bash
# Navigate to curiosity garden directory from repository root
cd curiosity_garden_template

# Install dependencies (first-time setup)
npm install

# Start development server (default: http://localhost:8080)
npm run start

# Build for production (output: dist/ directory)
npm run build

# Preview production build locally
npm run serve
```

### Content Management
```bash
# Clean and rebuild entire site
npm run prebuild && npm run build

# Watch for changes during development
npm run start
```

## Template Features

### Learning-Focused Design
- **Clean Theme** - Professional styling appropriate for learning content
- **Accessibility** - WCAG-compliant design
- **Mobile Responsive** - Optimized for reading on any device
- **Dark Mode** - Default dark theme for comfortable reading

### Content Processing
- **Markdown Processing** - Advanced markdown rendering
- **Graph Visualization** - Interactive knowledge graph display
- **Image Optimization** - Diagram and chart optimization
- **Cross-Referencing** - Automatic linking between related concepts

### Special Pages
- **Homepage** - Category overview with quick navigation
- **Entity Type Pages** - Browse by Concept, Course, Skill, Resource, Question, Insight
- **Knowledge Graph** - Visual exploration of connections
- **Search** - Full-text search across all content

## Integration with MKG Platform

### Data Source
- **Obsidian Vault** - Direct integration with `curiosity_kg/` vault
- Notes with `dg-publish: true` in frontmatter are published

### Publishing Pipeline
1. **Note Selection** - Notes with `dg-publish: true` are included
2. **Content Processing** - Markdown processing and enhancement
3. **Graph Integration** - Automatic backlinks and connections
4. **Site Generation** - Static site creation with Eleventy
5. **Deployment** - Automated deployment to Vercel

## Configuration

### Environment Variables (`.env`)
```bash
SITE_NAME_HEADER=Curiosity Garden
SITE_MAIN_LANGUAGE=en
BASE_THEME=dark
dgHomeLink=true
dgShowBacklinks=true
dgShowLocalGraph=true
dgShowFileTree=true
dgEnableSearch=true
dgShowToc=true
dgLinkPreview=true
dgShowTags=true
```

### Publishing Settings
- **Note Filtering** - Control which notes are published via frontmatter
- **Update Frequency** - Rebuild on content changes
- **Access Control** - All published content is public

## Styling and Themes (`src/styles/`)

### Custom SCSS Structure
- **Base Styles** (`digital-garden-base.scss`) - Foundation styling
- **Obsidian Integration** (`obsidian-base.scss`) - Obsidian-compatible styling
- **Custom Overrides** (`custom-style.scss`) - Project-specific customizations
- **Responsive Design** - Mobile-first responsive framework

### Entity Type Styling
- **Concept** - Blue theme
- **Course** - Orange theme
- **Skill** - Yellow theme
- **Resource** - Green theme
- **Question** - Purple theme
- **Insight** - Pink theme

## Deployment

### Vercel Integration
- **Configuration** (`vercel.json`) - Deployment configuration
- **Environment Variables** - Set via Vercel dashboard
- **Custom Domain** - Configure as `curiosity.yourdomain.com`

### Security Features
- **Content Sanitization** - Prevention of XSS attacks
- **HTTPS Enforcement** - Secure content delivery

## Differences from digitalgarden_template

| Aspect | digitalgarden_template | curiosity_garden_template |
|--------|----------------------|---------------------------|
| Focus | Medical knowledge | General learning |
| Entity types | Biomarker, Drug, Supplement, etc. | Concept, Course, Skill, etc. |
| Data source | curated_kg/ | curiosity_kg/ |
| Domain | Digital garden for health | Curiosity-driven learning |

## Related Documentation
- **Source Vault**: See `../curiosity_kg/README.md`
- **Medical Garden**: See `../digitalgarden_template/CLAUDE.md`
- **Project Overview**: See `../CLAUDE.md`
