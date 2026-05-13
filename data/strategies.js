window.atlasData = window.atlasData || {};

/* One root vision (parentId null) + 6 pillar strategies */
window.atlasData.enterpriseStrategies = [
  {
    "id": 1,
    "title": "Deliver Value Through Excellence in Utility Services",
    "parentId": null,
    "description": "Serve our communities by delivering safe, affordable, and reliable energy and water — while building a resilient, modern utility capable of leading the clean energy transition.",
    "owner": "CEO",
    "status": "Active",
    "sortOrder": 1,
    "colour": "#7C4DFF"
  },
  {
    "id": 2,
    "title": "Deliver Safe and Reliable Service",
    "parentId": 1,
    "description": "Safety of our people, customers, and communities is the foundation of every decision we make. Provide uninterrupted delivery of electricity, natural gas, and water to the communities we serve.",
    "owner": "COO",
    "status": "Active",
    "sortOrder": 1,
    "colour": "#FF3880"
  },
  {
    "id": 3,
    "title": "Enable the Clean Energy Transition",
    "parentId": 1,
    "description": "Accelerate the shift to low-carbon energy through grid modernization, integration of distributed and renewable resources, and retirement of ageing fossil fuel infrastructure.",
    "owner": "COO",
    "status": "Active",
    "sortOrder": 2,
    "colour": "#05CFFF"
  },
  {
    "id": 4,
    "title": "Build Customer Trust and Loyalty",
    "parentId": 1,
    "description": "Deliver reliable, transparent, and easy-to-navigate customer experiences that build lasting trust with the communities we serve. Make it easy to connect, pay, and get help.",
    "owner": "CCO",
    "status": "Active",
    "sortOrder": 3,
    "colour": "#71E023"
  },
  {
    "id": 5,
    "title": "Modernize the Grid and Operations",
    "parentId": 1,
    "description": "Invest in advanced grid infrastructure, operational technology, and digital tools that improve reliability, enable new energy products, and reduce cost to serve over the long term.",
    "owner": "CTO",
    "status": "Active",
    "sortOrder": 4,
    "colour": "#FEDD00"
  },
  {
    "id": 6,
    "title": "Drive Operational Efficiency",
    "parentId": 1,
    "description": "Manage capital and operating costs with discipline. Reduce duplication, automate routine work, and invest selectively in improvements that deliver measurable returns.",
    "owner": "CFO",
    "status": "Active",
    "sortOrder": 5,
    "colour": "#FF9100"
  },
  {
    "id": 7,
    "title": "Strengthen Organizational Capability",
    "parentId": 1,
    "description": "Build the skills, culture, and talent pipeline needed to deliver our strategy. Invest in our people, modernize how we work, and develop the next generation of utility leaders.",
    "owner": "CHRO",
    "status": "Active",
    "sortOrder": 6,
    "colour": "#7C4DFF"
  }
];

