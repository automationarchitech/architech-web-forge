# Modernizing Manufacturing Production Scheduling

## Client/Company
Paper Product Manufacturer

## Industry
Manufacturing

## Problem
The client was a $60M Texas-based manufacturing facility, processes bulk paper rolls into smaller components like napkins, paper towels, and toilet paper for redistribution to major retailers.

The company was managing production scheduling through a legacy Excel spreadsheet system that had become a critical bottleneck. The spreadsheet handled staff assignment to specific machines, shift scheduling, and product configurations across their facility—but its complexity had grown beyond Excel's capabilities.

### Critical Pain Points
- **Calculation Performance**: Complex formulas took 10-15 minutes to recalculate, making real-time adjustments impractical
- **Limited Visibility**: No high-level overview of machine states across the facility for a given day or week
- **Scheduling Errors**: Regular double-booking incidents and scheduling conflicts occurred due to lack of relational data integrity
- **Inflexibility**: Nearly impossible to insert, resequence, or split production runs when new purchase orders arrived
- **Manual Dependencies**: Changing a single cell would force the entire spreadsheet to recalculate, grinding work to a halt

The facility managed 200+ different products across 27 machines (each with different capabilities), utilizing 213 bulk materials and coordinating 116 operators across varying shift patterns. The existing Excel system, originally built to handle much simpler operations, had been patched and extended over time until it became unmaintainable.

## Solution

### Low-Code Production Management System
We implemented a comprehensive production scheduling system using Coda, a low-code platform that provided the flexibility to rebuild their workflow with proper relational data modeling while maintaining ease of use for non-technical staff.

#### Implementation Timeline
The entire system was designed, built, tested, and deployed in 6 weeks from start to finish.

#### Core System Architecture

**1. Production Run Data Object**
The centerpiece of the new system was a production run data object that created relationships between:
- **Products**: Specific items to be manufactured
- **Machines**: Equipment capabilities and production rates
- **Work Orders**: Order quantities and deadlines
- **Machine Shifts**: Varying shift patterns (8-hour, 12-hour, 24-hour cycles)

This relational model calculated production timelines automatically. For example: If a work order required 5,000 units of a product and the assigned machine produced 50 units/hour, the system would:
- Calculate total production time needed (100 hours)
- Map this across the machine's shift schedule
- Account for varying shift lengths week-to-week
- Generate a visual production run on the calendar

**2. Automated Changeover Management**
When machines switched between product types (e.g., from napkins to paper towels), the system automatically:
- Calculated required changeover time based on product combinations
- Inserted gaps between production runs
- Prevented scheduling conflicts during changeover periods

**3. Visual Planning Interface**
- **Calendar View**: High-level overview showing planned products for each machine by day/week/month
- **Machine Status Dashboard**: Real-time view of all 27 machines' production status
- **Daily Production Metrics**: Line charts showing production volume trends over time
- **Downtime Tracking**: Manual input capability for maintenance, breakdowns, or idle periods

**4. Dynamic Scheduling Capabilities**
Built flexibility for daily operational changes:
- Insert new production runs as purchase orders arrive
- Resequence runs to minimize changeover time
- Split runs across multiple time periods
- Optimize shift assignments based on product priorities

#### Performance Optimization
Significant effort was invested in optimizing calculation functions to provide near-instantaneous updates, eliminating the multi-minute wait times that plagued the Excel system.

### Users
The system served three primary user groups:
- **Schedulers**: Created and managed production runs, optimized changeover sequences
- **Floor Supervisors**: Monitored real-time machine status and production progress
- **Production Managers**: Analyzed production metrics and capacity planning

## Impact

### Time Savings
- **Reduced scheduling time by 87.5%**: From 8 hours per week to 1 hour per week
- **Saved 1-2 days per week** in handling daily production changes and resequencing
- **Calculation time dropped 90%+**: From 10-15 minutes to ~1 minute for updates

### Quality Improvements
- **Eliminated double-booking incidents** from recurring issues to zero
- **Reduced scheduling errors** through relational data integrity and automated validation
- **Improved visibility** enabled proactive issue resolution before production delays occurred

### Business Outcomes
- **Increased throughput** by enabling faster, more confident production planning decisions
- **Enhanced agility** to accommodate last-minute purchase order changes without disrupting operations
- **Improved on-time delivery** through better visibility and fewer scheduling conflicts
- **Enabled data-driven optimization** of changeover sequences and shift patterns

### System Performance
- Near-instantaneous calculation updates (compared to 10-15 minute Excel recalculation)
- Seamless user experience for making scheduling adjustments
- Reliable relational data model eliminated cascading errors from manual data entry

---

## Technical Highlights
- **Relational Data Modeling**: Production run object connected products, machines, shifts, and work orders in a normalized structure
- **Dynamic Shift Calculation**: Accounted for varying shift lengths (8-hour shifts one week, 12-hour shifts the next) based on production demands
- **Rate-Based Production Planning**: Automated calculation of required shifts based on machine production rates and work order quantities
- **Visual Dashboards**: Transformed complex spreadsheet data into intuitive calendar and chart visualizations
- **Performance Optimization**: Optimized calculation functions for sub-minute response times across 27 machines and 200+ products

## Key Learnings

### Production Run as a Core Abstraction
The breakthrough insight was creating a "production run" data object that served as a connection layer between static resources (machines, products, operators) and dynamic requirements (work orders, shift patterns). This abstraction allowed the system to:
- Calculate production timelines based on machine rates and shift availability
- Handle varying shift patterns without hardcoding specific schedules
- Adapt to week-to-week operational changes (e.g., switching from 8-hour to 12-hour shifts mid-project)
- Provide a single source of truth for production status

### Manufacturing Scheduling Is Multi-Dimensional
Effective production scheduling requires simultaneously optimizing across:
- **Machine capacity**: Different machines have different speeds and capabilities
- **Changeover costs**: Switching between products has time and material costs
- **Shift constraints**: Labor availability varies by day, week, and season
- **Order priorities**: Customer deadlines drive sequencing decisions
- **Material availability**: Bulk materials must be coordinated with production runs

Low-code platforms like Coda excel at this multi-dimensional problem because they allow rapid iteration on business logic without extensive development cycles.

### Visual Representation Drives Adoption
The calendar view and dashboard visualizations were critical to user adoption. By transforming rows and columns of data into intuitive visual representations, schedulers could:
- Spot conflicts and gaps instantly
- Communicate production plans to floor supervisors without explanation
- Make confident decisions about resequencing based on visual impact

### Real-Time Flexibility Is a Competitive Advantage
The ability to rapidly adjust production schedules in response to new purchase orders or operational changes transformed from "impossible" in Excel to "routine" in the new system. This flexibility became a competitive advantage, allowing Green Bay Converting to accommodate customer requests that would have been rejected under the old system.

---

**Project Duration**: 6 weeks  
**Location**: Texas, USA  
**Company Scale**: $60M annual revenue, 27 machines, 116 operators
