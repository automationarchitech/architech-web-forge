# CASE STUDY TEMPLATE (AECO-OPTIMIZED)
## Automation Architech - Answer Engine + Human Readability

**Version**: 2.0 (AECO-Optimized)  
**Purpose**: Template for creating answer engine optimized case studies that maintain depth and readability  
**Location**: Save completed files to `/src/content/case-studies/`  
**Naming**: Use kebab-case matching slug field (e.g., `manufacturing-production-scheduling.md`)

---

## Key Improvements Over v1.0

1. **Quick Facts section** - Structured data for AI extraction + prospect self-qualification
2. **Metric-first titles** - SEO-optimized headlines that match search queries
3. **"Our Approach" section** - Elevates proprietary methodology as differentiator
4. **Before/After tables** - Structured comparison for metrics-heavy cases
5. **Industry terminology** - Strategic use of insider terms for answer engine hooks
6. **Technical Highlights expansion** - Selected bullets expanded into sentences for depth

---

## Template File Structure

```markdown
---
title: "[Metric-First Title]: [Context Subtitle]"
company: "[Company Name or Generic Description]"
industry: ["[Industry1]", "[Industry2]"]
industryIcon: "lucide:[icon-name]"
solutionType: "[Service Type Name]"
solutionIcon: "lucide:[icon-name]"
metric: "[Primary Number/Percentage]"
metricLabel: "[What the Metric Represents]"
timeline: "[Project Duration]"
slug: "[kebab-case-slug-matching-filename]"
order: [number]
featured: [true/false]
summary: "[One-line summary for index cards - keep under 150 characters]"
relatedCases: ["[slug-1]", "[slug-2]", "[slug-3]"]
---

## Quick Facts

| **Industry** | [Industry Name] | **Company Size** | [$XM revenue, X employees/operators] |
| **Challenge** | [One-line problem description with scale] | **Solution Type** | [Process Automation / AI Decision Support / Data Integration] |
| **Timeline** | [X weeks/months] | **Key Outcome** | [Primary metric with context] |
| **Scale Indicators** | [Machines, platforms, records processed, campaign volume] | **Integration** | [ERP, EHR, ad platforms, etc.] |

**Quick Facts Guidelines:**
- Use tables for scannability and AI data extraction
- Include scale indicators (27 machines, 200+ records/week, 5+ platforms)
- Name specific platforms/systems (ERP, Shopify, Google Ads) for search hooks
- Keep language concise but include insider terms where natural

---

## Problem

[2-4 paragraphs describing the client's challenge, business context, and pain points]

[First paragraph: Set the scene - who is the client, what industry, what scale]

[Second paragraph: Describe the specific problem or bottleneck they faced]

The [process/system/workflow] involved:

- [Specific pain point 1 with quantification where possible]
- [Specific pain point 2 with quantification where possible]
- [Specific pain point 3 with quantification where possible]
- [Specific pain point 4 with quantification where possible]
- [Specific pain point 5 with quantification where possible]

[Optional third paragraph: Quantify the impact - time wasted, costs, missed opportunities]

**Industry Terminology Notes:**
- Manufacturing: Use ERP, OEE (Overall Equipment Effectiveness), downtime tracking, changeover optimization, Lean principles
- Healthcare: Use HIPAA-compliant, EHR integration, prior authorization, clinical trial recruitment, eligibility verification
- Publishing/Media: Use ad ops, programmatic networks, multi-touch attribution, campaign velocity, CPM/CTR
- E-commerce: Use SKUs, multi-channel fulfillment, inventory sync, CDP (Customer Data Platform), order routing
- Legal: Use e-discovery, M&A due diligence, contract analysis, regulatory compliance
- Add 2-3 industry terms naturally in Problem section

---

## Our Approach [OPTIONAL - Use only for cases with proprietary methodology]

### [Name of Proprietary Method/Architecture]

[2-3 paragraph explanation of WHY this approach is different and WHY it matters]

[First paragraph: Explain the standard approach and its limitations]

**Example for Dual-LLM:**
> Most AI patient matching systems use a single LLM, which introduces 10-15% hallucination risk in medical contexts. Single-LLM systems can confidently provide incorrect assessments with no validation mechanism.

[Second paragraph: Explain your approach]

**Example for Dual-LLM:**
> We built a dual-LLM verification architecture where:
> 
> - **Primary LLM** evaluates patient eligibility against trial criteria
> - **Secondary LLM** independently verifies the primary assessment
> - **Discrepancy Detection** flags conflicting assessments for human review
> - **Confidence Scoring** assigns reliability scores to each determination

[Third paragraph: Explain the unique benefit/outcome]

**Example for Dual-LLM:**
> This architecture achieved 99% reduction in hallucinations compared to single-LLM approaches. In healthcare contexts where false positives can delay trial recruitment or expose patients to inappropriate trials, this verification layer is critical for both accuracy and regulatory compliance.

**When to include "Our Approach" section:**
- âœ… Dual-LLM verification (Clinical Trial case)
- âœ… Custom scheduling algorithm (Manufacturing case - if algorithm has unique features)
- âœ… Multi-platform normalization pipeline (Ad Reporting case - if approach is distinctive)
- âŒ Standard integrations (Email Campaign case - Zapier + APIs is not proprietary)
- âŒ Content strategy (Content Strategy case - data-driven approach is standard practice)

**Structure:**
- Explain standard approach limitations (1 paragraph)
- Explain your approach with technical specifics (bullet list + 1 paragraph)
- Explain unique benefit with quantified outcome (1 paragraph)

---

## Solution

### [Main Solution Component Title]

[1-2 paragraphs describing the high-level approach and methodology]

**Implementation Timeline**

The project was completed in [X weeks/months] with the following phases:

- **[Timeframe 1]:** [Phase description]
- **[Timeframe 2]:** [Phase description]
- **[Timeframe 3]:** [Phase description]
- **[Timeframe 4]:** [Phase description]

**Core System Architecture**

**1. [Component Name]**

- [Feature or capability 1]
- [Feature or capability 2]
- [Feature or capability 3]

**2. [Component Name]**

- [Feature or capability 1]
- [Feature or capability 2]
- [Feature or capability 3]

**3. [Component Name]**

- [Feature or capability 1]
- [Feature or capability 2]
- [Feature or capability 3]

**4. [Component Name]**

- [Feature or capability 1]
- [Feature or capability 2]
- [Feature or capability 3]

**Performance Optimization** [If relevant]

[Paragraph describing how the system was optimized for scale, speed, or accuracy]

**Example:**
> The system was optimized to handle the facility's scale, processing schedules for 27 machines and 116 operators in under 2 minutes. The automated scheduling engine reduced manual intervention from 8 hours to 1 hour per week.

### [Optional: Additional Solution Subsection]

[Description of another aspect of the solution]

[If applicable, describe user roles or technical integration details]

**Users** [If multiple user groups]

The system serves [X] primary user groups:

- **[User Type 1]:** [What they do with the system]
- **[User Type 2]:** [What they do with the system]
- **[User Type 3]:** [What they do with the system]

---

## Impact

### Before & After [OPTIONAL - Use for metrics-heavy cases]

| Metric | Before Automation | After Automation | Improvement |
|--------|-------------------|------------------|-------------|
| [Primary metric] | [Before value] | [After value] | [% or X improvement] |
| [Secondary metric] | [Before value] | [After value] | [% or X improvement] |
| [Tertiary metric] | [Before value] | [After value] | [% or X improvement] |
| [Quality metric] | [Before value] | [After value] | [% or X improvement] |

**When to use Before/After table:**
- âœ… Manufacturing (scheduling time, conflicts, response time)
- âœ… Ad Reporting (manual hours, error costs, report generation time)
- âœ… Email Campaign (error rate, refund costs, manual hours)
- âŒ Clinical Trial (capacity increase is clear without table)
- âŒ Content Strategy (growth metrics don't need before/after structure)

**Table Guidelines:**
- Include 3-5 key metrics that tell the complete story
- Use specific numbers, not vague descriptions
- Include quality metrics (accuracy, errors) alongside time savings
- Add "N/A" for new capabilities that didn't exist before

---

### [Impact Category 1 - e.g., Time Savings]

- [Specific measurable result with numbers]
- [Another quantified outcome]
- [Third outcome or benefit]

### [Impact Category 2 - e.g., Quality Improvements]

- [Specific improvement 1]
- [Specific improvement 2]
- [Specific improvement 3]

### [Impact Category 3 - e.g., Business Outcomes]

- [Business result 1]
- [Business result 2]
- [Business result 3]
- [Business result 4]

### [Optional: Impact Category 4 - e.g., New Capabilities]

- [New capability 1 that wasn't possible before]
- [New capability 2 that wasn't possible before]
- [New capability 3 that wasn't possible before]

**Impact Section Guidelines:**
- Start with time/cost savings (most tangible)
- Follow with quality improvements
- End with strategic/business outcomes
- Use specific numbers wherever possible
- Include both efficiency gains AND new capabilities

---

## Technical Highlights

[List 8-12 technical details or architecture decisions]

**Standard format (bullet list):**
- [Technical detail or architecture decision 1]
- [Technical detail or architecture decision 2]
- [Technical detail or architecture decision 3]
- [Technical detail or architecture decision 4]
- [Technical detail or architecture decision 5]
- [Technical detail or architecture decision 6]
- [Technical detail or architecture decision 7]
- [Technical detail or architecture decision 8]

**AECO Enhancement: Expand 2-3 key bullets into sentences**

**Example - Standard bullet:**
> - Multi-platform API integration with Google Ads, Facebook Ads, and programmatic networks

**Example - Expanded for depth:**
> - **Multi-platform API integration** with Google Ads, Facebook Ads, and programmatic networks. Built custom retry logic to handle rate limits and quota restrictions across platforms with different API architectures. Implemented incremental data updates to minimize API quota usage while maintaining real-time accuracy.

**When to expand bullets:**
1. Proprietary or unique technical approaches (dual-LLM, custom algorithms)
2. Complex integrations that required creative solutions (API workarounds, data normalization)
3. Technical achievements that differentiate from competitors (performance, scale, accuracy)

**Which bullets to expand:**
- Choose 2-3 bullets that demonstrate technical sophistication
- Focus on "how we solved hard problems" not "what technologies we used"
- Expand bullets that technical buyers would care about (CTOs, VPs Engineering)
- Leave simpler bullets as-is (standard integrations, common patterns)

**Technical Highlights Guidelines:**
- Include specific platform/technology names (not just "we integrated systems")
- Mention scale indicators (millions of data points, sub-second queries, 27 machines)
- Note technical constraints overcome (API limitations, data normalization challenges)
- Include compliance/security where relevant (HIPAA, data encryption)
- Balance accessibility (explain acronyms in context) with technical credibility

---

## Key Learnings [OPTIONAL - Include if insights are valuable]

- [Project insight or lesson learned 1]
- [Project insight or lesson learned 2]
- [Project insight or lesson learned 3]
- [Project insight or lesson learned 4]
- [Project insight or lesson learned 5]

**Key Learnings Guidelines:**
- Include genuine insights that would help other organizations (not platitudes)
- Focus on non-obvious lessons (not "planning is important")
- Include technical learnings (API rate limits, data normalization challenges)
- Include process learnings (parallel deployment, user feedback timing)
- Include strategic learnings (what drove most value, what was less important than expected)

**Good examples:**
- âœ… "API rate limits required careful planning for multi-platform integrations - we built retry logic and quota monitoring"
- âœ… "Real-time alerts drove more value than perfect historical reporting - clients cared more about prevention than analysis"
- âœ… "Parallel deployment strategy built team confidence during transition - two weeks of dual-run eliminated adoption resistance"

**Weak examples:**
- âŒ "User feedback is important"
- âŒ "Planning ahead saves time"
- âŒ "Communication is key to success"

---

## Markdown Formatting Rules

1. **Never use `#` (h1)** - Reserved for page title from frontmatter
2. **Start with `##` (h2)** for main sections (Quick Facts, Problem, Our Approach, Solution, Impact, Technical Highlights)
3. **Use `###` (h3)** for subsections within main sections
4. **Use `####` (h4)** for sub-subsections if needed (rare)
5. **Never skip heading levels** (don't go h2 â†' h4)
6. **Use `-` for unordered lists**
7. **Use `1.` for ordered lists** (auto-numbered)
8. **Use `**bold**`** for emphasis (not `__bold__`)
9. **Use `*italic*`** for emphasis (not `_italic_`)
10. **Use tables for structured data** (Quick Facts, Before/After comparisons)
11. **Use `>` for blockquotes** sparingly (only for key insights or unique approaches)

