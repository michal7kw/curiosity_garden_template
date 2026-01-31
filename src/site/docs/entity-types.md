---
layout: layouts/note.njk
dg-publish: true
dg-home: false
title: Entity Types Reference
description: Complete reference for all medical entity types in the knowledge garden
permalink: /docs/entity-types/
tags:
  - documentation
  - reference
  - entity-types
created: 2026-01-30
updated: 2026-01-30
---

# Entity Types Reference

This knowledge garden organizes medical information into distinct entity types. Each type represents a category of medical knowledge with specific properties and relationships.

## Entity Type Overview

| Type | Color | Folder | Description |
|------|-------|--------|-------------|
| Biomarker | 🟢 Green | `entities/biomarker/` | Measurable health indicators |
| Drug | 🔵 Blue | `entities/drug/` | Pharmaceutical medications |
| Supplement | 🟣 Purple | `entities/supplement/` | Nutritional supplements |
| Condition | 🟠 Orange | `entities/condition/` | Health conditions & diseases |
| Intervention | 🔵 Cyan | `entities/intervention/` | Treatments & lifestyle changes |
| Hormone | 🔴 Pink | `entities/hormone/` | Hormones & signaling molecules |
| Organ | 🟤 Brown | `entities/organ/` | Body organs & systems |
| Metabolite | ⚫ Gray | `entities/metabolite/` | Metabolic compounds |
| Gene | 🟢 Light Green | `entities/gene/` | Genetic elements |
| Protein | 🔵 Indigo | `entities/protein/` | Protein molecules |

[[consolidate data schema across MKG modules]]

---

## Biomarker 🧪

**Purpose**: Track measurable indicators of health status

**Common Properties**:
- Reference ranges (normal, optimal, concerning)
- Unit of measurement
- Testing methods
- Frequency of testing

**Examples**:
- Glucose (blood sugar)
- Cholesterol (LDL, HDL)
- Hemoglobin A1c
- Vitamin D levels
- Thyroid hormones (TSH, T3, T4)

**Relationships**:
- Measured by → Lab tests
- Indicates → Conditions
- Affected by → Supplements, Drugs, Interventions

---

## Drug 💊

**Purpose**: Document pharmaceutical medications

**Common Properties**:
- Drug class
- Mechanism of action
- Dosage information
- Side effects
- Interactions

**Examples**:
- Metformin
- Atorvastatin
- Levothyroxine
- Aspirin
- Lisinopril

**Relationships**:
- Treats → Conditions
- Interacts with → Other drugs, Supplements
- Affects → Biomarkers

---

## Supplement 🌿

**Purpose**: Document nutritional and herbal supplements

**Common Properties**:
- Recommended dosage
- Forms available
- Absorption factors
- Quality considerations
- Evidence level

**Examples**:
- Vitamin D
- Omega-3 fatty acids
- Magnesium
- Ashwagandha
- Curcumin

**Relationships**:
- Supports → Organs, Functions
- May help with → Conditions
- Affects → Biomarkers
- Interacts with → Drugs

---

## Condition 🏥

**Purpose**: Document health conditions and diseases

**Common Properties**:
- Symptoms
- Risk factors
- Diagnostic criteria
- Treatment options
- Prevention strategies

**Examples**:
- Type 2 Diabetes
- Hypertension
- Hypothyroidism
- Metabolic syndrome
- Osteoporosis

**Relationships**:
- Indicated by → Biomarkers
- Treated by → Drugs, Interventions
- May benefit from → Supplements
- Affects → Organs

---

## Intervention ⚕️

**Purpose**: Document treatments and lifestyle modifications

**Common Properties**:
- Type (lifestyle, procedure, therapy)
- Evidence level
- Implementation steps
- Expected outcomes
- Considerations

**Examples**:
- Intermittent fasting
- Exercise protocols
- Sleep optimization
- Stress management
- Dietary modifications

**Relationships**:
- Helps with → Conditions
- Improves → Biomarkers
- Supports → Organ function

---

## Hormone 🧬

**Purpose**: Document hormones and signaling molecules

**Common Properties**:
- Source organ/gland
- Target tissues
- Functions
- Regulation
- Testing considerations

**Examples**:
- Insulin
- Cortisol
- Testosterone
- Estrogen
- Thyroid hormones

**Relationships**:
- Produced by → Organs
- Affects → Metabolism, Biomarkers
- Influenced by → Drugs, Supplements
- Related to → Conditions

---

## Organ 🫀

**Purpose**: Document body organs and systems

**Common Properties**:
- Location
- Functions
- Associated biomarkers
- Common conditions
- Supporting interventions

**Examples**:
- Liver
- Heart
- Thyroid
- Pancreas
- Kidneys

**Relationships**:
- Produces → Hormones
- Affected by → Conditions
- Supported by → Supplements, Interventions
- Indicated by → Biomarkers

---

## Metabolite ⚙️

**Purpose**: Document metabolic compounds and byproducts

**Common Properties**:
- Metabolic pathway
- Source
- Function
- Reference ranges
- Clinical significance

**Examples**:
- Uric acid
- Bilirubin
- Creatinine
- Homocysteine
- Lactate

**Relationships**:
- Produced by → Metabolism
- Indicates → Organ function
- Affected by → Diet, Drugs

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
| `dg-entity-type` | One of the types above |
| `name` | Display name |

### Recommended Fields

| Field | Description |
|-------|-------------|
| `description` | Brief summary |
| `tags` | Relevant topic tags |
| `created` | Creation date |
| `last_modified` | Last update date |

## Entity Relationships

Entities connect through wiki links:

```markdown
## Related Entities

- [[Vitamin D]] - Supports calcium absorption
- [[Bone Health]] - Primary function
- [[Osteoporosis]] - Deficiency risk
```

These links create the knowledge graph connections visible in the sidebar.
