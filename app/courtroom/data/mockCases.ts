import { CaseItem } from '../components/CaseCard';

export const mockCases: CaseItem[] = [
  {
    id: "case-001",
    title: "State v. Sharma (Fraud Allegations)",
    citation: "2023 SCC OnLine SC 1234",
    court: "Supreme Court",
    judgmentDate: "2023-05-15",
    year: 2023,
    legalArea: "Criminal",
    tags: ["fraud", "criminal procedure", "evidence", "white collar"],
    isOwnCase: true,
    stage: "Final Judgment",
    outcome: "Won",
    complexityRating: 4
  },
  {
    id: "case-002",
    title: "Mehta v. Union of India (Environmental Regulations)",
    citation: "2022 SCC OnLine SC 789",
    court: "Supreme Court",
    judgmentDate: "2022-11-23",
    year: 2022,
    legalArea: "Constitutional",
    tags: ["environment", "regulatory", "public interest", "industrial"],
    isOwnCase: false,
    outcome: "Pending"
  },
  {
    id: "case-003",
    title: "ABC Corp v. XYZ Ltd (Intellectual Property Dispute)",
    citation: "2023 Del HC 456",
    court: "Delhi High Court",
    judgmentDate: "2023-02-10",
    year: 2023,
    legalArea: "Commercial",
    tags: ["intellectual property", "patents", "trademark", "technology"],
    isOwnCase: true,
    outcome: "Won",
    complexityRating: 5
  },
  {
    id: "case-004",
    title: "Singh Family Inheritance Dispute",
    citation: "CS/456/2022",
    court: "Civil Court",
    judgmentDate: "2022-08-05",
    year: 2022,
    legalArea: "Civil",
    tags: ["inheritance", "property", "family", "succession"],
    isOwnCase: true,
    stage: "Appeal Filed",
    complexityRating: 3
  },
  {
    id: "case-005",
    title: "Patel v. Patel (Divorce Proceedings)",
    citation: "FA/123/2023",
    court: "Family Court",
    judgmentDate: "2023-03-20",
    year: 2023,
    legalArea: "Family",
    tags: ["divorce", "alimony", "child custody", "matrimonial"],
    isOwnCase: true,
    outcome: "Settled",
    complexityRating: 2
  },
  {
    id: "case-006",
    title: "Workers Union v. Industrial Corp (Labor Dispute)",
    citation: "2022 LC 789",
    court: "Labor Court",
    judgmentDate: "2022-06-12",
    year: 2022,
    legalArea: "Labor",
    tags: ["employment", "union", "benefits", "termination"],
    isOwnCase: false,
    outcome: "Lost"
  },
  {
    id: "case-007",
    title: "Tenant Association v. City Development Authority",
    citation: "WP/567/2021",
    court: "High Court",
    judgmentDate: "2021-12-15",
    year: 2021,
    legalArea: "Administrative",
    tags: ["housing", "urban development", "public policy", "eviction"],
    isOwnCase: true,
    outcome: "Won",
    complexityRating: 4
  },
  {
    id: "case-008",
    title: "R v. Kumar (Criminal Appeal)",
    citation: "Crl.A. 234/2022",
    court: "High Court",
    judgmentDate: "2022-09-30",
    year: 2022,
    legalArea: "Criminal",
    tags: ["appeal", "sentencing", "evidence", "procedure"],
    isOwnCase: false,
    outcome: "Won"
  },
  {
    id: "case-009",
    title: "International Trading Co. v. Customs Department",
    citation: "Appeal No. 456/2023",
    court: "Customs Tribunal",
    judgmentDate: "2023-01-25",
    year: 2023,
    legalArea: "Tax",
    tags: ["import", "duties", "international trade", "valuation"],
    isOwnCase: true,
    stage: "Hearing",
    complexityRating: 4
  },
  {
    id: "case-010",
    title: "Pharmaceutical Corp Patent Challenge",
    citation: "OA/123/2022",
    court: "Intellectual Property Appellate Board",
    judgmentDate: "2022-07-18",
    year: 2022,
    legalArea: "Commercial",
    tags: ["patent", "pharmaceutical", "innovation", "generic drugs"],
    isOwnCase: false,
    outcome: "Lost"
  },
  {
    id: "case-011",
    title: "Minority Shareholders v. Board of Directors",
    citation: "CP/345/2023",
    court: "National Company Law Tribunal",
    judgmentDate: "2023-04-05",
    year: 2023,
    legalArea: "Corporate",
    tags: ["corporate governance", "minority rights", "oppression", "mismanagement"],
    isOwnCase: true,
    outcome: "Pending",
    complexityRating: 5
  },
  {
    id: "case-012",
    title: "Consumer Protection Group v. E-commerce Giant",
    citation: "CC/789/2022",
    court: "Consumer Forum",
    judgmentDate: "2022-10-10",
    year: 2022,
    legalArea: "Consumer",
    tags: ["consumer rights", "e-commerce", "unfair practices", "class action"],
    isOwnCase: false,
    outcome: "Settled"
  },
  {
    id: "case-013",
    title: "Rural Communities v. Mining Corporation",
    citation: "PIL/234/2021",
    court: "Green Tribunal",
    judgmentDate: "2021-11-08",
    year: 2021,
    legalArea: "Environmental",
    tags: ["pollution", "mining", "public health", "tribal rights"],
    isOwnCase: true,
    outcome: "Won",
    complexityRating: 5
  },
  {
    id: "case-014",
    title: "Software Developer v. Tech Giant (Copyright Dispute)",
    citation: "CS/567/2023",
    court: "Commercial Court",
    judgmentDate: "2023-06-22",
    year: 2023,
    legalArea: "Intellectual Property",
    tags: ["copyright", "software", "technology", "infringement"],
    isOwnCase: true,
    stage: "Evidence",
    complexityRating: 4
  },
  {
    id: "case-015",
    title: "Bankruptcy Proceedings of Hotel Chain",
    citation: "IB/890/2022",
    court: "National Company Law Tribunal",
    judgmentDate: "2022-05-30",
    year: 2022,
    legalArea: "Insolvency",
    tags: ["bankruptcy", "creditors", "restructuring", "hospitality"],
    isOwnCase: false,
    outcome: "Ongoing"
  }
]; 