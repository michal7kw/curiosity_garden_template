---
created: 2025-11-01
updated: 2026-01-31
---
# Digital Garden Template (digitalgarden_template)                                                                                                             

## Purpose                                                                                                                                                     
- Provides the Eleventy-based static site that publishes curated Obsidian notes and health dashboards to the web, using the Digital Garden plugin workflow     
	- (`digitalgarden_template/README.md`).
- Tailors styling, layout, and publishing automation for medical knowledge sharing, including dashboards, lab test views, and search 
	- (`digitalgarden_template/CLAUDE.md`).                        
- Serves as the public-facing companion to the Personalized AI Health Coach, extending Obsidian content beyond the local vault for sharing and review
	- (`MKG_Docs/Comprehensive_PRD.md`).

## How It Works Today                                                                                                                                          
- Built on [[Eleventy]] with custom [[SCSS]], helpers, and serverless functions that process Obsidian markdown into a publishable knowledge garden                     
- Integrates with the Obsidian Digital Garden plugin to select, sanitize, and deploy notes; commands such as `npm run dev`, `npm run build`, and `npm run deploy` drive the pipeline                         
- Pulls data authored in the vault - *biomarkers, daily metrics, lab tests* - and renders topic pages, knowledge graph visualizations, and dashboards that mirror the Neo4j-backed information 
## Connections Across the MKG Codebase                                                                                                                         
- Consumes the same Obsidian vault synchronized by `src/obsidian_sync/` and the MKG Obsidian plugin, ensuring public content reflects the latest structured notes and relationships 
- Acts as the web presentation layer referenced in the PRD, alongside the Obsidian interface and web app, giving remote access to reports and data entry forms                     
- Shares health insights produced by backend analytics and the recommendation engine by publishing the resulting notes once they are written into the vault.   

## Roadmap & Future Enhancements                                                                                                                               
- Expand dashboard and data-entry experiences described in the PRD (e.g., online forms for lab tests, richer KG interaction) so the digital garden mirrors planned Obsidian plugin workflows
- Tighten integration with selective sync and relationship management efforts underway in the Obsidian plugin, ensuring public content stays aligned with new metadata and relationship types.                                                                                                                               
- Enhance automation: scripted note processing (`npm run process-notes`), search-index refreshes, and deployment hooks to fit into the broader Spec Kit task pipeline                                                                                                           
