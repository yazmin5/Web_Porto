// ============================================================
// EDIT THIS FILE to make the portfolio yours.
// Every word, metric, project and link on the site lives here.
// ============================================================

export const IMAGES = {
  waves: "https://images.unsplash.com/photo-1707054437518-dfd402977b03?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1pbmltYWwlMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0JTIwYWJzdHJhY3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzg3MTA5NTE2fDA&ixlib=rb-4.1.0&q=85",
  bars: "https://images.unsplash.com/photo-1752213355138-7d08b01d2d0e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMG1pbmltYWwlMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0JTIwYWJzdHJhY3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzg3MTA5NTE2fDA&ixlib=rb-4.1.0&q=85",
  portrait: "https://images.unsplash.com/photo-1693464081656-c5b1368960d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbiUyMGxvb2tpbmclMjBhd2F5JTIwbmF0dXJhbCUyMGxpZ2h0JTIwbWluaW1hbHxlbnwwfHx8fDE3ODcxMDk1MTZ8MA&ixlib=rb-4.1.0&q=85",
  workspace: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMG9mZmljZSUyMGRlc2slMjBhcmNoaXRlY3QlMjBzZXR1cHxlbnwwfHx8fDE3ODcxMDk1MTZ8MA&ixlib=rb-4.1.0&q=85",
};

export const profile = {
  name: "Jordan Reyes",
  initials: "JR",
  role: "Data Analyst / BI Developer",
  location: "Toronto, ON — GMT-4",
  email: "hello@jordanreyes.dev",
  availability: "Open to senior analytics & BI opportunities",
  intro:
    "I help companies stop guessing. Six years of turning scattered spreadsheets and siloed databases into decision systems that executives actually open every morning.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Tableau Public", href: "https://public.tableau.com" },
  ],
};

export const heroStats = [
  { value: 6, suffix: "+", label: "Years in analytics" },
  { value: 48, suffix: "", label: "Dashboards shipped" },
  { value: 12, prefix: "$", suffix: "M", label: "Decisions influenced" },
];

export const sparkData = [
  { v: 42 }, { v: 48 }, { v: 45 }, { v: 56 }, { v: 61 }, { v: 58 },
  { v: 70 }, { v: 76 }, { v: 72 }, { v: 86 }, { v: 94 }, { v: 100 },
];

export const marqueeItems = [
  "Data to decisions",
  "Precision at scale",
  "Architecting intelligence",
  "Signal over noise",
];

export const manifesto = [
  {
    n: "01",
    title: "Signal over noise",
    text: "Most companies are drowning in data and starving for insight. I start with the decision, not the dataset — then work backwards to the smallest analysis that settles the question.",
  },
  {
    n: "02",
    title: "Precision as a habit",
    text: "A number on a slide can move millions. Every metric I ship comes with a definition, an owner, and a lineage you can trace back to the source system.",
  },
  {
    n: "03",
    title: "Built to be used",
    text: "The best dashboard is the one people check without being asked. I design for the Monday-morning meeting: fast, honest, and impossible to misread.",
  },
];

export const proficiency = [
  { skill: "SQL", level: 96 },
  { skill: "Power BI", level: 92 },
  { skill: "Python", level: 90 },
  { skill: "Tableau", level: 87 },
  { skill: "dbt", level: 82 },
  { skill: "Snowflake", level: 84 },
  { skill: "Excel", level: 95 },
];

export const domains = [
  { domain: "Modeling", level: 92, target: 70 },
  { domain: "Visualisation", level: 88, target: 70 },
  { domain: "Storytelling", level: 90, target: 70 },
  { domain: "Statistics", level: 82, target: 70 },
  { domain: "Engineering", level: 78, target: 70 },
  { domain: "Strategy", level: 85, target: 70 },
];

export const yearly = [
  { year: "'19", dashboards: 4 },
  { year: "'20", dashboards: 7 },
  { year: "'21", dashboards: 9 },
  { year: "'22", dashboards: 11 },
  { year: "'23", dashboards: 13 },
  { year: "'24", dashboards: 14 },
  { year: "'25", dashboards: 12 },
];

export const toolbox = [
  "SQL", "Python", "Power BI", "Tableau", "dbt", "Snowflake",
  "BigQuery", "Excel", "Looker", "Pandas", "Airflow", "Git",
];

