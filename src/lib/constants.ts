export const SITE = {
  name: "ABD Search",
  tagline: "Specialists in Rare Disease Talent",
  linkedInCompany: "https://www.linkedin.com/company/abd-search/",
  linkedInFounder: "https://www.linkedin.com/in/lewis-nutley-97559b107/",
  founder: "Lewis Nutley",
} as const;

export const NAV_LINKS = [
  { href: "#why", label: "Why ABD" },
  { href: "#lifecycle", label: "Lifecycle" },
  { href: "#services", label: "Services" },
  { href: "#founder", label: "Founder" },
  { href: "#approach", label: "Approach" },
] as const;

export const LIFECYCLE_STAGES = [
  {
    id: "discovery",
    label: "Discovery",
    support:
      "Scientists and programme leads who can translate early science into a credible rare disease path.",
  },
  {
    id: "preclinical",
    label: "Preclinical",
    support:
      "Specialists who bridge translational science, IND-enabling work, and lean programme execution.",
  },
  {
    id: "clinical",
    label: "Clinical Development",
    support:
      "Clinical operators who understand patient scarcity, site complexity, and protocol precision.",
  },
  {
    id: "regulatory",
    label: "Regulatory",
    support:
      "Regulatory talent fluent in orphan pathways, agency dialogue, and submission discipline.",
  },
  {
    id: "cmc",
    label: "CMC",
    support:
      "CMC leaders who can scale manufacture without compromising quality or timelines.",
  },
  {
    id: "launch",
    label: "Launch",
    support:
      "Launch talent who can orchestrate cross-functional readiness in high-stakes windows.",
  },
  {
    id: "access",
    label: "Market Access",
    support:
      "Access specialists who navigate pricing, evidence, and payer realities for rare therapies.",
  },
  {
    id: "commercial",
    label: "Commercial",
    support:
      "Commercial leaders who build focused go-to-market models around ultra-specialist audiences.",
  },
] as const;

export const SERVICES = [
  {
    id: "contract",
    number: "01",
    title: "Contract & Fixed-Term Talent",
    proposition: "Specialist capacity, when programmes cannot wait.",
    description:
      "Contract and fixed-term professionals placed with precision and speed — so critical work continues without compromising calibre.",
  },
  {
    id: "permanent",
    number: "02",
    title: "Permanent Recruitment",
    proposition: "Hires built for lasting organisational impact.",
    description:
      "Rigorous screening and assessment to ensure every permanent placement fits the science, the stage, and the team that must deliver.",
  },
  {
    id: "mapping",
    number: "03",
    title: "Talent Mapping",
    proposition: "Market clarity before feasibility decisions.",
    description:
      "Proactive mapping of rare disease talent pools so availability and competitive dynamics are understood before programmes commit.",
  },
  {
    id: "inhouse",
    number: "04",
    title: "In-House Recruitment Build & Optimisation",
    proposition: "Internal capability that scales with the organisation.",
    description:
      "Designing and embedding recruitment functions that keep pace with growth — without diluting specialist hiring standards.",
  },
] as const;
