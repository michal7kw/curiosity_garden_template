---
layout: layouts/note.njk
dg-publish: true
dg-home: false
title: Frontmatter Reference
description: Complete reference for all supported frontmatter fields
permalink: /docs/frontmatter-reference/
tags:
  - documentation
  - reference
  - frontmatter
created: 2026-01-30
updated: 2026-01-30
---

# Frontmatter Reference

Frontmatter is YAML metadata at the top of each note that controls publishing and display behavior.

## Basic Structure

```yaml
---
field: value
another-field: "value with spaces"
list-field:
  - item1
  - item2
---

# Note content starts here...
```

## Required Fields

### dg-publish

**Type**: Boolean
**Required**: Yes
**Purpose**: Controls whether note is published to the digital garden

```yaml
dg-publish: true   # Will be published
dg-publish: false  # Will NOT be published (draft)
```

## Display Fields

### title

**Type**: String
**Required**: No (uses filename if omitted)
**Purpose**: Display title for the note

```yaml
title: "Vitamin D: The Sunshine Vitamin"
```

### name

**Type**: String
**Required**: No
**Purpose**: Entity name (often same as title)

```yaml
name: "Vitamin D"
```

### description

**Type**: String
**Required**: No
**Purpose**: Brief summary shown in previews

```yaml
description: "Essential fat-soluble vitamin for bone health and immunity"
```

### noteIcon

**Type**: String (emoji or icon name)
**Required**: No
**Purpose**: Custom icon for this note

```yaml
noteIcon: "🌞"
```

## Entity Fields

### dg-entity-type

**Type**: String
**Required**: No (but recommended for entities)
**Purpose**: Specifies entity type for styling and filtering

```yaml
dg-entity-type: supplement
```

**Valid values**:
- `concept` - Core ideas and mental models
- `course` - Learning journeys and curricula
- `skill` - Abilities to develop
- `resource` - Books, articles, materials
- `question` - Open inquiries
- `insight` - Aha moments and realizations
### id

**Type**: String
**Required**: No
**Purpose**: Unique identifier for the entity

```yaml
id: vitamin-d-001
```

### type

**Type**: String
**Required**: No
**Purpose**: Alternative to dg-entity-type

```yaml
type: supplement
```

## Metadata Fields

### tags

**Type**: Array of strings
**Required**: No
**Purpose**: Topic tags for filtering and discovery

```yaml
tags:
  - vitamin
  - bone-health
  - immune-system
  - fat-soluble
```

Or inline format:
```yaml
tags: [vitamin, bone-health, immune-system]
```

### created

**Type**: Date (YYYY-MM-DD)
**Required**: No
**Purpose**: Note creation date

```yaml
created: 2025-01-02
```

### last_modified

**Type**: Date (YYYY-MM-DD)
**Required**: No
**Purpose**: Last modification date

```yaml
last_modified: 2025-01-02
```

### updated

**Type**: Date
**Required**: No
**Purpose**: Alternative to last_modified

```yaml
updated: 2025-01-02
```

## Layout Fields

### dg-home

**Type**: Boolean
**Required**: No
**Purpose**: Designates note as the home page

```yaml
dg-home: true
```

### cssclass

**Type**: String or Array
**Required**: No
**Purpose**: Custom CSS classes for the note

```yaml
cssclass: wide-page
# or
cssclass:
  - wide-page
  - no-sidebar
```

### contentClasses

**Type**: String
**Required**: No
**Purpose**: CSS classes for main content area

```yaml
contentClasses: "full-width centered"
```

## Navigation Fields

### dg-pinned

**Type**: Boolean
**Required**: No
**Purpose**: Pin note to top of lists

```yaml
dg-pinned: true
```

### dg-path

**Type**: String
**Required**: No
**Purpose**: Custom URL path

```yaml
dg-path: "guides/vitamins/vitamin-d"
```

### permalink

**Type**: String
**Required**: No
**Purpose**: Custom permalink (overrides default)

```yaml
permalink: "/vitamin-d/"
```

## Publishing Control

### dg-hide

**Type**: Boolean
**Required**: No
**Purpose**: Publish but hide from navigation

```yaml
dg-hide: true
```

### dg-hide-in-graph

**Type**: Boolean
**Required**: No
**Purpose**: Hide from knowledge graph

```yaml
dg-hide-in-graph: true
```

### dg-show-backlinks

**Type**: Boolean
**Required**: No
**Purpose**: Override backlinks setting for this note

```yaml
dg-show-backlinks: false
```

### dg-show-local-graph

**Type**: Boolean
**Required**: No
**Purpose**: Override local graph setting for this note

```yaml
dg-show-local-graph: true
```

### dg-show-toc

**Type**: Boolean
**Required**: No
**Purpose**: Override TOC setting for this note

```yaml
dg-show-toc: true
```

## Media Fields

### image

**Type**: String (path or URL)
**Required**: No
**Purpose**: Featured image for the note

```yaml
image: "/img/vitamin-d.jpg"
```

### banner

**Type**: String (path or URL)
**Required**: No
**Purpose**: Banner image

```yaml
banner: "https://example.com/banner.jpg"
```

## Complete Example

Here's a complete frontmatter example for a concept entity:

```yaml
---
dg-publish: true
dg-entity-type: concept
dg-show-toc: true
id: machine-learning-001
name: "Machine Learning"
title: "Machine Learning: Teaching Computers to Learn"
description: "A branch of AI where systems learn patterns from data to make predictions or decisions"
tags:
  - artificial-intelligence
  - data-science
  - algorithms
  - automation
difficulty: intermediate
status: learning
wikipedia_url: "https://en.wikipedia.org/wiki/Machine_learning"
created: 2025-01-02
last_modified: 2025-01-02
noteIcon: "🤖"
---

# Machine Learning

Content starts here...
```

## Best Practices

### Do

- Always include `dg-publish: true` for published notes
- Use consistent date formats (YYYY-MM-DD)
- Quote strings containing special characters
- Use lowercase for entity types
- Keep descriptions concise (1-2 sentences)

### Don't

- Use tabs for indentation (use 2 spaces)
- Include sensitive information
- Use unquoted colons in values
- Forget closing quotes

### Special Characters

Quote strings containing:
- Colons (`:`)
- Hash symbols (`#`)
- Brackets (`[]`, `{}`)
- Quotes (use opposite quote type)

```yaml
# Correct
description: "Contains: special characters"
title: 'Quote "example"'

# Incorrect
description: Contains: special characters
```

## Validation

To validate frontmatter:

1. Ensure proper YAML syntax
2. Check for required fields
3. Verify date formats
4. Test special characters are quoted
5. Confirm entity type is valid

Common validation errors:
- Missing closing quotes
- Incorrect indentation
- Invalid date format
- Unquoted special characters
