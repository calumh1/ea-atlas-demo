window.atlasData = window.atlasData || {};

window.atlasData.projects = [
  {
    "id": 1,
    "title": "S/4 HANA Upgrade",
    "program": "Applications",
    "priority": "Tier 1",
    "status": "In-Flight",
    "category": "Improvement - SAP Enterprise Systems",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Dan Belson",
    "startDate": "2026-08-01",
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
    "title": "ZENITH - Datacenter Consolidation",
    "program": "Zenith",
    "priority": "Tier 1",
    "status": "Proposed",
    "category": "Improvement - Corporate Initiative",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Dan Belson",
    "startDate": "2026-06-01",
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
    "title": "ZENITH - GIS Cost Savings",
    "program": "Zenith",
    "priority": "Tier 1",
    "status": "Proposed",
    "category": "Improvement - Corporate Initiative",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Dan Belson",
    "startDate": "2026-05-01",
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
    "title": "Zenith - Application Rationalization",
    "program": "Zenith",
    "priority": "Tier 1",
    "status": "Proposed",
    "category": "Improvement - Corporate Initiative",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Dan Belson",
    "startDate": "2026-04-14",
    "endDate": "2026-12-31",
    "description": "Identify and retire duplicative or redundant applications as part of the Zenith programme scope.",
    "totalCpex": 100000,
    "cost2026it": 100000,
    "opexImpact": "No change",
    "roi": "Neutral",
    "comments": "",
    "carryingOver": false
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
    "startDate": "2026-07-01",
    "endDate": "2026-12-31",
    "description": "Retire residual TFS and self-hosted git servers in favour of GitHub Enterprise Cloud.",
    "totalCpex": 80000,
    "cost2026it": 80000,
    "opexImpact": "No change",
    "roi": "Neutral",
    "comments": "",
    "carryingOver": false
  },
  {
    "id": 13,
    "title": "Strategic Vendor Onboarding",
    "program": "Applications",
    "priority": "Tier 2",
    "status": "Proposed",
    "category": "Improvement - Corporate Initiative",
    "executiveSponsor": "Colin Penny",
    "projectOwner": "Dan Belson",
    "startDate": "2026-05-15",
    "endDate": "2026-10-15",
    "description": "Structured onboarding of strategic vendors to align with Liberty's technology standards and governance requirements.",
    "totalCpex": 0,
    "cost2026it": 0,
    "opexImpact": "No change",
    "roi": "Neutral",
    "comments": "",
    "carryingOver": false
  }
];

window.atlasData.projectCapabilities = [
  {
    "id": 1,
    "projectId": 1,
    "capabilityId": 43,
    "impactType": "Enables"
  },
  {
    "id": 2,
    "projectId": 1,
    "capabilityId": 42,
    "impactType": "Enables"
  },
  {
    "id": 3,
    "projectId": 1,
    "capabilityId": 51,
    "impactType": "Enhances"
  },
  {
    "id": 4,
    "projectId": 1,
    "capabilityId": 44,
    "impactType": "Enables"
  },
  {
    "id": 5,
    "projectId": 1,
    "capabilityId": 46,
    "impactType": "Enhances"
  },
  {
    "id": 6,
    "projectId": 2,
    "capabilityId": 18,
    "impactType": "Enables"
  },
  {
    "id": 7,
    "projectId": 2,
    "capabilityId": 19,
    "impactType": "Enhances"
  },
  {
    "id": 8,
    "projectId": 2,
    "capabilityId": 50,
    "impactType": "Depends On"
  },
  {
    "id": 12,
    "projectId": 4,
    "capabilityId": 28,
    "impactType": "Enhances"
  },
  {
    "id": 13,
    "projectId": 4,
    "capabilityId": 27,
    "impactType": "Enhances"
  },
  {
    "id": 14,
    "projectId": 5,
    "capabilityId": 55,
    "impactType": "Retires"
  },
  {
    "id": 15,
    "projectId": 5,
    "capabilityId": 53,
    "impactType": "Enables"
  },
  {
    "id": 16,
    "projectId": 5,
    "capabilityId": 56,
    "impactType": "Enhances"
  },
  {
    "id": 17,
    "projectId": 6,
    "capabilityId": 7,
    "impactType": "Enhances"
  },
  {
    "id": 18,
    "projectId": 6,
    "capabilityId": 14,
    "impactType": "Enhances"
  },
  {
    "id": 19,
    "projectId": 6,
    "capabilityId": 55,
    "impactType": "Enhances"
  },
  {
    "id": 20,
    "projectId": 7,
    "capabilityId": 51,
    "impactType": "Enables"
  },
  {
    "id": 21,
    "projectId": 7,
    "capabilityId": 51,
    "impactType": "Enhances"
  },
  {
    "id": 22,
    "projectId": 7,
    "capabilityId": 19,
    "impactType": "Depends On"
  },
  {
    "id": 23,
    "projectId": 8,
    "capabilityId": 53,
    "impactType": "Enables"
  },
  {
    "id": 24,
    "projectId": 8,
    "capabilityId": 55,
    "impactType": "Retires"
  },
  {
    "id": 29,
    "projectId": 11,
    "capabilityId": 54,
    "impactType": "Enables"
  },
  {
    "id": 30,
    "projectId": 11,
    "capabilityId": 53,
    "impactType": "Enhances"
  }
];

window.atlasData.projectApplications = [
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
];
