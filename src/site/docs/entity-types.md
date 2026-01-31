---
layout: layouts/note.njk
dg-publish: true
dg-home: false
title: Entity Types Reference
description: Complete reference for all learning entity types in the Curiosity Garden
permalink: /docs/entity-types/
tags:
  - documentation
  - reference
  - entity-types
created: 2026-01-30
updated: 2026-01-31
---

# Entity Types Reference

The Curiosity Garden organizes learning content into six distinct entity types. Each type represents a category of knowledge with specific properties and relationships, designed to help you explore ideas, track skills, and capture insights.

## Entity Type Overview

| Type | Color | Icon | Folder | Description |
|------|-------|------|--------|-------------|
| Concept | Blue | 💡 | `entities/concept/` | Core ideas and mental models |
| Course | Orange | 🎓 | `entities/course/` | Learning journeys and curricula |
| Skill | Yellow | 🎯 | `entities/skill/` | Abilities to develop and track |
| Resource | Green | 📚 | `entities/resource/` | Books, articles, and materials |
| Question | Purple | ❓ | `entities/question/` | Open inquiries and research gaps |
| Insight | Pink | ✨ | `entities/insight/` | Aha moments and realizations |

---

## Concept 💡

**Purpose**: Document core ideas, mental models, and foundational knowledge

**Common Properties**:
- Core definition
- Related concepts
- Real-world applications
- Common misconceptions
- Learning prerequisites

**Examples**:
- Machine Learning
- First Principles Thinking
- Compound Interest
- Object-Oriented Programming
- Growth Mindset

**Relationships**:
- Prerequisite for → Skills, Courses
- Related to → Other Concepts
- Explored in → Resources
- Leads to → Insights

---

## Course 🎓

**Purpose**: Track learning journeys, curricula, and structured educational paths

**Common Properties**:
- Duration/time commitment
- Difficulty level
- Learning objectives
- Prerequisites
- Progress status
- Provider/platform

**Examples**:
- CS50: Introduction to Computer Science
- The Feynman Lectures on Physics
- Deep Learning Specialization
- Data Structures and Algorithms
- Creative Writing Workshop

**Relationships**:
- Teaches → Concepts, Skills
- Requires → Prerequisites
- Uses → Resources
- Builds on → Other Courses

---

## Skill 🎯

**Purpose**: Track abilities you want to develop, practice, and master

**Common Properties**:
- Current proficiency level
- Practice frequency
- Learning milestones
- Assessment criteria
- Time invested

**Examples**:
- Python Programming
- Public Speaking
- Data Visualization
- Technical Writing
- System Design

**Relationships**:
- Built from → Concepts
- Developed through → Courses
- Practiced with → Resources
- Leads to → Insights

---

## Resource 📚

**Purpose**: Catalog books, articles, videos, tools, and learning materials

**Common Properties**:
- Resource type (book, video, article, tool)
- Author/creator
- URL/location
- Reading/viewing status
- Key takeaways
- Rating

**Examples**:
- "Thinking, Fast and Slow" by Daniel Kahneman
- 3Blue1Brown YouTube Channel
- Official Python Documentation
- Anki Flashcard App
- "The Pragmatic Programmer" by Hunt & Thomas

**Relationships**:
- Teaches → Concepts
- Develops → Skills
- Answers → Questions
- Inspires → Insights

---

## Question ❓

**Purpose**: Capture open inquiries, research gaps, and things you want to understand

**Common Properties**:
- Question category
- Priority/importance
- Status (open, exploring, answered)
- Related research
- Partial answers

**Examples**:
- How does spaced repetition work?
- What are the limits of neural networks?
- Why do some habits stick and others don't?
- How can I improve my writing clarity?
- What makes effective teaching effective?

**Relationships**:
- About → Concepts
- Answered by → Resources, Insights
- Leads to → New Questions
- Motivates → Learning Courses

---

## Insight ✨

**Purpose**: Capture aha moments, realizations, and personal discoveries

**Common Properties**:
- Date of insight
- Context/trigger
- Confidence level
- Supporting evidence
- Applications

**Examples**:
- Connection between sleep and memory consolidation
- Why debugging is harder than coding
- The power of teaching to learn
- Pattern recognition in problem-solving
- Writing clarifies thinking

**Relationships**:
- Derived from → Concepts, Resources
- Answers → Questions
- Applies to → Skills
- Connects → Multiple Concepts

---

## Creating Entity Notes

When creating a new entity note, use this frontmatter template:

```yaml
---
dg-publish: true
dg-entity-type: [type]
name: "Entity Name"
description: "Brief description"
tags:
  - relevant-tag
created: YYYY-MM-DD
last_modified: YYYY-MM-DD
---
```

### Required Fields

| Field | Description |
|-------|-------------|
| `dg-publish` | Set to `true` to publish |
| `dg-entity-type` | One of: concept, course, skill, resource, question, insight |
| `name` | Display name |

### Recommended Fields

| Field | Description |
|-------|-------------|
| `description` | Brief summary |
| `tags` | Relevant topic tags |
| `created` | Creation date |
| `last_modified` | Last update date |
| `difficulty` | beginner, intermediate, or advanced |
| `status` | exploring, learning, practicing, or mastered |

## Entity Relationships

Entities connect through wiki links:

```markdown
## Related Entities

- [[Machine Learning]] - Core concept
- [[Python Programming]] - Required skill
- [[Deep Learning Specialization]] - Recommended course
```

These links create the knowledge graph connections visible in the sidebar.

## Color Coding

The visual color coding helps you quickly identify entity types:

- **Blue (Concept)**: The "what" - core ideas to understand
- **Orange (Course)**: The "how" - structured paths to learn
- **Yellow (Skill)**: The "doing" - abilities to practice
- **Green (Resource)**: The "where" - materials to study
- **Purple (Question)**: The "why" - inquiries to explore
- **Pink (Insight)**: The "aha" - discoveries to remember
