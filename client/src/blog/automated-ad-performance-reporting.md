# Automated Ad Performance Reporting for Multi-Channel Media Sales

## Client/Company
Digital Media Publisher

## Industry
Publishing + E-commerce

## Problem
A digital media publisher was selling advertising space across multiple platforms—including their website, newsletters, and promotional campaigns—to over 500+ customers. Their sales and marketing operations team of 9 people across multiple regions was responsible for delivering performance reports back to advertising customers showing key metrics like impressions, clicks, and attributed product sales.

The company's existing reporting infrastructure was built in Coda by a non-technical team member, resulting in fundamental issues with data modeling, table relationships, and report generation workflows. The system relied on manual CSV imports and ad-hoc data processing that created a bottleneck in their operations.

### Critical Pain Points
- **Manual Data Aggregation**: Staff manually downloaded CSV files from Klaviyo, Google Analytics, Google Ad Manager, Woobox, and other platforms, then ran aggregation scripts to compile performance data
- **Extreme Time Burden**: 16 hours per week spent on manual report generation—taking time away from strategic work like campaign optimization and ad placement strategy
- **Data Loss**: Historical ad performance data was ephemeral; when new raw data dumps were uploaded, KPIs for older ad units were lost due to improper archiving
- **Error-Prone Process**: Extensive copy-pasting across platforms introduced frequent errors in customer-facing reports
- **No Historical Analysis**: Team could only view metrics at individual report levels; aggregating KPIs across campaigns, time periods, or customer segments was virtually impossible
- **Single Campaign Complexity**: For a campaign with 10+ ad units, report generation could take multiple hours, creating delays in customer communication

The core issue was that data from multiple advertising channels had no unified indexing system, making it impossible to efficiently map ad unit performance back to specific customers, campaigns, and deployment dates.

## Solution

### Automated Multi-Platform Reporting System
We implemented a comprehensive reporting automation system that integrated APIs from all major advertising platforms, created a proper data indexing architecture, and rebuilt the data model to enable both real-time reporting and historical analysis. The solution leveraged automated middleware workflows to orchestrate data synchronization across multiple platforms while maintaining data integrity and enabling seamless integration between disparate advertising systems.

#### Implementation Timeline
The full system was designed, built, tested, and deployed over 6 months, with ongoing maintenance for adding new ad units to the KPI pipeline.

#### Core System Architecture

**1. Unified Ad Unit Indexing System**
The foundation of the solution was creating a proper indexing layer that established relationships between:
- **Ad Units**: Individual advertisements across all platforms
- **Customers**: Advertisers purchasing the ad space
- **Campaigns**: Collections of related ad units with deployment dates
- **Unique Identifiers**: Platform-specific IDs mapped to a unified internal reference system

This indexing system allowed each ad unit to be tracked across multiple platforms using a single internal identifier, enabling automated data aggregation from disparate sources.

**2. Multi-Platform API Integration**
Built custom data pipelines for each advertising platform:
- **Google Analytics**: Website traffic and conversion tracking
- **Google Ad Manager**: Display ad impressions and click-through rates
- **Woobox**: Social media campaign engagement metrics
- **Klaviyo**: Email campaign performance with complex link-level tracking

Each integration automatically pulled data on a scheduled basis, eliminating manual CSV downloads and data entry.

**3. Klaviyo Link-Level Performance Tracking**
Klaviyo presented a unique technical challenge: their API did not expose aggregate click data for individual links within email campaigns. To solve this:
- Developed a custom data pipeline that pulled raw click events for all campaigns daily
- Implemented fuzzy matching algorithms to match links with specific ad units based on semi-unique identifiers (product IDs, link structures without UTM parameters)
- Programmatically aggregated click data to replicate Klaviyo's native "link activity" report
- Avoided programmatic scraping (per company policy to comply with Klaviyo TOS) while still automating data extraction

**4. Automated Report Generation**
The final system generated comprehensive performance reports including:
- **Campaign Metadata**: Customer, deployment dates, ad unit placements
- **Performance Metrics**: Impressions, clicks, click-through rates, engagement rates
- **Attribution Data**: Product sales directly attributed to each ad unit within the campaign timeframe
- **Historical Context**: Performance comparisons across time periods

Reports that previously took 1 hour to manually compile could now be generated in 2 minutes.

**5. Historical Data Warehouse**
Implemented proper data archiving and storage:
- All ad unit performance data cached permanently
- Enabled historical analysis up to 3 years prior
- Created foundation for multi-year trend analysis and seasonal insights

