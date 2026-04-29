/* =========================================================
   ATLAS · embedded data layer
   ---------------------------------------------------------
   Source: project JSON files + inline mock mappings.
   When migrating to SharePoint Lists, this file is replaced
   by a fetch-based implementation; data.js is the contract.
   ========================================================= */

window.EmbeddedData = {
  domains: [
  {
    "id": 1,
    "title": "Construction",
    "type": "Core",
    "sortOrder": 1,
    "description": "Planning, design, and delivery of capital construction projects."
  },
  {
    "id": 2,
    "title": "Energy Generation",
    "type": "Core",
    "sortOrder": 2,
    "description": "Operation and maintenance of electricity generation assets."
  },
  {
    "id": 3,
    "title": "Energy Transmission",
    "type": "Core",
    "sortOrder": 3,
    "description": "High-voltage transmission of electricity from generation to distribution."
  },
  {
    "id": 4,
    "title": "Energy Distribution",
    "type": "Core",
    "sortOrder": 4,
    "description": "Low/medium-voltage distribution of electricity to end customers."
  },
  {
    "id": 5,
    "title": "Field Service",
    "type": "Core",
    "sortOrder": 5,
    "description": "Dispatch, scheduling, and execution of field workforce activities."
  },
  {
    "id": 6,
    "title": "Energy Management",
    "type": "Core",
    "sortOrder": 6,
    "description": "Real-time monitoring, control, and optimisation of the energy network."
  },
  {
    "id": 7,
    "title": "Customer Services",
    "type": "Core",
    "sortOrder": 7,
    "description": "End-to-end management of the customer relationship and billing lifecycle."
  },
  {
    "id": 8,
    "title": "Enterprise & Governance",
    "type": "Supporting",
    "sortOrder": 8,
    "description": "Corporate strategy, governance, risk, compliance, and legal functions."
  },
  {
    "id": 9,
    "title": "Health, Safety & Environment",
    "type": "Supporting",
    "sortOrder": 9,
    "description": "Health, safety, and environmental management across the enterprise."
  },
  {
    "id": 10,
    "title": "Human Resource",
    "type": "Supporting",
    "sortOrder": 10,
    "description": "People management including recruitment, development, and payroll."
  },
  {
    "id": 11,
    "title": "Finance",
    "type": "Supporting",
    "sortOrder": 11,
    "description": "Financial planning, accounting, reporting, and treasury management."
  },
  {
    "id": 12,
    "title": "Supply Chain & Procurement",
    "type": "Supporting",
    "sortOrder": 12,
    "description": "Sourcing, purchasing, contract management, and logistics."
  },
  {
    "id": 13,
    "title": "Asset Management",
    "type": "Supporting",
    "sortOrder": 13,
    "description": "Lifecycle management of physical and infrastructure assets."
  },
  {
    "id": 14,
    "title": "Digital Technology",
    "type": "Supporting",
    "sortOrder": 14,
    "description": "IT strategy, architecture, delivery, and operations."
  }
],

  capabilities: [
  {
    "id": 1,
    "title": "Engineering & Design",
    "domain": "Construction",
    "sortOrder": 1,
    "description": "Technical design and engineering for capital projects."
  },
  {
    "id": 2,
    "title": "Build & Construct",
    "domain": "Construction",
    "sortOrder": 2,
    "description": "Physical construction and site delivery activities."
  },
  {
    "id": 3,
    "title": "Quality Assurance",
    "domain": "Construction",
    "sortOrder": 3,
    "description": "Inspection, testing, and quality control during construction."
  },
  {
    "id": 4,
    "title": "Generation Planning",
    "domain": "Energy Generation",
    "sortOrder": 1,
    "description": "Long and short-term planning of generation capacity and output."
  },
  {
    "id": 5,
    "title": "Generation Operations",
    "domain": "Energy Generation",
    "sortOrder": 2,
    "description": "Day-to-day operation of generation plant and equipment."
  },
  {
    "id": 6,
    "title": "Generation Maintenance",
    "domain": "Energy Generation",
    "sortOrder": 3,
    "description": "Preventive and corrective maintenance of generation assets."
  },
  {
    "id": 7,
    "title": "Generation Outage Management",
    "domain": "Energy Generation",
    "sortOrder": 4,
    "description": "Scheduling and management of planned and unplanned outages."
  },
  {
    "id": 8,
    "title": "Transmission Planning",
    "domain": "Energy Transmission",
    "sortOrder": 1,
    "description": "Network expansion and capacity planning for transmission infrastructure."
  },
  {
    "id": 9,
    "title": "Transmission Operations",
    "domain": "Energy Transmission",
    "sortOrder": 2,
    "description": "Real-time operation and switching of the transmission network."
  },
  {
    "id": 10,
    "title": "Transmission Maintenance",
    "domain": "Energy Transmission",
    "sortOrder": 3,
    "description": "Maintenance of high-voltage lines, substations, and equipment."
  },
  {
    "id": 11,
    "title": "Transmission Outage Management",
    "domain": "Energy Transmission",
    "sortOrder": 4,
    "description": "Coordination of transmission outages for safety and reliability."
  },
  {
    "id": 12,
    "title": "Distribution Planning",
    "domain": "Energy Distribution",
    "sortOrder": 1,
    "description": "Planning and design of the low/medium-voltage distribution network."
  },
  {
    "id": 13,
    "title": "Distribution Operations",
    "domain": "Energy Distribution",
    "sortOrder": 2,
    "description": "Real-time operation and control of the distribution network."
  },
  {
    "id": 14,
    "title": "Distribution Maintenance",
    "domain": "Energy Distribution",
    "sortOrder": 3,
    "description": "Maintenance of poles, wires, transformers, and distribution equipment."
  },
  {
    "id": 15,
    "title": "Distribution Outage Management",
    "domain": "Energy Distribution",
    "sortOrder": 4,
    "description": "Detection, isolation, and restoration of distribution outages."
  },
  {
    "id": 16,
    "title": "Field Work Planning & Scheduling",
    "domain": "Field Service",
    "sortOrder": 1,
    "description": "Scheduling and dispatching of field crews and work orders."
  },
  {
    "id": 17,
    "title": "Field Operations",
    "domain": "Field Service",
    "sortOrder": 2,
    "description": "Execution of field work orders including inspections and connections."
  },
  {
    "id": 18,
    "title": "Fleet Operations",
    "domain": "Field Service",
    "sortOrder": 3,
    "description": "Management of the vehicle fleet used by field crews."
  },
  {
    "id": 19,
    "title": "Grid Awareness & Control",
    "domain": "Energy Management",
    "sortOrder": 1,
    "description": "SCADA and EMS-driven real-time visibility and control of the grid."
  },
  {
    "id": 20,
    "title": "Energy Measurement",
    "domain": "Energy Management",
    "sortOrder": 2,
    "description": "Metering, data collection, and validation of energy consumption."
  },
  {
    "id": 21,
    "title": "Energy Efficiency",
    "domain": "Energy Management",
    "sortOrder": 3,
    "description": "Demand-side management and energy conservation programmes."
  },
  {
    "id": 22,
    "title": "Distributed Energy Resources",
    "domain": "Energy Management",
    "sortOrder": 4,
    "description": "Integration and management of DER including solar and storage."
  },
  {
    "id": 23,
    "title": "Energy Trades",
    "domain": "Energy Management",
    "sortOrder": 5,
    "description": "Wholesale energy purchasing, trading, and settlement."
  },
  {
    "id": 24,
    "title": "Marketing",
    "domain": "Customer Services",
    "sortOrder": 1,
    "description": "Brand, campaigns, and acquisition marketing activities."
  },
  {
    "id": 25,
    "title": "Sales",
    "domain": "Customer Services",
    "sortOrder": 2,
    "description": "Residential and commercial customer sales and onboarding."
  },
  {
    "id": 26,
    "title": "Customer Relationship",
    "domain": "Customer Services",
    "sortOrder": 3,
    "description": "Ongoing customer engagement, service requests, and complaints."
  },
  {
    "id": 27,
    "title": "Billing, Payments & Collections",
    "domain": "Customer Services",
    "sortOrder": 4,
    "description": "Invoice generation, payment processing, and debt management."
  },
  {
    "id": 28,
    "title": "Business Strategy & Development",
    "domain": "Enterprise & Governance",
    "sortOrder": 1,
    "description": "Corporate strategy, M&A, and business development activities."
  },
  {
    "id": 29,
    "title": "Corporate Relations",
    "domain": "Enterprise & Governance",
    "sortOrder": 2,
    "description": "Investor relations, government affairs, and public communications."
  },
  {
    "id": 30,
    "title": "Risk & Compliance",
    "domain": "Enterprise & Governance",
    "sortOrder": 3,
    "description": "Enterprise risk management, regulatory compliance, and audit."
  },
  {
    "id": 31,
    "title": "Legal & Regulatory",
    "domain": "Enterprise & Governance",
    "sortOrder": 4,
    "description": "Legal counsel, contract management, and regulatory engagement."
  },
  {
    "id": 32,
    "title": "Safety Management",
    "domain": "Health, Safety & Environment",
    "sortOrder": 1,
    "description": "Policies, procedures, and systems for workplace safety."
  },
  {
    "id": 33,
    "title": "Incident & Hazard Management",
    "domain": "Health, Safety & Environment",
    "sortOrder": 2,
    "description": "Reporting, investigation, and resolution of safety incidents."
  },
  {
    "id": 34,
    "title": "Environmental Management",
    "domain": "Health, Safety & Environment",
    "sortOrder": 3,
    "description": "Environmental compliance, monitoring, and sustainability programmes."
  },
  {
    "id": 35,
    "title": "Workforce Planning",
    "domain": "Human Resource",
    "sortOrder": 1,
    "description": "Headcount planning, succession, and workforce strategy."
  },
  {
    "id": 36,
    "title": "Talent Acquisition",
    "domain": "Human Resource",
    "sortOrder": 2,
    "description": "Recruitment, onboarding, and employer brand."
  },
  {
    "id": 37,
    "title": "Learning & Development",
    "domain": "Human Resource",
    "sortOrder": 3,
    "description": "Training, skills development, and competency management."
  },
  {
    "id": 38,
    "title": "Payroll & Benefits",
    "domain": "Human Resource",
    "sortOrder": 4,
    "description": "Payroll processing, benefits administration, and compensation."
  },
  {
    "id": 39,
    "title": "Financial Planning & Analysis",
    "domain": "Finance",
    "sortOrder": 1,
    "description": "Budgeting, forecasting, and management reporting."
  },
  {
    "id": 40,
    "title": "Accounting & Reporting",
    "domain": "Finance",
    "sortOrder": 2,
    "description": "General ledger, accounts payable/receivable, and statutory reporting."
  },
  {
    "id": 41,
    "title": "Treasury & Tax",
    "domain": "Finance",
    "sortOrder": 3,
    "description": "Cash management, debt financing, and tax compliance."
  },
  {
    "id": 42,
    "title": "Capital Programme Management",
    "domain": "Finance",
    "sortOrder": 4,
    "description": "Governance and financial control of capital investment programmes."
  },
  {
    "id": 43,
    "title": "Strategic Sourcing",
    "domain": "Supply Chain & Procurement",
    "sortOrder": 1,
    "description": "Supplier selection, category management, and procurement strategy."
  },
  {
    "id": 44,
    "title": "Contract Management",
    "domain": "Supply Chain & Procurement",
    "sortOrder": 2,
    "description": "Contract lifecycle management from award through to close-out."
  },
  {
    "id": 45,
    "title": "Inventory & Warehouse",
    "domain": "Supply Chain & Procurement",
    "sortOrder": 3,
    "description": "Materials management, stock control, and warehouse operations."
  },
  {
    "id": 46,
    "title": "Logistics & Distribution",
    "domain": "Supply Chain & Procurement",
    "sortOrder": 4,
    "description": "Transport and delivery of materials to field and construction sites."
  },
  {
    "id": 47,
    "title": "Asset Strategy & Planning",
    "domain": "Asset Management",
    "sortOrder": 1,
    "description": "Long-term asset investment planning and lifecycle strategy."
  },
  {
    "id": 48,
    "title": "Asset Register & Data",
    "domain": "Asset Management",
    "sortOrder": 2,
    "description": "Maintenance of the authoritative register of physical assets."
  },
  {
    "id": 49,
    "title": "Reliability & Performance",
    "domain": "Asset Management",
    "sortOrder": 3,
    "description": "Monitoring and optimisation of asset reliability and performance."
  },
  {
    "id": 50,
    "title": "Decommissioning",
    "domain": "Asset Management",
    "sortOrder": 4,
    "description": "Safe removal, disposal, and retirement of end-of-life assets."
  },
  {
    "id": 51,
    "title": "IT Strategy & Architecture",
    "domain": "Digital Technology",
    "sortOrder": 1,
    "description": "Technology strategy, enterprise architecture, and standards governance."
  },
  {
    "id": 52,
    "title": "Application Delivery",
    "domain": "Digital Technology",
    "sortOrder": 2,
    "description": "Software development, integration, and deployment."
  },
  {
    "id": 53,
    "title": "Infrastructure & Cloud",
    "domain": "Digital Technology",
    "sortOrder": 3,
    "description": "Compute, storage, network, and cloud platform operations."
  },
  {
    "id": 54,
    "title": "Cybersecurity",
    "domain": "Digital Technology",
    "sortOrder": 4,
    "description": "Information security, identity, and threat management."
  },
  {
    "id": 55,
    "title": "Data & Analytics",
    "domain": "Digital Technology",
    "sortOrder": 5,
    "description": "Data management, BI, reporting, and advanced analytics."
  },
  {
    "id": 56,
    "title": "End User Services",
    "domain": "Digital Technology",
    "sortOrder": 6,
    "description": "Desktop, device, and productivity service delivery."
  }
],

  applications: [
  {
    "title": "CXone",
    "eaTier": 1,
    "description": "Customer call center platform",
    "applicationType": "SaaS",
    "userBase": "100-499",
    "businessOwner": "Windy Coles",
    "itOwner": "Aldo Peirano",
    "attested": true,
    "enterpriseRegional": "Enterprise",
    "vendor": "NICE",
    "lifecycleStatus": "Build",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": "01-15-2025 09:52:48 - Sanmeet Singh (Work notes)\nCustomer IVR system",
    "id": 1
  },
  {
    "title": "Gensuite",
    "eaTier": 2,
    "description": "Tracking safety and compliance calendar tracking deliverables; recording safety incidents, observations. Gensuite is a software program that allows environmental department, EHS and operations to track spills/incidents and regulatory deadlines",
    "applicationType": "SaaS",
    "userBase": "1000+",
    "businessOwner": "Ester Di Giovanni",
    "itOwner": "Ester Di Giovanni",
    "attested": false,
    "enterpriseRegional": "Enterprise",
    "vendor": "Benchmark Gensuite",
    "lifecycleStatus": "In Use",
    "eolDate": "2026-2027",
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 2
  },
  {
    "title": "Proofpoint Secure Email Relay",
    "eaTier": 1,
    "description": "Enterprise tool for supporting and controlling the ability of enterprise application, systems and services to send transactional email messages securely.",
    "applicationType": "SaaS",
    "userBase": "0-49",
    "businessOwner": "Shon Collins",
    "itOwner": "Matthew Macedo",
    "attested": false,
    "enterpriseRegional": "Enterprise",
    "vendor": "Proofpoint",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 3
  },
  {
    "title": "GAS SOP",
    "eaTier": 4,
    "description": "GAS SOP (System Operating Procedure and Gas Planning) is a SaaS application. The app is for safely handling gas construction projects. It is used by the MASS and NH gas companies. It is used to ensure consistent safety throughout the various stages of each project.",
    "applicationType": "SaaS",
    "userBase": "0-49",
    "businessOwner": "Matthew Demelo",
    "itOwner": "Glen West",
    "attested": false,
    "enterpriseRegional": "East Region",
    "vendor": "Compass365",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 4
  },
  {
    "title": "Azure Legacy Data Archive Solution",
    "eaTier": 4,
    "description": "Legacy Application files which have been decommissioned and require historical data archival are housed within an Azure Files Storage account in a subscription that has been utilized for other archival related projects. The solution will be managed by IT Infrastructure.",
    "applicationType": "On Premise",
    "userBase": "0-49",
    "businessOwner": "Brian Mottershead",
    "itOwner": "Brian Mottershead",
    "attested": false,
    "enterpriseRegional": "Enterprise",
    "vendor": "Liberty Developed Solution",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 5
  },
  {
    "title": "SAP Success Factors",
    "eaTier": 1,
    "description": "SAP HR System",
    "applicationType": "SaaS",
    "userBase": "0-49",
    "businessOwner": "Oludare Olutunfese",
    "itOwner": "Oludare Olutunfese",
    "attested": false,
    "enterpriseRegional": "Enterprise",
    "vendor": "SAP",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 6
  },
  {
    "title": "SharePoint Online",
    "eaTier": 2,
    "description": "Microsoft SharePoint online application using O365. This is an enterprise tool that all the lines of business can use to share and develop documents.",
    "applicationType": "SaaS",
    "userBase": "1000+",
    "businessOwner": "Stipe Maglica",
    "itOwner": "Glen West",
    "attested": true,
    "enterpriseRegional": "Enterprise",
    "vendor": "Microsoft",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 7
  },
  {
    "title": "GoDaddy",
    "eaTier": 4,
    "description": "Public DNS and Domain Name services",
    "applicationType": "SaaS",
    "userBase": "0-49",
    "businessOwner": "Brian Mottershead",
    "itOwner": "Matthew Macedo",
    "attested": false,
    "enterpriseRegional": null,
    "vendor": "GoDaddy",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 8
  },
  {
    "title": "Field Deployment Manager (FDM)",
    "eaTier": 3,
    "description": "Work order management system for Georgia Peach State Gas (GPS). It is part of Georgia's AMR solution.",
    "applicationType": "SaaS",
    "userBase": "0-49",
    "businessOwner": null,
    "itOwner": "Steven Lance",
    "attested": false,
    "enterpriseRegional": null,
    "vendor": "Itron",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 9
  },
  {
    "title": "Fulcrum",
    "eaTier": 4,
    "description": "The Fulcrum App is a mobile data collection platform that collects and analyzes data in the field.",
    "applicationType": "SaaS",
    "userBase": "0-49",
    "businessOwner": "Kyle Wright",
    "itOwner": "Kyle Wright",
    "attested": false,
    "enterpriseRegional": null,
    "vendor": "Fulcrum",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 10
  },
  {
    "title": "Smartsheet",
    "eaTier": 4,
    "description": "Enterprise work management platform",
    "applicationType": "SaaS",
    "userBase": "0-49",
    "businessOwner": "Karen Stewart",
    "itOwner": "Glen West",
    "attested": false,
    "enterpriseRegional": "Enterprise",
    "vendor": "Smartsheet",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 11
  },
  {
    "title": "TariffShark",
    "eaTier": 3,
    "description": "California rate cases software",
    "applicationType": "On Premise",
    "userBase": "0-49",
    "businessOwner": "AnnMarie Sanchez",
    "itOwner": "Glen West",
    "attested": false,
    "enterpriseRegional": "California",
    "vendor": "Links",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 12
  },
  {
    "title": "SAP BODS",
    "eaTier": 3,
    "description": "Business Object Data Services (BODS) is a GUI tool which allows you to create and monitor jobs which take data from various types of sources and perform some complex transformation on the data as per the business requirement and then will load the data to a target which again can be of any type (i.e. SAP application, flat file, any database). The jobs created in BODS can be both real time and batch job.",
    "applicationType": "PaaS",
    "userBase": "0-49",
    "businessOwner": "Angshu Chatterjee",
    "itOwner": "Ketan Chintala",
    "attested": false,
    "enterpriseRegional": "Enterprise",
    "vendor": "SAP",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": "04-22-2026 11:46:45 - Ketan Chintala (Work notes)\nUpdated the mandatory values",
    "id": 13
  },
  {
    "title": "IBM Enterprise Hub",
    "eaTier": 3,
    "description": "Data migration tool. ETL tool",
    "applicationType": "PaaS",
    "userBase": "0-49",
    "businessOwner": "James Lee",
    "itOwner": "James Lee",
    "attested": false,
    "enterpriseRegional": "Enterprise",
    "vendor": "IBM",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 14
  },
  {
    "title": "GSI Distribution Design Studio",
    "eaTier": 2,
    "description": "GIS design tool for electric - also known as DDS, brings in compatible units from SAP, brings in engineering tolerances etc, can build costs for customers",
    "applicationType": "SaaS",
    "userBase": "0-49",
    "businessOwner": "Chris Schafer",
    "itOwner": "Jeff Marshall",
    "attested": false,
    "enterpriseRegional": "Enterprise",
    "vendor": "GSI",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 15
  },
  {
    "title": "Signavio",
    "eaTier": 4,
    "description": "Process mapping tool. Process repository. Process governance",
    "applicationType": "SaaS",
    "userBase": "100-499",
    "businessOwner": "Daniela Niton",
    "itOwner": "Daniela Niton",
    "attested": false,
    "enterpriseRegional": "Enterprise",
    "vendor": "SAP",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 16
  },
  {
    "title": "Synergie",
    "eaTier": 4,
    "description": "Gas + Electric System Modelling",
    "applicationType": "SaaS",
    "userBase": "0-49",
    "businessOwner": "Mike Fobair",
    "itOwner": "Jeff Marshall",
    "attested": false,
    "enterpriseRegional": "Enterprise",
    "vendor": "Synergie",
    "lifecycleStatus": "In Use",
    "eolDate": null,
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 17
  },
  {
    "title": "Hadoop",
    "eaTier": 4,
    "description": "Database for legacy data archiving",
    "applicationType": "PaaS",
    "userBase": "0-49",
    "businessOwner": "Angshu Chatterjee",
    "itOwner": "Ketan Chintala",
    "attested": false,
    "enterpriseRegional": "Massachusetts",
    "vendor": "Apache",
    "lifecycleStatus": "In Use",
    "eolDate": "To Be Determined through 2024 System Decommission & Archival Project",
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": "04-22-2026 11:53:50 - Ketan Chintala (Work notes)\nupdated the fields",
    "id": 18
  },
  {
    "title": "PeopleSoft Financials",
    "eaTier": 4,
    "description": "Empire Financials",
    "applicationType": "On Premise",
    "userBase": "0-49",
    "businessOwner": "Christy Roets",
    "itOwner": "Jeff Marshall",
    "attested": false,
    "enterpriseRegional": "Empire",
    "vendor": "Oracle",
    "lifecycleStatus": "In Use",
    "eolDate": "To Be Determined through 2024 System Decommission & Archival Project",
    "fitnessScore": null,
    "yearlyCost": null,
    "notes": null,
    "id": 19
  }
],

  capabilityApplications: [
  {
    "id": 1,
    "capabilityId": 26,
    "applicationId": 1
  },
  {
    "id": 2,
    "capabilityId": 25,
    "applicationId": 1
  },
  {
    "id": 3,
    "capabilityId": 27,
    "applicationId": 1
  },
  {
    "id": 4,
    "capabilityId": 32,
    "applicationId": 2
  },
  {
    "id": 5,
    "capabilityId": 33,
    "applicationId": 2
  },
  {
    "id": 6,
    "capabilityId": 34,
    "applicationId": 2
  },
  {
    "id": 7,
    "capabilityId": 54,
    "applicationId": 3
  },
  {
    "id": 8,
    "capabilityId": 56,
    "applicationId": 3
  },
  {
    "id": 9,
    "capabilityId": 2,
    "applicationId": 4
  },
  {
    "id": 10,
    "capabilityId": 32,
    "applicationId": 4
  },
  {
    "id": 11,
    "capabilityId": 3,
    "applicationId": 4
  },
  {
    "id": 12,
    "capabilityId": 55,
    "applicationId": 5
  },
  {
    "id": 13,
    "capabilityId": 53,
    "applicationId": 5
  },
  {
    "id": 14,
    "capabilityId": 35,
    "applicationId": 6
  },
  {
    "id": 15,
    "capabilityId": 36,
    "applicationId": 6
  },
  {
    "id": 16,
    "capabilityId": 37,
    "applicationId": 6
  },
  {
    "id": 17,
    "capabilityId": 38,
    "applicationId": 6
  },
  {
    "id": 18,
    "capabilityId": 56,
    "applicationId": 7
  },
  {
    "id": 19,
    "capabilityId": 51,
    "applicationId": 7
  },
  {
    "id": 20,
    "capabilityId": 53,
    "applicationId": 8
  },
  {
    "id": 21,
    "capabilityId": 16,
    "applicationId": 9
  },
  {
    "id": 22,
    "capabilityId": 17,
    "applicationId": 9
  },
  {
    "id": 23,
    "capabilityId": 20,
    "applicationId": 9
  },
  {
    "id": 24,
    "capabilityId": 17,
    "applicationId": 10
  },
  {
    "id": 25,
    "capabilityId": 42,
    "applicationId": 11
  },
  {
    "id": 26,
    "capabilityId": 51,
    "applicationId": 11
  },
  {
    "id": 27,
    "capabilityId": 31,
    "applicationId": 12
  },
  {
    "id": 28,
    "capabilityId": 30,
    "applicationId": 12
  },
  {
    "id": 29,
    "capabilityId": 55,
    "applicationId": 13
  },
  {
    "id": 30,
    "capabilityId": 55,
    "applicationId": 14
  },
  {
    "id": 31,
    "capabilityId": 1,
    "applicationId": 15
  },
  {
    "id": 32,
    "capabilityId": 12,
    "applicationId": 15
  },
  {
    "id": 33,
    "capabilityId": 51,
    "applicationId": 16
  },
  {
    "id": 34,
    "capabilityId": 28,
    "applicationId": 16
  },
  {
    "id": 35,
    "capabilityId": 4,
    "applicationId": 17
  },
  {
    "id": 36,
    "capabilityId": 12,
    "applicationId": 17
  },
  {
    "id": 37,
    "capabilityId": 8,
    "applicationId": 17
  },
  {
    "id": 38,
    "capabilityId": 55,
    "applicationId": 18
  },
  {
    "id": 39,
    "capabilityId": 40,
    "applicationId": 19
  },
  {
    "id": 40,
    "capabilityId": 39,
    "applicationId": 19
  },
  {
    "id": 41,
    "capabilityId": 41,
    "applicationId": 19
  }
],

  capabilityMaturity: [
  {
    "id": 1,
    "capabilityId": 1,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 2,
    "capabilityId": 2,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 3,
    "capabilityId": 3,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 4,
    "capabilityId": 4,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 5,
    "capabilityId": 5,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 6,
    "capabilityId": 6,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 7,
    "capabilityId": 7,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 8,
    "capabilityId": 8,
    "view": "overall",
    "score": 5,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 9,
    "capabilityId": 9,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 10,
    "capabilityId": 10,
    "view": "overall",
    "score": 5,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 11,
    "capabilityId": 11,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 12,
    "capabilityId": 12,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 13,
    "capabilityId": 13,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 14,
    "capabilityId": 14,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 15,
    "capabilityId": 15,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 16,
    "capabilityId": 16,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 17,
    "capabilityId": 17,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 18,
    "capabilityId": 18,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 19,
    "capabilityId": 19,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 20,
    "capabilityId": 20,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 21,
    "capabilityId": 21,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 22,
    "capabilityId": 22,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 23,
    "capabilityId": 23,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 24,
    "capabilityId": 24,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 25,
    "capabilityId": 25,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 26,
    "capabilityId": 26,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 27,
    "capabilityId": 27,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 28,
    "capabilityId": 28,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 29,
    "capabilityId": 29,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 30,
    "capabilityId": 30,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 31,
    "capabilityId": 31,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 32,
    "capabilityId": 32,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 33,
    "capabilityId": 33,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 34,
    "capabilityId": 34,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 35,
    "capabilityId": 35,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 36,
    "capabilityId": 36,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 37,
    "capabilityId": 37,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 38,
    "capabilityId": 38,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 39,
    "capabilityId": 39,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 40,
    "capabilityId": 40,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 41,
    "capabilityId": 41,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 42,
    "capabilityId": 42,
    "view": "overall",
    "score": 5,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 43,
    "capabilityId": 43,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 44,
    "capabilityId": 44,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 45,
    "capabilityId": 45,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 46,
    "capabilityId": 46,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 47,
    "capabilityId": 47,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 48,
    "capabilityId": 48,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 49,
    "capabilityId": 49,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 50,
    "capabilityId": 50,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 51,
    "capabilityId": 51,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 52,
    "capabilityId": 52,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 53,
    "capabilityId": 53,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 54,
    "capabilityId": 54,
    "view": "overall",
    "score": 4,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 55,
    "capabilityId": 55,
    "view": "overall",
    "score": 3,
    "assessedDate": "2026-01-15"
  },
  {
    "id": 56,
    "capabilityId": 56,
    "view": "overall",
    "score": 2,
    "assessedDate": "2026-01-15"
  }
],

  taxonomySegments: [
  {
    "Title": "End User Device Segment",
    "SortOrder": 1,
    "LayoutHint": "full-width-top"
  },
  {
    "Title": "Application Delivery Segment",
    "SortOrder": 2,
    "LayoutHint": "app-row"
  },
  {
    "Title": "Automation & AI",
    "SortOrder": 3,
    "LayoutHint": "app-row"
  },
  {
    "Title": "Application Lifecycle Management",
    "SortOrder": 4,
    "LayoutHint": "app-row"
  },
  {
    "Title": "Operations Management Segment",
    "SortOrder": 5,
    "LayoutHint": "main-left-tall"
  },
  {
    "Title": "Identity Segment",
    "SortOrder": 6,
    "LayoutHint": "main-center"
  },
  {
    "Title": "Collaboration Segment",
    "SortOrder": 7,
    "LayoutHint": "main-center"
  },
  {
    "Title": "Integration Segment",
    "SortOrder": 8,
    "LayoutHint": "main-center"
  },
  {
    "Title": "Data Segment",
    "SortOrder": 9,
    "LayoutHint": "main-center"
  },
  {
    "Title": "DR Segment",
    "SortOrder": 10,
    "LayoutHint": "main-center"
  },
  {
    "Title": "Security Segment",
    "SortOrder": 11,
    "LayoutHint": "main-right-tall"
  },
  {
    "Title": "Infrastructure Services Segment",
    "SortOrder": 12,
    "LayoutHint": "infra-row"
  },
  {
    "Title": "Compute Segment",
    "SortOrder": 13,
    "LayoutHint": "infra-row"
  },
  {
    "Title": "Storage Segment",
    "SortOrder": 14,
    "LayoutHint": "infra-row"
  },
  {
    "Title": "Network Segment",
    "SortOrder": 15,
    "LayoutHint": "infra-row"
  },
  {
    "Title": "Hosting Segment",
    "SortOrder": 16,
    "LayoutHint": "full-width-bottom"
  }
],

  taxonomyServices: [
  {
    "Title": "Virtual Desktops",
    "Segment": "End User Device Segment",
    "SortOrder": 1
  },
  {
    "Title": "Laptops & Desktops",
    "Segment": "End User Device Segment",
    "SortOrder": 2
  },
  {
    "Title": "Mobile Devices",
    "Segment": "End User Device Segment",
    "SortOrder": 3
  },
  {
    "Title": "MFP",
    "Segment": "End User Device Segment",
    "SortOrder": 4
  },
  {
    "Title": "Endpoint Management",
    "Segment": "End User Device Segment",
    "SortOrder": 5
  },
  {
    "Title": "Web Browser",
    "Segment": "End User Device Segment",
    "SortOrder": 6
  },
  {
    "Title": "Application Streaming",
    "Segment": "Application Delivery Segment",
    "SortOrder": 1
  },
  {
    "Title": "Desktop Streaming",
    "Segment": "Application Delivery Segment",
    "SortOrder": 2
  },
  {
    "Title": "Desktop Application Provisioning",
    "Segment": "Application Delivery Segment",
    "SortOrder": 3
  },
  {
    "Title": "Vendor Application Access",
    "Segment": "Application Delivery Segment",
    "SortOrder": 4
  },
  {
    "Title": "AI",
    "Segment": "Automation & AI",
    "SortOrder": 1
  },
  {
    "Title": "RPA",
    "Segment": "Automation & AI",
    "SortOrder": 2
  },
  {
    "Title": "Code Management",
    "Segment": "Application Lifecycle Management",
    "SortOrder": 1
  },
  {
    "Title": "Testing & Defect Mgmt",
    "Segment": "Application Lifecycle Management",
    "SortOrder": 2
  },
  {
    "Title": "IT Service Management",
    "Segment": "Operations Management Segment",
    "SortOrder": 1
  },
  {
    "Title": "CMDB",
    "Segment": "Operations Management Segment",
    "SortOrder": 2
  },
  {
    "Title": "Application Monitoring",
    "Segment": "Operations Management Segment",
    "SortOrder": 3
  },
  {
    "Title": "Infrastructure Monitoring",
    "Segment": "Operations Management Segment",
    "SortOrder": 4
  },
  {
    "Title": "Identity & Permission Management",
    "Segment": "Identity Segment",
    "SortOrder": 1
  },
  {
    "Title": "Elevated App Permission Management",
    "Segment": "Identity Segment",
    "SortOrder": 2
  },
  {
    "Title": "Email Services",
    "Segment": "Collaboration Segment",
    "SortOrder": 1
  },
  {
    "Title": "Fax Services",
    "Segment": "Collaboration Segment",
    "SortOrder": 2
  },
  {
    "Title": "IM Services",
    "Segment": "Collaboration Segment",
    "SortOrder": 3
  },
  {
    "Title": "Video Conferencing",
    "Segment": "Collaboration Segment",
    "SortOrder": 4
  },
  {
    "Title": "Document Collaboration",
    "Segment": "Collaboration Segment",
    "SortOrder": 5
  },
  {
    "Title": "Business Telephony",
    "Segment": "Collaboration Segment",
    "SortOrder": 6
  },
  {
    "Title": "Workplace Applications",
    "Segment": "Collaboration Segment",
    "SortOrder": 7
  },
  {
    "Title": "Integration Management",
    "Segment": "Integration Segment",
    "SortOrder": 1
  },
  {
    "Title": "File Transfer Services",
    "Segment": "Integration Segment",
    "SortOrder": 2
  },
  {
    "Title": "Batch Management",
    "Segment": "Integration Segment",
    "SortOrder": 3
  },
  {
    "Title": "ETL",
    "Segment": "Data Segment",
    "SortOrder": 1
  },
  {
    "Title": "Analytics and Modelling",
    "Segment": "Data Segment",
    "SortOrder": 2
  },
  {
    "Title": "Reporting",
    "Segment": "Data Segment",
    "SortOrder": 3
  },
  {
    "Title": "Databases",
    "Segment": "Data Segment",
    "SortOrder": 4
  },
  {
    "Title": "Data Warehouse",
    "Segment": "Data Segment",
    "SortOrder": 5
  },
  {
    "Title": "Data Lake",
    "Segment": "Data Segment",
    "SortOrder": 6
  },
  {
    "Title": "Data Archiving",
    "Segment": "Data Segment",
    "SortOrder": 7
  },
  {
    "Title": "Application DR Plans",
    "Segment": "DR Segment",
    "SortOrder": 1
  },
  {
    "Title": "Site DR Plans",
    "Segment": "DR Segment",
    "SortOrder": 2
  },
  {
    "Title": "Replication Services",
    "Segment": "DR Segment",
    "SortOrder": 3
  },
  {
    "Title": "Backup And Recovery",
    "Segment": "DR Segment",
    "SortOrder": 4
  },
  {
    "Title": "Endpoint Threat Detection and Response",
    "Segment": "Security Segment",
    "SortOrder": 1
  },
  {
    "Title": "Server Threat Detection and Response",
    "Segment": "Security Segment",
    "SortOrder": 2
  },
  {
    "Title": "Privileged Access Management",
    "Segment": "Security Segment",
    "SortOrder": 3
  },
  {
    "Title": "Vulnerability Management",
    "Segment": "Security Segment",
    "SortOrder": 4
  },
  {
    "Title": "Data Retention",
    "Segment": "Security Segment",
    "SortOrder": 5
  },
  {
    "Title": "Domain / Directory",
    "Segment": "Infrastructure Services Segment",
    "SortOrder": 1
  },
  {
    "Title": "Certificates",
    "Segment": "Infrastructure Services Segment",
    "SortOrder": 2
  },
  {
    "Title": "DNS Services",
    "Segment": "Infrastructure Services Segment",
    "SortOrder": 3
  },
  {
    "Title": "Load Balancer Services",
    "Segment": "Infrastructure Services Segment",
    "SortOrder": 4
  },
  {
    "Title": "Proxy Services",
    "Segment": "Infrastructure Services Segment",
    "SortOrder": 5
  },
  {
    "Title": "Printing Services",
    "Segment": "Infrastructure Services Segment",
    "SortOrder": 6
  },
  {
    "Title": "Time Service",
    "Segment": "Infrastructure Services Segment",
    "SortOrder": 7
  },
  {
    "Title": "IPAM",
    "Segment": "Infrastructure Services Segment",
    "SortOrder": 8
  },
  {
    "Title": "Operating System",
    "Segment": "Compute Segment",
    "SortOrder": 1
  },
  {
    "Title": "Virtualization",
    "Segment": "Compute Segment",
    "SortOrder": 2
  },
  {
    "Title": "Physical Servers",
    "Segment": "Compute Segment",
    "SortOrder": 3
  },
  {
    "Title": "SAN",
    "Segment": "Storage Segment",
    "SortOrder": 1
  },
  {
    "Title": "Cloud Storage",
    "Segment": "Storage Segment",
    "SortOrder": 2
  },
  {
    "Title": "Archive Storage",
    "Segment": "Storage Segment",
    "SortOrder": 3
  },
  {
    "Title": "LAN",
    "Segment": "Network Segment",
    "SortOrder": 1
  },
  {
    "Title": "Wireless LAN",
    "Segment": "Network Segment",
    "SortOrder": 2
  },
  {
    "Title": "Datacenter Network",
    "Segment": "Network Segment",
    "SortOrder": 3
  },
  {
    "Title": "WAN",
    "Segment": "Network Segment",
    "SortOrder": 4
  },
  {
    "Title": "Internet Access",
    "Segment": "Network Segment",
    "SortOrder": 5
  },
  {
    "Title": "3rd Party Connectivity",
    "Segment": "Network Segment",
    "SortOrder": 6
  },
  {
    "Title": "VPN",
    "Segment": "Network Segment",
    "SortOrder": 7
  },
  {
    "Title": "Firewall Services",
    "Segment": "Network Segment",
    "SortOrder": 8
  },
  {
    "Title": "Network Access Control",
    "Segment": "Network Segment",
    "SortOrder": 9
  },
  {
    "Title": "Cloud Hosting Architecture",
    "Segment": "Hosting Segment",
    "SortOrder": 1
  },
  {
    "Title": "Datacenter Environmental",
    "Segment": "Hosting Segment",
    "SortOrder": 2
  },
  {
    "Title": "Office Environmental",
    "Segment": "Hosting Segment",
    "SortOrder": 3
  }
],

  technologies: [
  {
    "Title": "Citrix",
    "Service": "Virtual Desktops",
    "LifecycleStatus": "Core",
    "Description": "Primary virtual desktop platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "VMWare",
    "Service": "Virtual Desktops",
    "LifecycleStatus": "Declining",
    "Description": "Legacy VDI platform being phased out.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Azure Desktops",
    "Service": "Virtual Desktops",
    "LifecycleStatus": "Special Use",
    "Description": "Azure Virtual Desktop for specific use cases.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Windows 11 Enterprise",
    "Service": "Laptops & Desktops",
    "LifecycleStatus": "Emerging",
    "Description": "Target OS for all managed end-user devices.",
    "StrategyAlignment": "Migrate all devices from Windows 10 to Windows 11 Enterprise by end of 2026.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Windows 10 Pro",
    "Service": "Laptops & Desktops",
    "LifecycleStatus": "Core",
    "Description": "Current primary OS for managed devices.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Dell",
    "Service": "Laptops & Desktops",
    "LifecycleStatus": "Core",
    "Description": "Standard hardware vendor for laptops and desktops.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Co-Managed by MS Intune",
    "Service": "Laptops & Desktops",
    "LifecycleStatus": "Emerging",
    "Description": "Modern co-management configuration with Intune + SCCM.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Hardware managed by SCCM",
    "Service": "Laptops & Desktops",
    "LifecycleStatus": "Core",
    "Description": "Legacy SCCM-managed hardware. Being transitioned to co-management.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "iOS and iPadOS",
    "Service": "Mobile Devices",
    "LifecycleStatus": "Core",
    "Description": "Apple mobile platform — primary for corporate devices.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Android",
    "Service": "Mobile Devices",
    "LifecycleStatus": "Core",
    "Description": "Android devices supported where required.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "iPhone and Samsung",
    "Service": "Mobile Devices",
    "LifecycleStatus": "Core",
    "Description": "Approved hardware vendors for mobile devices.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Bell",
    "Service": "Mobile Devices",
    "LifecycleStatus": "Core",
    "Description": "Standard carrier for Canadian mobile users.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Verizon",
    "Service": "Mobile Devices",
    "LifecycleStatus": "Core",
    "Description": "Standard carrier for US mobile users.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Managed by MS Intune",
    "Service": "Mobile Devices",
    "LifecycleStatus": "Core",
    "Description": "All corporate mobile devices managed via Intune MDM.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Canon",
    "Service": "MFP",
    "LifecycleStatus": "Core",
    "Description": "Approved MFP vendor.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Xerox",
    "Service": "MFP",
    "LifecycleStatus": "Core",
    "Description": "Approved MFP vendor.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "HP",
    "Service": "MFP",
    "LifecycleStatus": "Core",
    "Description": "Approved MFP vendor.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "MS Intune",
    "Service": "Endpoint Management",
    "LifecycleStatus": "Emerging",
    "Description": "Modern endpoint management platform. Target state for all device management.",
    "StrategyAlignment": "Migrate all SCCM-managed devices to Intune co-management by end of 2026.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SCCM",
    "Service": "Endpoint Management",
    "LifecycleStatus": "Core",
    "Description": "Current primary endpoint management. Being phased to co-management with Intune.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Microsoft Edge",
    "Service": "Web Browser",
    "LifecycleStatus": "Core",
    "Description": "Primary corporate browser. Managed via policy.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Chrome",
    "Service": "Web Browser",
    "LifecycleStatus": "Core",
    "Description": "Supported browser. Chrome Enterprise policy applied.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Citrix CVAD",
    "Service": "Application Streaming",
    "LifecycleStatus": "Core",
    "Description": "Citrix Virtual Apps and Desktops — primary application streaming platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Citrix CVAD",
    "Service": "Desktop Streaming",
    "LifecycleStatus": "Core",
    "Description": "Citrix CVAD used for full desktop streaming delivery.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SCCM",
    "Service": "Desktop Application Provisioning",
    "LifecycleStatus": "Core",
    "Description": "SCCM used for software packaging and deployment to managed endpoints.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "TBD",
    "Service": "Vendor Application Access",
    "LifecycleStatus": "Pending",
    "Description": "Standards not yet defined.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Microsoft Copilot",
    "Service": "AI",
    "LifecycleStatus": "Emerging",
    "Description": "AI-powered productivity assistant across M365 suite.",
    "StrategyAlignment": "Primary AI platform. Expand licencing to all knowledge workers through 2025-2026. Evaluate Copilot Studio for agent-based automation.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Azure OpenAI",
    "Service": "AI",
    "LifecycleStatus": "Emerging",
    "Description": "Azure-hosted OpenAI models for custom AI development.",
    "StrategyAlignment": "Platform for POC AI agent development. Governed access via Azure API Management.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Power Automate",
    "Service": "RPA",
    "LifecycleStatus": "Core",
    "Description": "Low-code automation platform for business process automation.",
    "StrategyAlignment": "Standard RPA platform. Expand through Power Automate Centre of Excellence.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "GitHub Enterprise Cloud",
    "Service": "Code Management",
    "LifecycleStatus": "Core",
    "Description": "Primary source control and CI/CD platform.",
    "StrategyAlignment": "Target state for all source code. Migrate residual TFS and git-server repositories by Q2 2026.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "TFS",
    "Service": "Code Management",
    "LifecycleStatus": "Declining",
    "Description": "Team Foundation Server — legacy source control.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "git server",
    "Service": "Code Management",
    "LifecycleStatus": "Declining",
    "Description": "Self-hosted git server — legacy. Migrate to GitHub Enterprise Cloud.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Microsoft ALM",
    "Service": "Testing & Defect Mgmt",
    "LifecycleStatus": "Core",
    "Description": "Microsoft Application Lifecycle Management for test management.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Worksoft",
    "Service": "Testing & Defect Mgmt",
    "LifecycleStatus": "Core",
    "Description": "Automated testing tool for SAP.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Loadrunner / Stormrunner",
    "Service": "Testing & Defect Mgmt",
    "LifecycleStatus": "Core",
    "Description": "Load and performance testing platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "ServiceNow",
    "Service": "IT Service Management",
    "LifecycleStatus": "Emerging",
    "Description": "Cloud-based ITSM platform replacing IFS Assyst as the primary enterprise ITSM tool.",
    "StrategyAlignment": "Strategic platform for all ITSM processes by 2026. Integration with CMDB and HRSD modules to be completed in Phase 2.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Service Hub",
    "Service": "IT Service Management",
    "LifecycleStatus": "Core",
    "Description": "IFS Assyst — current primary ITSM platform.",
    "StrategyAlignment": "Maintain for current incident and change management. Migrate workloads to ServiceNow through 2025-2026.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SolMan",
    "Service": "IT Service Management",
    "LifecycleStatus": "Core",
    "Description": "SAP Solution Manager — used for SAP transport management only.",
    "StrategyAlignment": "Retain for SAP transport pipeline. Do not expand scope.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "PowerBI",
    "Service": "IT Service Management",
    "LifecycleStatus": "Core",
    "Description": "Reporting layer for ITSM metrics and SLA dashboards.",
    "StrategyAlignment": "Standard reporting platform. Connect to ServiceNow data layer as migration progresses.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "ServiceNow",
    "Service": "CMDB",
    "LifecycleStatus": "Emerging",
    "Description": "Target CMDB repository. Migration from Service Hub in progress.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Service Hub",
    "Service": "CMDB",
    "LifecycleStatus": "Core",
    "Description": "Current CMDB repository.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SCCM",
    "Service": "CMDB",
    "LifecycleStatus": "Core",
    "Description": "Hardware discovery and data collection for CMDB population.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Device 42",
    "Service": "CMDB",
    "LifecycleStatus": "Core",
    "Description": "To be decommissioned once ServiceNow CMDB is fully populated.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "TBD",
    "Service": "Application Monitoring",
    "LifecycleStatus": "Pending",
    "Description": "Standards not yet defined. Platform selection in progress.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Solarwinds NPM",
    "Service": "Infrastructure Monitoring",
    "LifecycleStatus": "Core",
    "Description": "Network performance monitoring.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Sailpoint IIQ",
    "Service": "Identity & Permission Management",
    "LifecycleStatus": "Core",
    "Description": "Identity governance and access certification platform.",
    "StrategyAlignment": "Core identity platform. Integrate with ServiceNow for provisioning workflows.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Active Directory",
    "Service": "Identity & Permission Management",
    "LifecycleStatus": "Core",
    "Description": "On-premises directory service and primary identity store.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "PingOne",
    "Service": "Identity & Permission Management",
    "LifecycleStatus": "Core",
    "Description": "Cloud identity platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Single Sign On",
    "Service": "Identity & Permission Management",
    "LifecycleStatus": "Core",
    "Description": "SSO capability delivered via Ping stack.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Ping-Federate",
    "Service": "Identity & Permission Management",
    "LifecycleStatus": "Special Use",
    "Description": "Federation server for specific external integrations.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "PingID",
    "Service": "Identity & Permission Management",
    "LifecycleStatus": "Core",
    "Description": "Multi-factor authentication platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "ServiceHub",
    "Service": "Identity & Permission Management",
    "LifecycleStatus": "Core",
    "Description": "Used for access request and provisioning workflows.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "TBD",
    "Service": "Elevated App Permission Management",
    "LifecycleStatus": "Pending",
    "Description": "PAM standards in progress.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Office 365",
    "Service": "Email Services",
    "LifecycleStatus": "Core",
    "Description": "Microsoft 365 Exchange Online — primary email platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Exchange 2019",
    "Service": "Email Services",
    "LifecycleStatus": "Core",
    "Description": "On-premises Exchange — hybrid configuration.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Netscaler",
    "Service": "Email Services",
    "LifecycleStatus": "Core",
    "Description": "Email proxy and load balancing.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Online Fax (TBD)",
    "Service": "Fax Services",
    "LifecycleStatus": "Pending",
    "Description": "Physical fax being replaced. Online fax vendor selection in progress.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "MS Teams",
    "Service": "IM Services",
    "LifecycleStatus": "Core",
    "Description": "Primary instant messaging and unified comms platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Jabber",
    "Service": "IM Services",
    "LifecycleStatus": "Declining",
    "Description": "Cisco Jabber — being decommissioned as Teams adoption completes.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "MS Teams",
    "Service": "Video Conferencing",
    "LifecycleStatus": "Core",
    "Description": "Primary video conferencing platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Go-To Webinar",
    "Service": "Video Conferencing",
    "LifecycleStatus": "Core",
    "Description": "External webinar platform for large-audience events.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Logitech",
    "Service": "Video Conferencing",
    "LifecycleStatus": "Core",
    "Description": "Standard room video hardware.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Crestron",
    "Service": "Video Conferencing",
    "LifecycleStatus": "Special Use",
    "Description": "Room control systems for boardrooms and specialised spaces.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Poly",
    "Service": "Video Conferencing",
    "LifecycleStatus": "Special Use",
    "Description": "Legacy room hardware in some locations.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SharePoint / OneDrive",
    "Service": "Document Collaboration",
    "LifecycleStatus": "Core",
    "Description": "Primary document collaboration and storage platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "MS Teams",
    "Service": "Document Collaboration",
    "LifecycleStatus": "Core",
    "Description": "Team-level document collaboration via SharePoint-backed channels.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Cisco CUCM",
    "Service": "Business Telephony",
    "LifecycleStatus": "Core",
    "Description": "Cisco Unified Communications Manager — enterprise telephony platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Microsoft 365",
    "Service": "Workplace Applications",
    "LifecycleStatus": "Core",
    "Description": "Enterprise productivity suite. Standard across all business units.",
    "StrategyAlignment": "Primary productivity platform. AI capability through Copilot add-on licencing.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SAP CPI/BTP",
    "Service": "Integration Management",
    "LifecycleStatus": "Core",
    "Description": "Primary integration platform for SAP and non-SAP integrations.",
    "StrategyAlignment": "Strategic integration platform. All new integrations must use CPI/BTP. Legacy PI/PO to be decommissioned post S/4HANA migration.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SAP PI/PO",
    "Service": "Integration Management",
    "LifecycleStatus": "Core",
    "Description": "Legacy SAP integration platform. Being phased out in favour of CPI/BTP.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "MoveIT sFTP",
    "Service": "Integration Management",
    "LifecycleStatus": "Core",
    "Description": "Managed file transfer platform for secure file-based integrations.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SAP S/4 HANA Native Integration",
    "Service": "Integration Management",
    "LifecycleStatus": "Not Permitted",
    "Description": "Direct table-level integration bypasses governance controls. Not permitted.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "ADO (Advanced DevOps)",
    "Service": "Integration Management",
    "LifecycleStatus": "Core",
    "Description": "Used for C1 project integration workflows.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "MoveIT sFTP",
    "Service": "File Transfer Services",
    "LifecycleStatus": "Core",
    "Description": "Managed file transfer — primary platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "IP Switch",
    "Service": "File Transfer Services",
    "LifecycleStatus": "Declining",
    "Description": "Legacy file transfer tool being phased out.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SAP CPI/BTP",
    "Service": "Batch Management",
    "LifecycleStatus": "Core",
    "Description": "SAP BTP used for batch scheduling and management of integration flows.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Azure Data Lake",
    "Service": "ETL",
    "LifecycleStatus": "Emerging",
    "Description": "Azure Data Lake used as the primary landing zone for ETL workloads.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SAP",
    "Service": "ETL",
    "LifecycleStatus": "Emerging",
    "Description": "SAP-native ETL capabilities used within S/4HANA ecosystem.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Azure Data Lake",
    "Service": "Analytics and Modelling",
    "LifecycleStatus": "Core",
    "Description": "Primary analytics and big data platform.",
    "StrategyAlignment": "Build out Liberty Data Lake as the single analytics foundation. Migrate on-prem analytics workloads to Azure.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "PowerBI",
    "Service": "Reporting",
    "LifecycleStatus": "Core",
    "Description": "Standard enterprise reporting platform.",
    "StrategyAlignment": "Default reporting tool for all business reporting. SAP Fiori for transactional SAP reporting. SAC for financial planning.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SAP Analytics Cloud (SAC)",
    "Service": "Reporting",
    "LifecycleStatus": "Core",
    "Description": "SAP-native financial planning and analytics platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SAP Fiori",
    "Service": "Reporting",
    "LifecycleStatus": "Core",
    "Description": "SAP transactional reporting and self-service analytics.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SAP ABAP Reports",
    "Service": "Reporting",
    "LifecycleStatus": "Core",
    "Description": "Legacy SAP ABAP custom reports.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Microsoft SQL Server",
    "Service": "Databases",
    "LifecycleStatus": "Core",
    "Description": "Primary on-premises relational database platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SQL Azure",
    "Service": "Databases",
    "LifecycleStatus": "Emerging",
    "Description": "Cloud database platform. Target for new application database requirements.",
    "StrategyAlignment": "Preferred database for new cloud-native applications.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Oracle",
    "Service": "Databases",
    "LifecycleStatus": "Declining",
    "Description": "Being phased out as Oracle EBS is decommissioned.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Datasphere",
    "Service": "Data Warehouse",
    "LifecycleStatus": "Emerging",
    "Description": "SAP Datasphere — cloud data warehouse platform.",
    "StrategyAlignment": "Target state data warehouse. Consolidate on-prem DW workloads as SAP S/4HANA migration completes.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Azure Data Lake",
    "Service": "Data Lake",
    "LifecycleStatus": "Core",
    "Description": "Primary data lake platform hosted in Azure.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "e-HUB",
    "Service": "Data Archiving",
    "LifecycleStatus": "Core",
    "Description": "Enterprise archiving platform for structured data.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SQL Database",
    "Service": "Data Archiving",
    "LifecycleStatus": "Core",
    "Description": "SQL-based archiving for application data.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Hadoop",
    "Service": "Data Archiving",
    "LifecycleStatus": "Core",
    "Description": "Hadoop-based big data archiving.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Datasphere",
    "Service": "Data Archiving",
    "LifecycleStatus": "Emerging",
    "Description": "SAP Datasphere for long-term SAP data archiving.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "TBD",
    "Service": "Application DR Plans",
    "LifecycleStatus": "Pending",
    "Description": "On hold — standards to be defined.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "TBD",
    "Service": "Site DR Plans",
    "LifecycleStatus": "Pending",
    "Description": "On hold — standards to be defined.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Recovery Manager",
    "Service": "Replication Services",
    "LifecycleStatus": "Core",
    "Description": "Primary replication and recovery management tool.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Avamar PowerProtect Data Manager",
    "Service": "Backup And Recovery",
    "LifecycleStatus": "Core",
    "Description": "Primary enterprise backup platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Metalic (O365)",
    "Service": "Backup And Recovery",
    "LifecycleStatus": "Declining",
    "Description": "M365 backup — being reviewed as native M365 retention policies mature.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Sentinel One",
    "Service": "Endpoint Threat Detection and Response",
    "LifecycleStatus": "Core",
    "Description": "Primary endpoint detection and response platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Cisco Secure EndPoint",
    "Service": "Endpoint Threat Detection and Response",
    "LifecycleStatus": "Declining",
    "Description": "Being replaced by Sentinel One.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "McAfee ENS",
    "Service": "Endpoint Threat Detection and Response",
    "LifecycleStatus": "Declining",
    "Description": "Legacy endpoint protection. Decommissioned.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Sentinel One",
    "Service": "Server Threat Detection and Response",
    "LifecycleStatus": "Core",
    "Description": "Server EDR — same platform as endpoint for unified visibility.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Quest",
    "Service": "Privileged Access Management",
    "LifecycleStatus": "Core",
    "Description": "Privileged account management and Active Directory delegation.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "ServiceHub",
    "Service": "Privileged Access Management",
    "LifecycleStatus": "Core",
    "Description": "Access request and approval workflows for elevated permissions.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SailPoint IIQ",
    "Service": "Privileged Access Management",
    "LifecycleStatus": "Emerging",
    "Description": "SailPoint expanding to cover privileged identity governance.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Qualys",
    "Service": "Vulnerability Management",
    "LifecycleStatus": "Core",
    "Description": "Primary vulnerability scanning and management platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "SCCM",
    "Service": "Vulnerability Management",
    "LifecycleStatus": "Core",
    "Description": "Used for patch compliance reporting.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Intune",
    "Service": "Vulnerability Management",
    "LifecycleStatus": "Core",
    "Description": "Patch compliance for Intune-managed devices.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "TBD",
    "Service": "Data Retention",
    "LifecycleStatus": "Pending",
    "Description": "Standards tracked by Security team. Policy-defined retention enforced via M365 and Azure.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Active Directory",
    "Service": "Domain / Directory",
    "LifecycleStatus": "Core",
    "Description": "On-premises directory service. Azure AD Connect syncs to Entra ID.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "DigiCert / Internal CA",
    "Service": "Certificates",
    "LifecycleStatus": "Core",
    "Description": "Public certificate authority (DigiCert) and internal CA for private certificates.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Umbrella",
    "Service": "DNS Services",
    "LifecycleStatus": "Core",
    "Description": "Cisco Umbrella — cloud DNS security and resolution.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Network Solutions",
    "Service": "DNS Services",
    "LifecycleStatus": "Core",
    "Description": "External DNS registrar and zone management.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Citrix ADC",
    "Service": "Load Balancer Services",
    "LifecycleStatus": "Core",
    "Description": "Application delivery controller for load balancing and SSL offload.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Azure Native Load Balancers",
    "Service": "Load Balancer Services",
    "LifecycleStatus": "Core",
    "Description": "Azure Load Balancer and Application Gateway for cloud workloads.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Netscaler ADC",
    "Service": "Proxy Services",
    "LifecycleStatus": "Core",
    "Description": "Reverse proxy and application delivery.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Print Servers",
    "Service": "Printing Services",
    "LifecycleStatus": "Core",
    "Description": "Windows-based print servers across office locations.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "NTP Appliances",
    "Service": "Time Service",
    "LifecycleStatus": "Core",
    "Description": "Network time protocol appliances for infrastructure time synchronisation.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Spreadsheets",
    "Service": "IPAM",
    "LifecycleStatus": "Declining",
    "Description": "IP address management via spreadsheets. Replacement tool to be selected.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Windows Server Datacenter 2019",
    "Service": "Operating System",
    "LifecycleStatus": "Core",
    "Description": "Standard server OS for on-premises virtualised workloads.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "VMware ESX v7.x",
    "Service": "Virtualization",
    "LifecycleStatus": "Core",
    "Description": "Primary hypervisor for on-premises virtualisation.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "vCenter 7.x",
    "Service": "Virtualization",
    "LifecycleStatus": "Core",
    "Description": "VMware management platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "VMWare Distributed Virtual Switches",
    "Service": "Virtualization",
    "LifecycleStatus": "Core",
    "Description": "Virtual networking within vSphere environment.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Dell PowerEdge 740",
    "Service": "Physical Servers",
    "LifecycleStatus": "Core",
    "Description": "Primary on-premises server hardware.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Azure IaaS",
    "Service": "Physical Servers",
    "LifecycleStatus": "Core",
    "Description": "Cloud IaaS for workloads migrated to or born in Azure.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Dell VXRail",
    "Service": "Physical Servers",
    "LifecycleStatus": "Declining",
    "Description": "HCI platform being phased out.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Dell Chassis",
    "Service": "Physical Servers",
    "LifecycleStatus": "Declining",
    "Description": "Blade chassis — being retired as hardware refreshes.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Dell PowerStore",
    "Service": "SAN",
    "LifecycleStatus": "Core",
    "Description": "Primary SAN storage platform.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Dell PowerVault NAS",
    "Service": "SAN",
    "LifecycleStatus": "Core",
    "Description": "NAS storage for unstructured data.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Azure IaaS",
    "Service": "SAN",
    "LifecycleStatus": "Core",
    "Description": "Azure managed disks and storage for cloud workloads.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "VXRail vSAN",
    "Service": "SAN",
    "LifecycleStatus": "Declining",
    "Description": "HCI storage — being retired with VXRail.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Compellent",
    "Service": "SAN",
    "LifecycleStatus": "Declining",
    "Description": "Legacy Dell Compellent SAN. Being decommissioned.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "EqualLogic",
    "Service": "SAN",
    "LifecycleStatus": "Declining",
    "Description": "Legacy Dell EqualLogic iSCSI. Decommissioned.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Azure",
    "Service": "Cloud Storage",
    "LifecycleStatus": "Core",
    "Description": "Azure Blob, Files, and Data Lake storage.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Baracuda",
    "Service": "Archive Storage",
    "LifecycleStatus": "Core",
    "Description": "Email and data archiving appliance.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Cisco C9300 Switches",
    "Service": "LAN",
    "LifecycleStatus": "Core",
    "Description": "Standard access and distribution layer switches.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Cisco Wireless LAN Controller",
    "Service": "Wireless LAN",
    "LifecycleStatus": "Core",
    "Description": "WLC for managed wireless across all sites.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Cisco Lightweight Access Points",
    "Service": "Wireless LAN",
    "LifecycleStatus": "Core",
    "Description": "Standard wireless access point hardware.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Cisco ACI",
    "Service": "Datacenter Network",
    "LifecycleStatus": "Core",
    "Description": "Application Centric Infrastructure for datacenter SDN.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Azure Native Networking",
    "Service": "Datacenter Network",
    "LifecycleStatus": "Core",
    "Description": "Azure VNets, NSGs, and route tables for cloud networking.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Cisco SDWan",
    "Service": "WAN",
    "LifecycleStatus": "Core",
    "Description": "Software-defined WAN for branch connectivity.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Cisco Catalyst 9000 Routers",
    "Service": "WAN",
    "LifecycleStatus": "Core",
    "Description": "Core and edge routing.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Cisco Catalyst 1000 Routers",
    "Service": "WAN",
    "LifecycleStatus": "Core",
    "Description": "Branch edge routers.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Per-site Internet Access",
    "Service": "Internet Access",
    "LifecycleStatus": "Core",
    "Description": "Site-local internet breakout via ISP circuits.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Site-to-Site VPN",
    "Service": "3rd Party Connectivity",
    "LifecycleStatus": "Core",
    "Description": "IPsec VPN for third-party partner connectivity.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Cisco AnyConnect",
    "Service": "VPN",
    "LifecycleStatus": "Core",
    "Description": "Remote access VPN for employees and contractors.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "FTD2000/4000",
    "Service": "Firewall Services",
    "LifecycleStatus": "Core",
    "Description": "Cisco Firepower Threat Defence — primary perimeter firewalls.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Cisco Catalyst 9000 Routers",
    "Service": "Firewall Services",
    "LifecycleStatus": "Core",
    "Description": "Integrated firewall capability on edge routers.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Cisco Catalyst 1000 Routers",
    "Service": "Firewall Services",
    "LifecycleStatus": "Core",
    "Description": "Integrated firewall on branch routers.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Cisco ISE",
    "Service": "Network Access Control",
    "LifecycleStatus": "Emerging",
    "Description": "Identity Services Engine — NAC for wired and wireless.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Azure Policies",
    "Service": "Cloud Hosting Architecture",
    "LifecycleStatus": "Emerging",
    "Description": "Azure Policy framework for cloud governance and guardrails.",
    "StrategyAlignment": "Expand Azure Policy library as part of Cloud Landing Zone Expansion. Integrate with GitHub Actions for policy-as-code.",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Terraform",
    "Service": "Cloud Hosting Architecture",
    "LifecycleStatus": "Emerging",
    "Description": "Infrastructure-as-code for Azure resource provisioning.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Azure Native Cost Reporting",
    "Service": "Cloud Hosting Architecture",
    "LifecycleStatus": "Core",
    "Description": "Azure Cost Management and Billing for cloud spend visibility.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Toronto Colocation",
    "Service": "Datacenter Environmental",
    "LifecycleStatus": "Core",
    "Description": "Primary Canadian colocation facility.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "NJ Colocation",
    "Service": "Datacenter Environmental",
    "LifecycleStatus": "Core",
    "Description": "Primary US east coast colocation facility.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Azure",
    "Service": "Datacenter Environmental",
    "LifecycleStatus": "Core",
    "Description": "Azure regions used for cloud-hosted workloads.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "IBM Washington and Dallas",
    "Service": "Datacenter Environmental",
    "LifecycleStatus": "Declining",
    "Description": "Legacy IBM-hosted datacentres. Being exited.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Joplin, MO",
    "Service": "Datacenter Environmental",
    "LifecycleStatus": "Declining",
    "Description": "Legacy facility being decommissioned.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  },
  {
    "Title": "Managed by Facilities",
    "Service": "Office Environmental",
    "LifecycleStatus": "Core",
    "Description": "Office environmental services managed by the Facilities team.",
    "StrategyAlignment": "",
    "ConfigStandardsURL": "",
    "SolutionArchitectureURL": "",
    "Notes": ""
  }
],

  projects: [
  {
    "id": 1,
    "title": "S/4 HANA Upgrade",
    "program": "Applications",
    "priority": "Tier 1",
    "status": "In-Flight",
    "category": "Improvement - SAP Enterprise Systems",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Dan Belson",
    "startDate": "2025-04-01",
    "endDate": "2026-09-30",
    "description": "SAP S/4 is in extended support until 2026; in-place upgrade with Capgemini, bundled with optimisations.",
    "totalCpex": 4300000,
    "cost2026it": 4300000,
    "opexImpact": "Decrease",
    "roi": "Neutral",
    "comments": "Continuation from 2025.",
    "carryingOver": true
  },
  {
    "id": 2,
    "title": "FSM Replacement (Click)",
    "program": "Applications",
    "priority": "Tier 1",
    "status": "In-Flight",
    "category": "Improvement - SAP Enterprise Systems",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Dan Belson",
    "startDate": "2025-09-01",
    "endDate": "2026-12-31",
    "description": "Click scheduling reaches end of life in 2026 and is incompatible with the new S/4 release. RFP for product/partner selection.",
    "totalCpex": 2200000,
    "cost2026it": 2200000,
    "opexImpact": "No change",
    "roi": "Neutral",
    "comments": "Required to unblock S/4 upgrade.",
    "carryingOver": true
  },
  {
    "id": 3,
    "title": "ITSM (ServiceNow) Phase 1",
    "program": "Operations",
    "priority": "Tier 1",
    "status": "In-Flight",
    "category": "Improvement - Sustainment/Asset Replacement",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Dan Belson",
    "startDate": "2025-03-01",
    "endDate": "2025-11-30",
    "description": "Replace Service Hub (IFS Assyst) with ServiceNow as primary ITSM platform.",
    "totalCpex": 150000,
    "cost2026it": 150000,
    "opexImpact": "No change",
    "roi": "Neutral",
    "comments": "Go-live moved to Nov 2025; 2026 spend reduced from $324K to $150K.",
    "carryingOver": true
  },
  {
    "id": 4,
    "title": "IVR Upgrade",
    "program": "Network",
    "priority": "Tier 1",
    "status": "Withdrawn",
    "category": "Improvement - Customer",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Dan Belson",
    "startDate": "2025-06-01",
    "endDate": "2026-06-30",
    "description": "Continue deployment of new IVR (CXone) for customer call centre.",
    "totalCpex": 0,
    "cost2026it": 0,
    "opexImpact": "No change",
    "roi": "Neutral",
    "comments": "Budget ($5.7M) covered under Customer LTM file.",
    "carryingOver": true
  },
  {
    "id": 5,
    "title": "ZENITH — Datacenter Consolidation",
    "program": "Zenith",
    "priority": "Tier 1",
    "status": "Proposed",
    "category": "Improvement - Corporate Initiative",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Dan Belson",
    "startDate": "2026-01-01",
    "endDate": "2027-12-31",
    "description": "Consolidate datacentres to reduce colo, hardware, and duplicate capability spend; exit IBM Washington/Dallas and Joplin facilities.",
    "totalCpex": 4500000,
    "cost2026it": 4500000,
    "opexImpact": "Decrease",
    "roi": "Positive",
    "comments": "",
    "carryingOver": true
  },
  {
    "id": 6,
    "title": "ZENITH — GIS Cost Savings",
    "program": "Zenith",
    "priority": "Tier 1",
    "status": "Proposed",
    "category": "Improvement - Corporate Initiative",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Dan Belson",
    "startDate": "2026-02-01",
    "endDate": "2026-12-31",
    "description": "Replace Citrix VDI with AVD/laptops for GIS users, right-size Azure VMs and databases, reduce vendor support, review ESRI licensing.",
    "totalCpex": 300000,
    "cost2026it": 300000,
    "opexImpact": "Decrease",
    "roi": "",
    "comments": "",
    "carryingOver": true
  },
  {
    "id": 7,
    "title": "SSAM Upgrade",
    "program": "Applications",
    "priority": "Tier 1",
    "status": "Proposed",
    "category": "Improvement - SAP Enterprise Systems",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Dan Belson",
    "startDate": "2026-03-01",
    "endDate": "2026-09-30",
    "description": "SAP Service & Asset Manager goes out of support May 2026. Coordinated with S/4 upgrade.",
    "totalCpex": 300000,
    "cost2026it": 300000,
    "opexImpact": "No change",
    "roi": "Neutral",
    "comments": "",
    "carryingOver": false
  },
  {
    "id": 8,
    "title": "Application Decommissioning Programme",
    "program": "Server",
    "priority": "Tier 1",
    "status": "Withdrawn",
    "category": "Improvement - Sustainment/Asset Replacement",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Dan Belson",
    "startDate": "2026-01-01",
    "endDate": "2026-12-31",
    "description": "Continue 2025 archival/decommissioning work to retire duplicative or redundant applications. Capex+OpEx blend.",
    "totalCpex": 100000,
    "cost2026it": 100000,
    "opexImpact": "No change",
    "roi": "Neutral",
    "comments": "Withdrawn for now; may be folded into Zenith scope.",
    "carryingOver": false
  },
  {
    "id": 9,
    "title": "Windows 11 Endpoint Migration",
    "program": "End User",
    "priority": "Tier 2",
    "status": "In-Flight",
    "category": "Improvement - Sustainment/Asset Replacement",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Aldo Peirano",
    "startDate": "2025-10-01",
    "endDate": "2026-12-31",
    "description": "Migrate all managed devices from Windows 10 Pro to Windows 11 Enterprise ahead of W10 end of support (Oct 2025).",
    "totalCpex": 400000,
    "cost2026it": 400000,
    "opexImpact": "No change",
    "roi": "Neutral",
    "comments": "Aligned with Intune co-management transition.",
    "carryingOver": true
  },
  {
    "id": 10,
    "title": "Intune Co-Management Rollout",
    "program": "End User",
    "priority": "Tier 2",
    "status": "In-Flight",
    "category": "Improvement - Sustainment/Asset Replacement",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Aldo Peirano",
    "startDate": "2025-09-01",
    "endDate": "2026-09-30",
    "description": "Migrate SCCM-managed estate to Intune co-management for modern endpoint policy.",
    "totalCpex": 250000,
    "cost2026it": 250000,
    "opexImpact": "Decrease",
    "roi": "Positive",
    "comments": "",
    "carryingOver": true
  },
  {
    "id": 11,
    "title": "GitHub Enterprise Migration",
    "program": "Applications",
    "priority": "Tier 2",
    "status": "Proposed",
    "category": "Improvement - Sustainment/Asset Replacement",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Dan Belson",
    "startDate": "2026-01-01",
    "endDate": "2026-06-30",
    "description": "Retire residual TFS and self-hosted git servers in favour of GitHub Enterprise Cloud.",
    "totalCpex": 80000,
    "cost2026it": 80000,
    "opexImpact": "No change",
    "roi": "Neutral",
    "comments": "",
    "carryingOver": false
  },
  {
    "id": 12,
    "title": "Sentinel One EDR Completion",
    "program": "Security",
    "priority": "Tier 1",
    "status": "In-Flight",
    "category": "Improvement - Sustainment/Asset Replacement",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Matthew Macedo",
    "startDate": "2025-06-01",
    "endDate": "2026-03-31",
    "description": "Complete decommissioning of Cisco Secure Endpoint and McAfee ENS in favour of Sentinel One.",
    "totalCpex": 120000,
    "cost2026it": 120000,
    "opexImpact": "Decrease",
    "roi": "Neutral",
    "comments": "",
    "carryingOver": true
  }
],

  projectCapabilities: [
  {
    "id": 1,
    "projectId": 1,
    "capabilityId": 40,
    "impactType": "Enables"
  },
  {
    "id": 2,
    "projectId": 1,
    "capabilityId": 39,
    "impactType": "Enables"
  },
  {
    "id": 3,
    "projectId": 1,
    "capabilityId": 47,
    "impactType": "Enhances"
  },
  {
    "id": 4,
    "projectId": 1,
    "capabilityId": 41,
    "impactType": "Enables"
  },
  {
    "id": 5,
    "projectId": 1,
    "capabilityId": 43,
    "impactType": "Enhances"
  },
  {
    "id": 6,
    "projectId": 2,
    "capabilityId": 16,
    "impactType": "Enables"
  },
  {
    "id": 7,
    "projectId": 2,
    "capabilityId": 17,
    "impactType": "Enhances"
  },
  {
    "id": 8,
    "projectId": 2,
    "capabilityId": 48,
    "impactType": "Depends On"
  },
  {
    "id": 9,
    "projectId": 3,
    "capabilityId": 51,
    "impactType": "Enables"
  },
  {
    "id": 10,
    "projectId": 3,
    "capabilityId": 56,
    "impactType": "Enhances"
  },
  {
    "id": 11,
    "projectId": 3,
    "capabilityId": 54,
    "impactType": "Enhances"
  },
  {
    "id": 12,
    "projectId": 4,
    "capabilityId": 26,
    "impactType": "Enhances"
  },
  {
    "id": 13,
    "projectId": 4,
    "capabilityId": 25,
    "impactType": "Enhances"
  },
  {
    "id": 14,
    "projectId": 5,
    "capabilityId": 53,
    "impactType": "Retires"
  },
  {
    "id": 15,
    "projectId": 5,
    "capabilityId": 51,
    "impactType": "Enables"
  },
  {
    "id": 16,
    "projectId": 5,
    "capabilityId": 54,
    "impactType": "Enhances"
  },
  {
    "id": 17,
    "projectId": 6,
    "capabilityId": 1,
    "impactType": "Enhances"
  },
  {
    "id": 18,
    "projectId": 6,
    "capabilityId": 12,
    "impactType": "Enhances"
  },
  {
    "id": 19,
    "projectId": 6,
    "capabilityId": 53,
    "impactType": "Enhances"
  },
  {
    "id": 20,
    "projectId": 7,
    "capabilityId": 47,
    "impactType": "Enables"
  },
  {
    "id": 21,
    "projectId": 7,
    "capabilityId": 49,
    "impactType": "Enhances"
  },
  {
    "id": 22,
    "projectId": 7,
    "capabilityId": 17,
    "impactType": "Depends On"
  },
  {
    "id": 23,
    "projectId": 8,
    "capabilityId": 51,
    "impactType": "Enables"
  },
  {
    "id": 24,
    "projectId": 8,
    "capabilityId": 53,
    "impactType": "Retires"
  },
  {
    "id": 25,
    "projectId": 9,
    "capabilityId": 56,
    "impactType": "Enables"
  },
  {
    "id": 26,
    "projectId": 9,
    "capabilityId": 54,
    "impactType": "Enhances"
  },
  {
    "id": 27,
    "projectId": 10,
    "capabilityId": 56,
    "impactType": "Enables"
  },
  {
    "id": 28,
    "projectId": 10,
    "capabilityId": 54,
    "impactType": "Enhances"
  },
  {
    "id": 29,
    "projectId": 11,
    "capabilityId": 52,
    "impactType": "Enables"
  },
  {
    "id": 30,
    "projectId": 11,
    "capabilityId": 51,
    "impactType": "Enhances"
  },
  {
    "id": 31,
    "projectId": 12,
    "capabilityId": 54,
    "impactType": "Enables"
  },
  {
    "id": 32,
    "projectId": 12,
    "capabilityId": 56,
    "impactType": "Enhances"
  }
],

  projectApplications: [
  {
    "id": 1,
    "projectId": 1,
    "applicationId": 13,
    "relationshipType": "Upgrades"
  },
  {
    "id": 2,
    "projectId": 4,
    "applicationId": 1,
    "relationshipType": "Implements"
  },
  {
    "id": 3,
    "projectId": 8,
    "applicationId": 18,
    "relationshipType": "Decommissions"
  },
  {
    "id": 4,
    "projectId": 8,
    "applicationId": 19,
    "relationshipType": "Decommissions"
  },
  {
    "id": 5,
    "projectId": 8,
    "applicationId": 5,
    "relationshipType": "Implements"
  }
],

  techDebt: [
  {
    "id": 1,
    "title": "Cisco Jabber decommissioning",
    "kind": "debt",
    "sourceType": "technology",
    "source": "Jabber",
    "capability": "End User Services",
    "itRisk": 3,
    "businessRisk": 2,
    "description": "Jabber being phased out as Teams adoption completes. Residual users on legacy Jabber clients.",
    "dateLogged": "2025-04-12",
    "status": "Active"
  },
  {
    "id": 2,
    "title": "McAfee ENS legacy installs",
    "kind": "debt",
    "sourceType": "technology",
    "source": "McAfee ENS",
    "capability": "Cybersecurity",
    "itRisk": 4,
    "businessRisk": 3,
    "description": "Legacy McAfee endpoint protection still installed on a small footprint of unmanaged devices.",
    "dateLogged": "2025-05-22",
    "status": "In Remediation"
  },
  {
    "id": 3,
    "title": "IP Switch file transfer retirement",
    "kind": "debt",
    "sourceType": "technology",
    "source": "IP Switch",
    "capability": "Application Delivery",
    "itRisk": 3,
    "businessRisk": 3,
    "description": "Several batch jobs still depend on IP Switch. Cutover to MoveIT pending.",
    "dateLogged": "2025-06-08",
    "status": "Active"
  },
  {
    "id": 4,
    "title": "Compellent SAN decommissioning",
    "kind": "debt",
    "sourceType": "technology",
    "source": "Compellent",
    "capability": "Infrastructure & Cloud",
    "itRisk": 4,
    "businessRisk": 3,
    "description": "Compellent at end of vendor support. Workload migration to PowerStore in progress.",
    "dateLogged": "2025-03-15",
    "status": "In Remediation"
  },
  {
    "id": 5,
    "title": "Dell VXRail HCI retirement",
    "kind": "debt",
    "sourceType": "technology",
    "source": "Dell VXRail",
    "capability": "Infrastructure & Cloud",
    "itRisk": 4,
    "businessRisk": 4,
    "description": "VXRail HCI being phased out. Workloads need to be migrated to Azure or refreshed hardware.",
    "dateLogged": "2025-02-04",
    "status": "Active"
  },
  {
    "id": 6,
    "title": "Oracle EBS decommissioning",
    "kind": "debt",
    "sourceType": "application",
    "source": "PeopleSoft Financials",
    "capability": "Accounting & Reporting",
    "itRisk": 5,
    "businessRisk": 4,
    "description": "Empire-region PeopleSoft Financials on Oracle. Decommissioning planned via 2024 archival project.",
    "dateLogged": "2024-11-01",
    "status": "On Hold"
  },
  {
    "id": 7,
    "title": "Hadoop archival migration",
    "kind": "debt",
    "sourceType": "application",
    "source": "Hadoop",
    "capability": "Data & Analytics",
    "itRisk": 3,
    "businessRisk": 3,
    "description": "Massachusetts-region Hadoop archive needs to be migrated to Datasphere or Azure Data Lake.",
    "dateLogged": "2024-12-12",
    "status": "Active"
  },
  {
    "id": 8,
    "title": "TFS source control retirement",
    "kind": "debt",
    "sourceType": "technology",
    "source": "TFS",
    "capability": "Application Delivery",
    "itRisk": 2,
    "businessRisk": 2,
    "description": "Residual TFS repositories to be migrated to GitHub Enterprise Cloud by Q2 2026.",
    "dateLogged": "2025-08-19",
    "status": "Active"
  },
  {
    "id": 9,
    "title": "IPAM via spreadsheets",
    "kind": "debt",
    "sourceType": "technology",
    "source": "Spreadsheets (IPAM)",
    "capability": "Infrastructure & Cloud",
    "itRisk": 3,
    "businessRisk": 2,
    "description": "IP address management still in spreadsheets. Replacement IPAM tool to be selected.",
    "dateLogged": "2025-01-30",
    "status": "Active"
  },
  {
    "id": 10,
    "title": "Self-hosted git server retirement",
    "kind": "debt",
    "sourceType": "technology",
    "source": "git server",
    "capability": "Application Delivery",
    "itRisk": 2,
    "businessRisk": 1,
    "description": "Self-hosted git server to be migrated to GitHub Enterprise Cloud.",
    "dateLogged": "2025-08-19",
    "status": "Active"
  },
  {
    "id": 11,
    "title": "EqualLogic legacy storage",
    "kind": "debt",
    "sourceType": "technology",
    "source": "EqualLogic",
    "capability": "Infrastructure & Cloud",
    "itRisk": 4,
    "businessRisk": 3,
    "description": "Legacy Dell EqualLogic iSCSI mostly decommissioned. Final volumes to migrate.",
    "dateLogged": "2024-09-04",
    "status": "In Remediation"
  },
  {
    "id": 12,
    "title": "IBM colocation exit",
    "kind": "debt",
    "sourceType": "technology",
    "source": "IBM Washington & Dallas",
    "capability": "Infrastructure & Cloud",
    "itRisk": 4,
    "businessRisk": 4,
    "description": "IBM-hosted datacentres being exited as part of ZENITH consolidation.",
    "dateLogged": "2025-01-15",
    "status": "Active"
  },
  {
    "id": 13,
    "title": "Joplin MO datacentre exit",
    "kind": "debt",
    "sourceType": "technology",
    "source": "Joplin, MO",
    "capability": "Infrastructure & Cloud",
    "itRisk": 3,
    "businessRisk": 3,
    "description": "Legacy Joplin facility being decommissioned.",
    "dateLogged": "2025-01-15",
    "status": "Active"
  },
  {
    "id": 14,
    "title": "Cisco Secure Endpoint replacement",
    "kind": "debt",
    "sourceType": "technology",
    "source": "Cisco Secure Endpoint",
    "capability": "Cybersecurity",
    "itRisk": 3,
    "businessRisk": 2,
    "description": "Being replaced by Sentinel One. Final endpoints in migration.",
    "dateLogged": "2025-07-02",
    "status": "In Remediation"
  },
  {
    "id": 15,
    "title": "Integrate ServiceNow with SailPoint provisioning",
    "kind": "enhancement",
    "sourceType": "application",
    "source": "ServiceNow",
    "capability": "Cybersecurity",
    "itRisk": 2,
    "businessRisk": 3,
    "description": "Phase 2 ServiceNow scope: HRSD module integration with SailPoint IIQ for joiner/mover/leaver workflows.",
    "dateLogged": "2025-09-22",
    "status": "Planned"
  },
  {
    "id": 16,
    "title": "Copilot Studio agent platform",
    "kind": "enhancement",
    "sourceType": "technology",
    "source": "Microsoft Copilot",
    "capability": "IT Strategy & Architecture",
    "itRisk": 2,
    "businessRisk": 4,
    "description": "Evaluate Copilot Studio for governed agent-based automation across knowledge work.",
    "dateLogged": "2026-02-18",
    "status": "Active"
  },
  {
    "id": 17,
    "title": "Power Automate Centre of Excellence",
    "kind": "enhancement",
    "sourceType": "technology",
    "source": "Power Automate",
    "capability": "IT Strategy & Architecture",
    "itRisk": 1,
    "businessRisk": 3,
    "description": "Stand up CoE for governed citizen-developer RPA expansion.",
    "dateLogged": "2025-11-04",
    "status": "Planned"
  }
],

  enterpriseStrategies: [
  {
    "id": 1,
    "title": "Reduce Costs",
    "description": "Drive operational efficiency and cost discipline across the enterprise to improve financial performance and fund strategic investment.",
    "owner": "CFO",
    "status": "Active",
    "sortOrder": 1,
    "colour": "#7C4DFF"
  },
  {
    "id": 2,
    "title": "Improve Customer & Stakeholder Experience",
    "description": "Deliver seamless, reliable experiences for customers, regulators, and partners across all touchpoints.",
    "owner": "CCO",
    "status": "Active",
    "sortOrder": 2,
    "colour": "#05CFFF"
  },
  {
    "id": 3,
    "title": "Improve Regulatory Outcomes",
    "description": "Strengthen Liberty's regulatory positioning through proactive engagement, evidence-based filings, and compliance excellence.",
    "owner": "CRO",
    "status": "Active",
    "sortOrder": 3,
    "colour": "#71E023"
  }
  ],

  strategicInitiatives: [
  {
    "id": 1,
    "title": "Improve Customer Movements That Matter",
    "description": "Focus on the key customer interactions — connections, outages, billing queries — that have the greatest impact on satisfaction and loyalty.",
    "parentStrategyId": 2,
    "owner": "",
    "status": "Active",
    "targetOutcome": "Measurable improvement in customer satisfaction scores for high-impact touchpoints.",
    "targetDate": "",
    "sortOrder": 1
  }
  ]

};