---

## Frontmatter Field Guide

### Title Format (CRITICAL FOR AECO)

**Structure**: [Metric]: [Context]

**Examples:**
- âœ… "87.5% Faster Production Scheduling: 6-Week Low-Code Implementation for 27-Machine Manufacturer"
- âœ… "6-7x Clinical Trial Recruitment Speed: AI Patient Matching with 99% Accuracy"
- âœ… "16 Hours/Week Saved: Automated Multi-Platform Ad Reporting for Digital Publishers"
- âœ… "900% MAU Growth: Data-Driven Content Strategy for SaaS (200K â†' 2M Users)"
- âœ… "$1-5K Monthly Errors Eliminated: Automated Email Campaign Link Management"

**Title Formula:**
- **Part 1: Metric** (what improved, by how much)
- **Part 2: Context** (what was improved, for whom, using what approach)

**Title Guidelines:**
- Lead with the most impressive metric (percentage, multiplier, time saved, cost eliminated)
- Include scale indicators (27 machines, multi-platform, 200K â†' 2M)
- Include approach if distinctive (low-code, AI-powered, dual-LLM)
- Include industry if not obvious from company name (SaaS, manufacturers, publishers)
- Keep under 80 characters if possible (for social sharing)
- Use colons to separate metric from context
- Be specific (not "Improved scheduling" but "87.5% Faster Production Scheduling")

### Required Fields

**company**: Client name or generic description
- Example: `"Paper Product Manufacturer"` or `"Vextras"` or `"Digital Media Publisher"`
- Use generic descriptions for anonymized cases
- Use real names only with client permission

**industry**: Array of industries (supports multi-industry cases)
- Single: `["Manufacturing"]`
- Multiple: `["Publishing & Media", "E-commerce"]`
- Available options: Manufacturing, Healthcare, Publishing & Media, E-commerce, SaaS, Financial Services, Legal Tech, Education Technology

**industryIcon**: Lucide icon for industry
- Available: `factory`, `heart`, `newspaper`, `package`, `monitor`, `landmark`, `scale`, `graduation-cap`

**solutionType**: Service category name
- Options: `"Process Automation"`, `"AI Decision Support"`, `"Multi-Platform Data Integration"`

**solutionIcon**: Lucide icon for solution type
- Available: `settings` (Process Automation), `brain` (AI Decision Support), `database` (Data Integration)

**metric**: Primary impressive number
- Example: `"87.5%"`, `"6-7x"`, `"16 hrs"`, `"900%"`, `"$1-5K"`

**metricLabel**: What the metric represents
- Example: `"Time Reduction"`, `"Capacity Increase"`, `"Saved Per Week"`, `"Growth (200K â†' 2M MAU)"`, `"Monthly Savings"`

**timeline**: Project duration
- Example: `"6 weeks"`, `"6 months"`, `"2 months"`

**slug**: URL-safe version of title (kebab-case)
- Must match filename without `.md`
- Example: `"manufacturing-production-scheduling"` â†' file: `manufacturing-production-scheduling.md`

**order**: Display priority (1-10, lower = higher priority)
- `1` = Most impressive case (shows first)
- `5` = Less impressive case (shows last)

**featured**: Boolean for homepage display
- Use `true` for all current cases

**summary**: One-line description for index cards
- Keep under 150 characters
- Focus on outcome, not approach
- Example: `"Reduced production scheduling time from 8 hours per week to 1 hour through automated production run management."`

**relatedCases**: Array of 3 related case study slugs
- Use slugs of cases with same industry OR same solution type
- Exactly 3 slugs required

---

## Icon Reference

### Industry Icons (industryIcon)
- Legal Tech: `lucide:scale`
- Healthcare: `lucide:heart`
- Publishing & Media: `lucide:newspaper`
- E-commerce: `lucide:package`
- Education Technology: `lucide:graduation-cap`
- Manufacturing: `lucide:factory`
- SaaS: `lucide:monitor`
- Financial Services: `lucide:landmark`

### Solution Type Icons (solutionIcon)
- Process Automation: `lucide:settings`
- AI Decision Support: `lucide:brain`
- Multi-Platform Data Integration: `lucide:database`

---

## Related Cases Selection Logic

**Logic for choosing related cases:**

1. **Same industry first** - If this is Manufacturing, prioritize other Manufacturing cases
2. **Same solution type second** - If this is Process Automation, prioritize other Process Automation cases
3. **Fill remaining slots** - Use highest `order` (priority) cases to fill remaining slots

**Example:**
```yaml
# Current case: Manufacturing + Process Automation
relatedCases: 
  - "clinical-trial-patient-matching"    # Different industry, different solution
  - "ad-performance-reporting"           # Different industry, same solution (Data Integration)
  - "email-campaign-link-management"     # Different industry, same solution (Process Automation)
```

---

## Industry Terminology Reference

### Manufacturing
- **ERP** (Enterprise Resource Planning) - mention when integrating with existing systems
- **OEE** (Overall Equipment Effectiveness) - metric for production efficiency
- **Downtime tracking** - monitoring when machines are not operational
- **Changeover optimization** - reducing time between different production runs
- **Lean principles** - methodology for waste reduction and efficiency
- **Capacity planning** - forecasting production capability
- **Shop floor** - the production area where work happens

### Healthcare
- **HIPAA-compliant** - meeting healthcare data privacy regulations (always mention for healthcare tech)
- **EHR** (Electronic Health Record) - digital patient records
- **Prior authorization** - insurance approval process before treatment
- **Clinical trial recruitment** - finding patients for medical studies
- **Eligibility verification** - checking if patient qualifies for trial/treatment
- **RAG** (Retrieval Augmented Generation) - AI technique for grounding responses in source data
- **Hallucination** - AI term for confidently incorrect outputs

### Publishing & Media
- **Ad ops** (Ad operations) - managing advertising campaigns
- **Programmatic networks** - automated ad buying platforms
- **Multi-touch attribution** - tracking customer journey across multiple ads
- **Campaign velocity** - number of campaigns run per day/week
- **CPM** (Cost Per Mille/Thousand) - advertising cost metric
- **CTR** (Click-Through Rate) - percentage of ad viewers who click

### E-commerce
- **SKUs** (Stock Keeping Units) - product identifiers
- **Multi-channel fulfillment** - shipping from multiple warehouses/locations
- **Inventory sync** - keeping stock levels updated across platforms
- **CDP** (Customer Data Platform) - unified customer data system
- **Order routing** - directing orders to appropriate fulfillment centers

### Legal Tech
- **e-discovery** - electronic document discovery for litigation
- **M&A due diligence** - investigation before merger/acquisition
- **Contract analysis** - reviewing contracts for key terms/risks
- **Regulatory compliance** - meeting legal/industry requirements

### SaaS
- **MAU** (Monthly Active Users) - key growth metric
- **Churn rate** - percentage of customers who cancel
- **LTV** (Lifetime Value) - total revenue from a customer
- **CAC** (Customer Acquisition Cost) - cost to acquire one customer

**Usage Guidelines:**
- Add 2-3 industry terms naturally per case study
- Define acronyms on first use if not obvious from context
- Use terms when describing integrations, methodologies, or metrics
- Don't force jargon where simple language works better
- Prioritize terms that prospects actually search for

---

## Checklist Before Publishing

- [ ] Frontmatter: Title uses metric-first format (e.g., "87.5% Faster...")
- [ ] Frontmatter: All required fields present and accurate
- [ ] Frontmatter: `industry` is an array (even if single industry)
- [ ] Frontmatter: `relatedCases` contains exactly 3 valid slugs
- [ ] Frontmatter: Summary under 150 characters
- [ ] Quick Facts: Table formatted correctly with 4-6 data points
- [ ] Quick Facts: Includes scale indicators and integration platforms
- [ ] Our Approach: Included only if proprietary methodology exists
- [ ] Our Approach: Explains WHY different and WHY it matters
- [ ] Solution: Core System Architecture has 3-5 numbered components
- [ ] Impact: Before/After table included for metrics-heavy cases
- [ ] Impact: All subsections quantify results with specific numbers
- [ ] Technical Highlights: 8-12 bullets total
- [ ] Technical Highlights: 2-3 key bullets expanded into full sentences
- [ ] Technical Highlights: Includes platform/technology names
- [ ] Industry Terms: 2-3 insider terms used naturally throughout
- [ ] No `#` (h1) headings in content (only `##` and below)
- [ ] Consistent heading hierarchy (no skipped levels)
- [ ] Filename matches slug field (kebab-case)
- [ ] File saved to `/src/content/case-studies/` directory
- [ ] Icons exist in Lucide library

---

## AECO Optimization Summary

**What changed from v1.0 to v2.0:**

1. **Quick Facts table** - Structured data extraction for answer engines
2. **Metric-first titles** - Match actual search queries ("87.5% faster scheduling")
3. **"Our Approach" section** - Elevate proprietary methodology
4. **Before/After tables** - Visual comparison for metrics-heavy cases
5. **Expanded Technical Highlights** - 2-3 bullets get full sentence treatment
6. **Industry terminology** - Strategic use of insider terms (ERP, OEE, HIPAA, SKUs)
7. **Scale indicators** - Explicit mention of machines, platforms, records processed
8. **Integration platforms** - Name specific systems (Shopify, Google Ads, EHR)

**Answer Engine Hooks Added:**
- Structured tables (Quick Facts, Before/After) â†' Easy data extraction
- Metric-first titles â†' Match search queries
- Industry terms â†' Semantic relevance for vertical searches
- Platform names â†' Match "X integration" searches
- Scale indicators â†' Help prospects self-qualify
- Our Approach section â†' Citeable differentiators

**Human Readability Maintained:**
- Clear section hierarchy
- Scannable bullet lists
- Visual tables for comparisons
- Expanded bullets add depth without walls of text
- Narrative Problem/Solution/Impact structure preserved

---

**Document Version**: 2.0 (AECO-Optimized)  
**Last Updated**: December 16, 2025  
**Related Files**: AECO-Analysis-Automation-Architech.md, AECO-Executive-Summary-Changes.md
