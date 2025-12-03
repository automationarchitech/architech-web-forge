# Streamlining Email Campaign Link Management for Publishing Operations

## Client/Company
E-commerce Company

## Industry
Publishing & E-commerce

## Problem
A ~100-person e-commerce company that retails books and works with customers to offer ad space in email campaigns was struggling to manage their link infrastructure at scale.

The marketing operations team was pushing 2-4 email campaigns per day through Klaviyo. Each campaign was custom-created by individual editors and included a mix of:
- **House links**: Organic links referring back to the company's main website
- **Ad links**: Sponsored links sold by their sales team to redirect to specific books on behalf of ad customers

Each campaign contained anywhere from **10-100 links** that needed to be managed, verified, and placed correctly.

### Critical Pain Points
- **Scaling Breakdown**: The existing Google Sheets system worked fine when pushing a couple of editorials per week, but quickly became unmanageable at 2-4 campaigns per day
- **No Automation**: Almost every link required manual copy-pasting, with no automation to streamline the workflow
- **Single Massive Spreadsheet**: All links lived in one vertically extensive sheet with no grouping mechanisms or organization
- **High Error Risk**: Visual clutter and lack of field validation made it easy to accidentally paste links in wrong locations
- **Costly Mistakes**: The company dealt with **1-4 bad links per month, resulting in $1-5K USD in ad refunds** per month
- **Day-Before Operations**: The editorial team was forced to work on campaign verification the day before launch, creating high pressure and increased error rates
- **No Link Reusability**: Internal house links that could be set once and reused across campaigns were being manually copied each time
- **Disconnected Systems**: Notion handled editorial assembly and tracking, Coda managed ad sales metadata, but the Google Sheets link sheet was a weak intermediary with no proper integration

The system involved approximately **5 editors** managing this workflow daily, with no clear visibility into which ad units had been placed, which were pending, or how they connected back to the original ad sale metadata in Coda.

## Solution

### Notion + Coda Integration with Automated Link Population
We implemented a comprehensive link management system that connected Coda's ad sales tracking with Notion's editorial workflow, eliminating manual link handling and providing proper organizational structure. The solution utilized automated middleware workflows to synchronize data between platforms and maintain real-time consistency across the editorial and sales operations systems.

#### Implementation Timeline
The entire system was designed, built, tested, and deployed over **2 months**, with a cold cutover deployment strategy.

#### Core System Architecture

**1. Automated Link Sync from Coda to Notion**
- Set up a Zapier listener that monitors the Coda ad sales table for new entries
- When a new ad unit is created in Coda, the automation:
  - Identifies if it's associated with an email campaign type
  - Extracts relevant metadata (advertiser info, book title, link URL, ad specifications)
  - Automatically creates a new entry in a Notion link database with all metadata populated
  
**2. Notion Link Database Structure**
- Created a structured link database in Notion with proper relational properties
- Links are flagged as either "House" (reusable internal links) or "Ad" (single-use sponsored links) based on a column value
- Each link maintains a permanent backlink to the associated ad unit metadata in Coda
- Implemented filtered views for editorial staff to see:
  - **Unassigned ad units**: A triage list of pending links awaiting placement
  - **Campaign-specific links**: Links grouped by their assigned email campaign
  - **House link library**: Reusable internal links available for any campaign

**3. Editorial Workflow Enhancement**
- Editorial team can now review a clean, organized list of pending ad units
- Assign links to specific email campaigns through Notion's interface with proper validation
- Visual clarity replaces the cluttered single spreadsheet, with links organized in their respective "bins"
- Each link shows its full context and metadata without needing to reference external systems

**4. Verification & Notification System**
- Once links are assigned to campaigns, a mechanism notifies the ad sales team that placement is complete
- Ad sales team can verify placement and review link assignments within the connected system
- Creates accountability and transparency across both teams

#### Deployment Strategy
Rather than running both systems in parallel, we executed a **cold cutover**. Since the Zapier automation immediately began populating the Notion triage list upon activation, by the deployment date, there was already a backlog of links ready to be assigned to email campaigns. The editorial team transitioned directly to the new Notion-based workflow without needing to maintain the old Google Sheets system.

## Impact
- **Eliminated ad refunds**: Reduced errors from 1-4 bad links per month ($1-5K in refunds) to **zero errors to date**
- **75% time reduction per campaign**: Decreased link management from **20 minutes to 5 minutes per campaign** by eliminating manual "fetching" of links
- **~4 hours saved per week**: Approximately **15 minutes saved × 15 campaigns/week = 3.75 hours per week** freed up for the 5-person editorial team
- **Extended planning window**: Moved editorial operations from **day-before verification to 1-week advance planning**, dramatically reducing pressure and preventing errors
- **Improved team confidence**: Editorial staff reported "reduced stress" and "more confidence in link accuracy"
- **Prevented revenue loss**: Eliminated the $1-5K/month in ad refunds, protecting advertiser relationships and company reputation
- **Maintained ad placement accuracy**: Zero link errors since implementation while maintaining 2-4 campaigns per day throughput

---

### Technical Highlights

**Coda API Workarounds**
- Coda has severe API limitations beyond certain data sizes and request frequencies
- Bypassed limitations by calling certain API endpoints directly rather than using standard integrations
- Implemented a **daily caching layer** that syncs Coda data to Google Sheets, allowing for much more generous API rate limits for raw data access
- This hybrid approach maintained real-time automation for new ad units while providing reliable bulk data access for reporting and verification

**Zapier Event Listener Architecture**
- Configured Zapier to listen for new row creation events in the Coda ad sales table
- Implemented automated middleware workflows using Zapier to orchestrate data flow between systems
- Conditional logic identifies email-type ads vs. other ad formats
- Selective metadata mapping ensures only relevant fields populate in Notion
- Maintains referential integrity between Coda source records and Notion link entries

**Notion Database Design**
- Leveraged Notion's relational database capabilities to connect links to campaigns
- Custom filtered views provide role-specific interfaces for editorial vs. ad sales teams
- Status properties enable workflow progression tracking (Unassigned → Assigned → Verified → Live)
