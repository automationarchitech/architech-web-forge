# Vextras: AI-Powered Clinical Trial Patient Matching

## Client/Company
Vextras (Software Agency)

## Industry
Medical

## Problem
Doctors and clinicians needed an efficient way to match patients to clinical trials by evaluating patient records against 50+ complex eligibility criteria, including absolute exclusions and conditional edge cases.

## Solution
Built an AI middleware layer using early LLMs and LangChain that automatically processes batches of patient records, ranks criteria by severity (no-go vs. acceptable edge cases), and includes a verifier LLM with visualization monitoring to prevent hallucinations and ensure accuracy.

## Impact
- **30-60 minutes saved** per patient record evaluation
- **6-7x increase** in processing capacity (from ~30 checks per week to 200+ patient records per week)
- Enabled clinicians to qualify **significantly more patients** for clinical trials in the same time period, improving patient access to new treatments

---

### Technical Highlights
- LLM orchestration with LangChain for batch processing
- Automatic ranking of 50+ eligibility criteria
- Dual-LLM architecture (primary + verifier) for hallucination prevention
- Real-time visualization layer for monitoring and validation