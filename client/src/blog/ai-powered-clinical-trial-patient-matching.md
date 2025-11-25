# Vextras: AI-Powered Clinical Trial Patient Matching

## Client/Company
Vextras (Software Agency)

## Industry
Medical

## Problem
Matching patients to clinical trials has historically been a manual, time-intensive process requiring human review. Doctors and clinicians needed to:

- Manually review patient records against 50+ complex eligibility criteria for each clinical trial
- Work through a checklist to find evidence that either qualifies or disqualifies patients
- Evaluate absolute exclusions and conditional edge cases across multi-PDF patient records
- Spend **up to an hour or more** per single patient record evaluation

This "human eyeball" approach created a significant bottleneck, limiting the number of patients who could be matched to potentially life-changing clinical trials.

## Solution
Built an AI middleware layer using early LLMs and LangChain that automatically processes batches of patient records and matches them to clinical trial eligibility criteria.

### Technical Approach

**1. Clinical Trial Ingestion & Breakdown**
- Ingested clinical trial documentation on first run
- Automatically parsed and subdivided trials into individual eligibility criteria
- Created a structured checklist of all criteria that patients must match or that disqualify them

**2. RAG-Based Criteria Matching**
- Implemented criteria-by-criteria matching using RAG (Retrieval-Augmented Generation) vector search
- Retrieved a large number of vector items from patient records to ensure comprehensive coverage
- Searched for evidence in multi-PDF patient records that could indicate qualification or disqualification

**3. Early LLM Era Adaptations**
Built during the early days of ChatGPT and LLM technology when models had limited reasoning capabilities:
- Broke down evaluation into individual criteria pieces rather than holistic analysis
- Used LangChain as a prompt wrapper to force output in specific formats
- Addressed inconsistency issues before JSON output was strictly enforced in early OpenAI models

**4. Dual-LLM Verification System**
- **Primary LLM**: Analyzed gathered evidence and made initial eligibility decisions
- **Verifier LLM**: Reviewed the evidence, examined the primary LLM's decision, and performed a double-check
- This verification layer reduced hallucinations and inconsistency by approximately **99%**

**5. Severity Ranking & Monitoring**
- Automatically ranked criteria by severity (absolute no-go vs. acceptable edge cases)
- Implemented real-time visualization layer for monitoring and validation
- Enabled clinicians to quickly focus on the most critical disqualifying factors

## Impact
- **Up to 60+ minutes saved** per patient record evaluation (reduced from 1+ hour to minutes)
- **6-7x increase** in processing capacity (from ~30 patient checks per week to 200+ patient records per week)
- **99% reduction** in hallucinations and output inconsistency through dual-LLM verification
- Enabled clinicians to qualify **significantly more patients** for clinical trials in the same time period
- Improved patient access to potentially life-changing treatments by removing the matching bottleneck

---

---

### Technical Highlights
- **RAG Vector Search**: Criteria-by-criteria matching with comprehensive vector retrieval from multi-PDF patient records
- **LangChain Orchestration**: Batch processing with prompt wrappers to enforce consistent output formats
- **Automated Criteria Parsing**: Breaking down clinical trials into 50+ individual eligibility criteria
- **Dual-LLM Architecture**: Primary analyzer + verifier LLM achieved 99% reduction in hallucinations
- **Early LLM Adaptation**: Built solutions for limited reasoning capabilities and pre-JSON enforcement era
- **Severity-Based Ranking**: Automatic prioritization of absolute exclusions vs. conditional edge cases
- **Real-Time Monitoring**: Visualization layer for validation and clinical oversight