#### New Analytical Capabilities
With the data infrastructure in place, the team gained access to:
- **Cross-Campaign Analysis**: Compare ad performance across different customers, time periods, and placements
- **Channel Optimization**: Identify which platforms (email, website, social) delivered best ROI for different product categories
- **Seasonal Trends**: Multi-year data revealed seasonal patterns in ad performance
- **Customer Insights**: Aggregate KPIs across customers to identify high-performing partnerships
- **Placement Effectiveness**: Analyze how ad position, format, and medium affected performance

### Users
The system served the 9-person sales and marketing operations team:
- **Account Managers**: Generated customer-facing performance reports in minutes
- **Sales Operations**: Analyzed campaign effectiveness and optimized ad placements
- **Marketing Leadership**: Reviewed high-level metrics and strategic trends across the entire ad portfolio

## Impact

### Time Savings
- **Report generation time reduced by 96%**: From 1 hour per report to 2 minutes
- **Saved 16 hours per week** across the team, freeing staff to focus on strategic initiatives
- **Eliminated manual CSV downloads and data aggregation** across 5+ platforms

### Quality Improvements
- **Eliminated data loss**: Historical ad performance preserved indefinitely (3+ years of data now accessible)
- **Reduced reporting errors**: Automated data pipelines removed manual copy-paste mistakes
- **Improved customer satisfaction**: Faster report turnaround enabled more responsive account management

### Business Outcomes
- **Enabled data-driven optimization**: Team could now analyze which ad placements, formats, and channels performed best
- **Unlocked historical insights**: Multi-year analysis revealed seasonal trends and long-term performance patterns
- **Improved account management**: Faster reporting freed up 16 hours per week for strategic customer conversations
- **Scalable infrastructure**: System could accommodate growing customer base (500+ advertisers and expanding)

### New Strategic Capabilities
- **Cross-customer benchmarking**: Compare campaign performance across customer segments
- **Channel effectiveness analysis**: Identify highest-ROI advertising placements
- **Seasonal optimization**: Plan campaigns based on historical seasonal trends
- **Product-level insights**: Understand which products drove best results in sponsored placements

---

## Technical Highlights
- **Multi-Platform API Orchestration**: Integrated Google Analytics, Google Ad Manager, Klaviyo, Woobox, and other advertising platforms into a unified data pipeline
- **Fuzzy Matching Algorithm**: Custom solution to extract Klaviyo link-level performance data despite API limitations
- **Unified Indexing System**: Created relational data model mapping ad units to customers, campaigns, and platform-specific identifiers
- **Data Archiving Architecture**: Permanent storage of historical KPIs with efficient retrieval for multi-year analysis
- **Compliance-First Automation**: Automated data extraction while respecting platform Terms of Service (avoided web scraping)

## Key Learnings

### Marketing Tech Stacks Are Fragmented
Modern marketing operations span multiple platforms, each with different data models, APIs, and limitations. Klaviyo's lack of direct API access to link-level click data is emblematic of a broader challenge: **marketing tools are optimized for human UI interaction, not always for programmatic data extraction**.

Building effective automation requires:
- Understanding each platform's API capabilities and constraints
- Creating custom data pipelines tailored to each source
- Implementing automated middleware workflows to bridge gaps between incompatible systems
- Navigating company policies around Terms of Service compliance
- Finding creative solutions when direct API access isn't available

### Proper Data Modeling Is Non-Negotiable
The original Coda implementation failed because it treated the system as a spreadsheet rather than a relational database. The breakthrough came from:
- **Unique identifiers**: Creating internal IDs that mapped to platform-specific identifiers across different systems
- **Relational structure**: Proper table relationships between ad units, customers, campaigns, and KPIs
- **Migration planning**: Building flexibility to patch and evolve the data model as requirements changed

**Bottom line**: Unique IDs are critical for successful keying across different platforms and even within tables in the same system.

### Data Archiving Unlocks Strategic Value
The original system's ephemeral data approach (overwriting old data with new imports) limited the team to tactical, report-level thinking. Once historical data was preserved:
- Multi-year trends became visible
- Seasonal patterns emerged
- Strategic questions about channel effectiveness and placement optimization became answerable

The shift from "generate this customer's report" to "optimize our entire ad portfolio" was only possible with proper data warehousing.

### Automation Enables Strategic Work
The 16 hours per week saved wasn't just about efficiency—it fundamentally changed what the team could focus on. Instead of being data entry operators, the marketing ops team could:
- Have strategic conversations with advertisers
- Proactively optimize ad placements
- Develop long-term partnership strategies
- Focus on growing the customer base beyond 500+ advertisers

**The true value of automation isn't time savings; it's unlocking human potential for higher-leverage work.**

---

**Project Duration**: 6 months (initial implementation) + ongoing maintenance  
**Team Impact**: 9-person sales and marketing operations team  
**Customer Scale**: 500+ advertisers across multiple platforms  
**Time Saved**: 16 hours per week (832+ hours annually)