window.atlasData.strategicInitiatives = [
  {
    "id": 1,
    "title": "Harden Aging Infrastructure",
    "description": "Systematically assess and replace transmission and distribution assets that present elevated failure or safety risk, prioritizing based on criticality and consequence of failure.",
    "parentStrategyId": 2,
    "owner": "VP Asset Management",
    "status": "Active",
    "targetOutcome": "Reduction in asset-related outage events and safety incidents year-over-year.",
    "targetDate": "2028-12-31",
    "sortOrder": 1
  },
  {
    "id": 2,
    "title": "Accelerate Emergency Response",
    "description": "Improve storm and emergency response capability through better crew dispatch, real-time field visibility, and proactive customer communication during outage events.",
    "parentStrategyId": 2,
    "owner": "VP Grid Operations",
    "status": "Active",
    "targetOutcome": "Reduction in mean time to restore (MTTR) for major outage events.",
    "targetDate": "2027-06-30",
    "sortOrder": 2
  },
  {
    "id": 3,
    "title": "Expand Distributed Energy Integration",
    "description": "Build the grid interconnection, monitoring, and control capabilities required to safely onboard customer solar, battery storage, and EV charging at scale.",
    "parentStrategyId": 3,
    "owner": "VP Grid Planning",
    "status": "Active",
    "targetOutcome": "Increase in DER interconnection capacity with no degradation to grid stability.",
    "targetDate": "2028-12-31",
    "sortOrder": 1
  },
  {
    "id": 4,
    "title": "Retire Fossil Fuel Assets",
    "description": "Develop and execute a structured decommissioning roadmap for aging gas peaker plants aligned with regulatory commitments.",
    "parentStrategyId": 3,
    "owner": "COO",
    "status": "Active",
    "targetOutcome": "Net reduction in carbon intensity of the generation portfolio by 2030.",
    "targetDate": "2030-12-31",
    "sortOrder": 2
  },
  {
    "id": 5,
    "title": "Launch Digital Self-Serve Portal",
    "description": "Deliver a modern customer portal and mobile app that lets customers manage their account, view usage, report outages, and access programs without calling in.",
    "parentStrategyId": 4,
    "owner": "VP Customer Experience",
    "status": "Active",
    "targetOutcome": "Increase in digital self-serve adoption and reduction in inbound call volume.",
    "targetDate": "2026-12-31",
    "sortOrder": 1
  },
  {
    "id": 6,
    "title": "Improve Outage Communication",
    "description": "Proactively notify affected customers during outage events with accurate estimated restoration times across SMS, email, and app channels.",
    "parentStrategyId": 4,
    "owner": "VP Customer Operations",
    "status": "Active",
    "targetOutcome": "Improvement in customer satisfaction scores during and after outage events.",
    "targetDate": "2027-03-31",
    "sortOrder": 2
  },
  {
    "id": 7,
    "title": "Deploy Advanced Distribution Management",
    "description": "Implement an ADMS to provide real-time situational awareness, automated fault isolation, and optimized power flow across the distribution network.",
    "parentStrategyId": 5,
    "owner": "CTO",
    "status": "Active",
    "targetOutcome": "Full ADMS coverage across the distribution footprint with measurable improvement in SAIDI/SAIFI.",
    "targetDate": "2028-06-30",
    "sortOrder": 1
  },
  {
    "id": 8,
    "title": "Expand Smart Meter Coverage",
    "description": "Extend the AMI rollout to achieve near-universal smart meter coverage, enabling time-of-use pricing, remote connect/disconnect, and granular consumption data.",
    "parentStrategyId": 5,
    "owner": "VP Grid Modernization",
    "status": "Active",
    "targetOutcome": "Percentage of residential and SMB meters with AMI capability.",
    "targetDate": "2028-12-31",
    "sortOrder": 2
  },
  {
    "id": 9,
    "title": "Consolidate Datacentre Footprint",
    "description": "Exit aging co-location facilities and migrate workloads to Azure or refreshed on-premise infrastructure, reducing operational complexity and annual infrastructure spend.",
    "parentStrategyId": 6,
    "owner": "VP IT Infrastructure",
    "status": "Active",
    "targetOutcome": "Reduction in number of active datacentre sites and associated co-location cost.",
    "targetDate": "2028-06-30",
    "sortOrder": 1
  },
  {
    "id": 10,
    "title": "Automate Field Workforce Scheduling",
    "description": "Deploy mobile workforce management and AI-assisted scheduling tools to improve crew utilization, reduce drive time, and increase work order completion rates.",
    "parentStrategyId": 6,
    "owner": "VP Field Operations",
    "status": "Active",
    "targetOutcome": "Increase in work orders completed per crew per day and reduction in overtime hours.",
    "targetDate": "2027-06-30",
    "sortOrder": 2
  },
  {
    "id": 11,
    "title": "Build Next-Generation EA Practice",
    "description": "Develop a mature Enterprise Architecture function that connects business strategy to technology investment decisions and governs the technology portfolio.",
    "parentStrategyId": 7,
    "owner": "Principal Architect",
    "status": "Active",
    "targetOutcome": "EA coverage of all major investment decisions and a maintained, current architecture repository.",
    "targetDate": "2027-12-31",
    "sortOrder": 1
  }
];

/* Strategy → Project mappings */
window.atlasData.projectStrategies = [
  { "id": 1,  "strategyId": 2, "projectId": 8, "alignmentNote": "OT hardening directly reduces safety and cyber risk across the grid estate" },
  { "id": 2,  "strategyId": 2, "projectId": 6, "alignmentNote": "Maximo Mobile improves field crew safety visibility and emergency response speed" },
  { "id": 3,  "strategyId": 3, "projectId": 2, "alignmentNote": "ADMS Phase 2 enables real-time DER monitoring and control" },
  { "id": 4,  "strategyId": 3, "projectId": 4, "alignmentNote": "Smart meter expansion is foundational to time-of-use pricing and DER programs" },
  { "id": 5,  "strategyId": 4, "projectId": 3, "alignmentNote": "Customer portal delivers digital self-serve and real-time outage updates" },
  { "id": 6,  "strategyId": 5, "projectId": 2, "alignmentNote": "ADMS is the core grid modernization investment" },
  { "id": 7,  "strategyId": 5, "projectId": 4, "alignmentNote": "Smart meters are a prerequisite for advanced grid monitoring and demand response" },
  { "id": 8,  "strategyId": 5, "projectId": 9, "alignmentNote": "Water digital twin enables predictive operations for the water network" },
  { "id": 9,  "strategyId": 6, "projectId": 1, "alignmentNote": "SAP upgrade reduces technical debt and improves finance process efficiency" },
  { "id": 10, "strategyId": 6, "projectId": 5, "alignmentNote": "Finance close automation reduces manual effort and improves reporting cycle times across the finance function" },
  { "id": 11, "strategyId": 6, "projectId": 7, "alignmentNote": "Datacentre migration targets a direct reduction in co-location spend" },
  { "id": 12, "strategyId": 6, "projectId": 6, "alignmentNote": "Maximo Mobile improves work order throughput and reduces crew idle time" }
];
