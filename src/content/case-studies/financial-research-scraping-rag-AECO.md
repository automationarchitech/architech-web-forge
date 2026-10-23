---
title: "40,000+ Research PDFs Preserved: Authenticated Scraping and RAG for Financial Content"
company: "Financial Market Intelligence Startup"
industry: ["Financial Services"]
industryIcon: "lucide:landmark"
solutionType: "Multi-Platform Data Integration"
solutionIcon: "lucide:database"
metric: "40,000+"
metricLabel: "Research Documents Preserved"
timeline: "6 weeks (extraction) + RAG build"
slug: "financial-research-scraping-rag"
order: 6
featured: true
summary: "Extracted 40,000+ research PDFs before access expired, then cut article research time by 95% with a RAG content engine."
relatedCases: ["ad-performance-reporting", "content-strategy-growth", "clinical-trial-patient-matching"]
---

## Quick Facts

| | | | |
|----------------------|------------------------------------------------------------------|------------------|-----------------------------------------------|
| **Industry** | Financial Services (market intelligence) | **Company Size** | Early-stage startup covering 3,000+ public companies |
| **Challenge** | 40,000+ research PDFs behind a login that expired in 90 days | **Solution Type** | Authenticated Web Scraping + RAG Content Generation |
| **Timeline** | 6-week extraction sprint, then RAG system build | **Key Outcome** | Full archive preserved; article research time cut 95% (2-3 hrs → 5-10 min) |
| **Scale Indicators** | ~5,000 nested pages, 40,000+ documents, HTML + PDF formats | **Integration** | Selenium, Puppeteer, AWS S3, LlamaIndex, Pinecone, GPT-4, Claude |

## Problem

A financial market intelligence startup was building a Wikipedia-style reference platform with search-optimized pages for more than 3,000 publicly traded companies. The goal was to rank for queries like "3M stock report" or "3M earnings Q3" with unique, data-driven articles.

The team had temporary access to a premium research platform holding roughly 40,000 research PDFs: quarterly earnings reports, analyst notes and market commentary. That access was the whole opportunity, and it had a deadline.

**Critical pain points:**

- **Expiring access:** platform credentials expired in 90 days, after which the research would be gone for good
- **Locked-down portal:** login required a username, password and security questions, so simple scraping wouldn't work
- **Deep navigation:** documents were buried across roughly 5,000 nested pages that needed session-aware crawling
- **Mixed formats:** content lived in both HTML pages and PDFs, each needing its own extraction method
- **Manual writing didn't scale:** researching and writing one article by hand took 3-4 hours, across a universe of 3,000+ companies
- **Originality requirement:** articles had to be unique and plagiarism-free to rank, written in a Bloomberg/Wall Street Journal style

The challenge had two parts: preserve the entire archive before access expired, then turn it into a system that could produce original, accurate financial articles at scale.

## Solution

### Phase 1: Authenticated Scraping Before the Deadline

We built a headless-browser scraping pipeline that extracted the complete research archive inside the 90-day window.

**Authenticated session handling**

- Selenium automated the full login flow, including security questions, with cookie-based session persistence
- Puppeteer handled JavaScript-heavy pages where Selenium hit limits
- Persistent sessions avoided re-authenticating on every run

**Navigating ~5,000 nested pages**

- Breadth-first recursive crawling discovered every content section
- Saved navigation state let runs resume after interruptions
- A deduplication layer prevented re-downloading identical documents

**Multi-format extraction and storage**

- BeautifulSoup parsed HTML pages; PDFs were downloaded directly
- Each file was tagged with company name, ticker, report date, analyst and report type
- Raw files were stored in AWS S3 as an immutable source of truth, with redundant backups and a metadata index
- Rate limiting, politeness delays, proxy rotation and parallel workers kept extraction fast without tripping anti-scraping defenses
- Apify and Crawlee orchestrated and monitored the runs

The full archive of 40,000+ documents was extracted in about 6 weeks, well before the credentials expired.

### Phase 2: RAG Content Engine

With the data safe, we built a retrieval-augmented generation (RAG) system that writes articles grounded in the proprietary research.

**Document processing**

- LlamaIndex orchestrated ingestion, chunking and retrieval
- Documents were split into 512-1,024 token chunks, larger than typical, to keep financial figures in context
- OpenAI embeddings were stored in Pinecone for fast semantic search across the archive

**Generation pipeline**

1. Parse the request for company ticker, time period and article requirements
2. Retrieve the 10-20 most relevant chunks from Pinecone
3. Build a structured prompt combining the request, style rules, SEO targets and retrieved research
4. Generate the draft with GPT-4 or Claude (GPT-3.5-turbo for quick drafts)
5. Let the editor refine it in a chat interface, then export to Word, HTML or plain text for WordPress

**Quality controls**

- Style guidelines enforced a Bloomberg/WSJ tone and structure
- Synthesizing across multiple sources kept articles original
- Generated claims were cross-checked against source documents to reduce hallucinations
- A human editor reviewed every article before publishing

### Phase 3: Publishing (Planned)

The next phase connects the system to the WordPress API so approved articles publish straight to each company's page, with SEO metadata and internal links set automatically.

## Impact

### Before & After

| Metric | Before | After |
|--------|--------|-------|
| Research time per article | 2-3 hours | 5-10 minutes |
| Total time per article | 3-4 hours | 15-20 minutes |
| Weekly article capacity | 2-3 articles | 200+ articles |
| Research archive | Expiring in 90 days | 40,000+ documents preserved in S3 |

### Data Preservation

- All 40,000+ research documents extracted before access expired
- A permanent, searchable archive of institutional-grade analysis the startup could not otherwise rebuild

### Content Production

- **95% less research time** per article
- **100x content capacity**, from 2-3 articles a week to 200+
- Articles grounded in cited source research rather than generic model knowledge

### Business Outcomes

- A content foundation for the full 3,000-company platform
- A proprietary dataset competitors could not access
- Content production that scales without a matching increase in writing staff

## Technical Highlights

- **Authenticated scraping:** Selenium login automation with security questions and cookie persistence, Puppeteer fallback
- **Deep crawling:** breadth-first traversal of ~5,000 nested pages with resumable state and deduplication
- **Raw-first storage:** original PDFs and HTML kept in S3 separately from processed data, so the archive can be re-embedded later
- **Retrieval tuned for finance:** 512-1,024 token chunks, top-k retrieval of 10-20 chunks per request
- **Model routing:** GPT-4 and Claude for publishable drafts, GPT-3.5-turbo for fast outlines
- **Human-in-the-loop UI:** chat-based editing built on LlamaIndex's chat UI, with outline-first drafting and multi-format export

## Key Learnings

- **Preserve first, organize later.** When access is about to expire, capture everything with good metadata and structure it afterward.
- **Keep two browser tools ready.** Selenium and Puppeteer fail on different pages; having both kept extraction on schedule.
- **Metadata at capture time saves weeks.** Tickers, dates and report types recorded during scraping made downstream retrieval far easier.
- **Financial text needs bigger chunks.** Larger chunks kept numbers attached to their context and improved answer quality.
- **Pay for quality where it ranks.** For search-facing content, stronger models produced more original articles and were worth the cost.
- **Separate the phases.** Splitting extraction from the AI build meant the data was safe even while the RAG approach was still being tuned.

