---
layout: layouts/note.njk
dg-publish: true
dg-home: false
title: Getting Started
description: Quick guide to navigating and using this knowledge garden
permalink: /docs/getting-started/
tags:
  - documentation
  - guide
created: 2026-01-30
updated: 2026-01-30
---

# Getting Started

Welcome to the Medical Knowledge Garden! This guide will help you navigate and make the most of this resource.

## What is This?

This is a **digital garden** - a curated collection of interconnected notes about health, medicine, and wellness. Unlike a blog with chronological posts, a digital garden grows organically with interlinked ideas.

## Navigation

### Using the File Tree

The left sidebar shows the content structure:

- **entities/** - Core knowledge organized by type
  - **biomarker/** - Health markers and lab values
  - **supplement/** - Vitamins, minerals, herbs
  - **drug/** - Medications and pharmaceuticals
  - **condition/** - Health conditions
  - **intervention/** - Treatments and lifestyle changes
  - **hormone/** - Hormones and signaling molecules
  - **organ/** - Body organs and systems

### Using Search

Click the search icon or press `/` to search across all content:

- Search by title, content, or tags
- Filter by entity type
- Click results to navigate

[[does this filtering work]]
### Using the Knowledge Graph

The interactive graph shows how concepts connect:

- **Nodes** = Individual notes
- **Lines** = Relationships between notes
- Click any node to navigate to that note
- Hover for preview

[[make this part working]]
## Understanding Entity Types

Content is organized by medical entity types:

| Type | Icon | Description |
|------|------|-------------|
| Biomarker | 🧪 | Measurable health indicators |
| Supplement | 🌿 | Nutritional supplements |
| Drug | 💊 | Medications |
| Condition | 🏥 | Health conditions |
| Intervention | ⚕️ | Treatments |
| Hormone | 🧬 | Body signaling molecules |
| Organ | 🫀 | Body organs |

[[think about reclassification, e.g. Hormone -> Gene, Protein, Pathway]]
## Reading Notes

Each note contains:

1. **Title & Badge** - Name and entity type
2. **Description** - Brief summary
3. **Main Content** - Detailed information
4. **Related Entities** - Connected concepts
5. **Backlinks** - Other notes linking here
6. **Tags** - Topic labels

## Tips for Exploration

1. **Follow links** - Click `[[linked terms]]` to explore connections
2. **Use backlinks** - See what connects to this topic
3. **Explore the graph** - Find unexpected relationships
4. **Search broadly** - Try different terms
5. **Check tags** - Find related content

## Contributing

This garden is maintained through Obsidian. If you have access:

1. Add notes to the appropriate entity folder
2. Include `dg-publish: true` in frontmatter
3. Link related concepts with `[[wiki links]]`
4. Publish via the Digital Garden plugin