export const projects = [
  {
    id: "retail-revenue",
    index: "01",
    title: "Retail Revenue Intelligence",
    category: "Power BI / Forecasting",
    year: "2025",
    image: IMAGES.bars,
    summary:
      "A revenue command centre for a 340-store retail chain — one semantic model replacing 14 conflicting weekly reports.",
    challenge:
      "Finance, merchandising and ops each ran their own revenue numbers. Meetings were spent arguing about whose spreadsheet was right instead of what to do.",
    approach:
      "Built a single dimensional model in Snowflake, layered a certified Power BI semantic model on top, and added a Prophet-based forecast refreshed nightly with anomaly flags.",
    outcome:
      "One version of the truth, adopted by 60+ weekly users within a month of launch.",
    metrics: [
      { value: "+18%", label: "Forecast accuracy" },
      { value: "14 → 1", label: "Reports consolidated" },
      { value: "60+", label: "Weekly active users" },
    ],
    chartType: "bar",
    xKey: "q",
    chartTitle: "Actual vs forecast revenue ($M)",
    chartData: [
      { q: "Q1", actual: 4.2, forecast: 4.0 },
      { q: "Q2", actual: 4.8, forecast: 4.6 },
      { q: "Q3", actual: 5.1, forecast: 5.2 },
      { q: "Q4", actual: 6.4, forecast: 6.1 },
    ],
  },
  {
    id: "churn-radar",
    index: "02",
    title: "Churn Early-Warning System",
    category: "Python / SQL",
    year: "2024",
    image: IMAGES.workspace,
    summary:
      "A scoring pipeline that flags at-risk subscription accounts 45 days before they leave — and tells the CS team exactly why.",
    challenge:
      "Churn was only visible in the rear-view mirror. By the time an account appeared in the churn report, the renewal conversation was already lost.",
    approach:
      "Engineered 40+ behavioural features from product telemetry, trained a gradient-boosted model, and pushed daily risk scores with top contributing factors into Salesforce.",
    outcome:
      "Customer success now works a ranked save-list every morning instead of reacting to cancellations.",
    metrics: [
      { value: "-22%", label: "Logo churn" },
      { value: "45 days", label: "Early warning" },
      { value: "0.87", label: "Model AUC" },
    ],
    chartType: "line",
    xKey: "m",
    chartTitle: "Monthly churn rate (%)",
    chartData: [
      { m: "Jan", churn: 6.4 }, { m: "Feb", churn: 6.1 }, { m: "Mar", churn: 5.8 },
      { m: "Apr", churn: 5.6 }, { m: "May", churn: 5.2 }, { m: "Jun", churn: 4.9 },
      { m: "Jul", churn: 4.8 }, { m: "Aug", churn: 4.6 }, { m: "Sep", churn: 4.5 },
    ],
  },
  {
    id: "marketing-mix",
    index: "03",
    title: "Marketing Mix Attribution",
    category: "Statistics / MMM",
    year: "2024",
    image: null,
    summary:
      "A media-mix model that separated correlation from causation across a $9M annual marketing budget.",
    challenge:
      "Last-click attribution credited search ads with nearly every conversion, while brand spend looked like a cost centre. Budget season was a shouting match.",
    approach:
      "Built a Bayesian media-mix model on two years of weekly spend and revenue, with adstock and saturation curves per channel, validated against three geo holdout tests.",
    outcome:
      "34% of budget reallocated toward channels with provable incremental lift.",
    metrics: [
      { value: "34%", label: "Budget reallocated" },
      { value: "+2.4x", label: "Blended ROAS" },
      { value: "$9M", label: "Spend modelled" },
    ],
    chartType: "area",
    xKey: "m",
    chartTitle: "Incremental revenue by channel ($K)",
    chartData: [
      { m: "W1", search: 120, social: 80, brand: 40 },
      { m: "W2", search: 132, social: 96, brand: 52 },
      { m: "W3", search: 128, social: 118, brand: 66 },
      { m: "W4", search: 140, social: 134, brand: 84 },
      { m: "W5", search: 138, social: 152, brand: 98 },
      { m: "W6", search: 150, social: 168, brand: 116 },
    ],
  },
  {
    id: "supply-chain",
    index: "04",
    title: "Supply Chain Control Tower",
    category: "Snowflake / dbt",
    year: "2023",
    image: null,
    summary:
      "An end-to-end visibility layer over 11 source systems — inventory, logistics and supplier risk in one morning briefing.",
    challenge:
      "Stock-outs and overstock coexisted across regions. Planners exported CSVs from 11 systems and stitched them together by hand every Friday.",
    approach:
      "Centralised all feeds in Snowflake with a tested dbt project (240+ models, 1,800+ tests), and shipped a Power BI control tower with drill-through from region to SKU.",
    outcome:
      "Planning cycles went from five days of spreadsheet surgery to a 20-minute stand-up.",
    metrics: [
      { value: "-31%", label: "Stock-outs" },
      { value: "240+", label: "dbt models" },
      { value: "5d → 20m", label: "Planning cycle" },
    ],
    chartType: "bar",
    xKey: "region",
    chartTitle: "Fill rate by region (%)",
    chartData: [
      { region: "NA", before: 84, after: 96 },
      { region: "EU", before: 81, after: 94 },
      { region: "APAC", before: 76, after: 92 },
      { region: "LATAM", before: 72, after: 89 },
    ],
  },
];

export const experience = [
  {
    period: "2022 — Now",
    role: "Senior BI Developer",
    company: "Northwind Analytics",
    text: "Own the analytics layer for a portfolio of retail and SaaS clients. Lead a guild of 6 analysts, set modelling standards, and ship the executive dashboards used in board meetings.",
    tags: ["Power BI", "Snowflake", "dbt", "Leadership"],
  },
  {
    period: "2020 — 2022",
    role: "Data Analyst",
    company: "Meridian Retail Group",
    text: "Rebuilt reporting for a 340-store chain. Automated 30+ manual reports, introduced a certified semantic model, and cut weekly reporting effort by 80%.",
    tags: ["SQL", "Tableau", "Python", "Forecasting"],
  },
  {
    period: "2018 — 2020",
    role: "Junior Analyst",
    company: "Brightline Consulting",
    text: "Cut my teeth on messy client data: cleaning, reconciling and visualising operational datasets for mid-market manufacturers.",
    tags: ["Excel", "SQL", "Power Query"],
  },
];
