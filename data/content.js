// ============================================================
//  PORTFOLIO CONTENT — edit here or use /admin to manage
// ============================================================

// ---- ABOUT ----
const about = {
  paragraphs: [
    "Electrical and Electronic Engineer with over 3 years of experience in electrical engineering projects at ICC, Voltas Engineering, and the Central Engineering Consultancy Bureau (CECB). Strong exposure to low-voltage power distribution, switchboards, lighting systems, electrical estimation, and site coordination.",
    "Proficient in AutoCAD and SolidWorks, and currently pursuing an MSc in Industrial Automation at the University of Moratuwa. Alongside engineering work, I build and ship web applications using AI tools — combining technical expertise with modern software development."
  ]
};

// ---- SKILLS ----
const skills = [
  { group: "Design & Drafting", tags: ["AutoCAD","SolidWorks","DIALux EVO","Single Line Diagrams"] },
  { group: "Electrical Engineering", tags: ["Load Calculations","Cable Sizing","BOQ Preparation","IEC Standards","Hospital Electrical Design"] },
  { group: "Automation", tags: ["PLC Systems","Control Panel Design","System Integration","Industry 4.0"] },
  { group: "Software & AI Tools", tags: ["Claude Code","Google Antigravity","VS Code","React","HTML / CSS / JS","Git & GitHub"] }
];

// ---- EXPERIENCE ----
const experience = [
  {
    title: "Electrical Engineer – CECB",
    period: "Jul 2024 – Present",
    location: "Galle",
    bullets: [
      "Designed and consulted on electrical systems using AutoCAD",
      "Prepared BOQs and electrical estimations ensuring accurate budgeting",
      "Prepared technical and evaluation reports to support project decisions"
    ]
  },
  {
    title: "Electrical Engineer – Voltas Engineering",
    period: "Mar 2024 – Jun 2024",
    location: "Colombo",
    bullets: [
      "Executed electrical system projects focusing on efficiency and accuracy",
      "Conducted testing and commissioning to ensure system reliability",
      "Performed maintenance activities to improve system longevity"
    ]
  },
  {
    title: "MEP Engineer – ICC",
    period: "Mar 2022 – Mar 2024",
    location: "Dehiwala",
    bullets: [
      "Maintained MEP documentation for large-scale hospital projects",
      "Coordinated QA/QC works and liaised with consultants",
      "Ensured compliance with project standards and timelines"
    ]
  }
];

// ---- EDUCATION ----
const education = [
  { degree: "MSc in Industrial Automation", institution: "University of Moratuwa, Sri Lanka", year: "2026 – Present", badge: "In Progress", icon: "graduation-cap" },
  { degree: "BEng (Hons) Electrical & Electronic Engineering", institution: "Sri Lanka", year: "Completed", badge: "", icon: "bolt" }
];

// ---- SERVICES ----
const services = [
  {
    icon: "plug",
    title: "Electrical Design Services",
    items: [
      "Electrical demand / load calculations",
      "Cable sizing & voltage drop analysis",
      "MCB / MCCB selection",
      "Lighting design using DIALux EVO",
      "Power & lighting layouts (AutoCAD)",
      "Single Line Diagrams (SLDs)",
      "Bill of Quantities (BOQ) preparation",
      "Technical Evaluation Reports"
    ]
  },
  {
    icon: "cogs",
    title: "Industrial Automation",
    items: [
      "PLC systems design",
      "Control panel design",
      "System integration"
    ]
  }
];

// ---- CONTACT ----
const contact = {
  email: "gweerasinghe67@gmail.com",
  phone: "+94 724 618 922",
  whatsapp: "94724618922",
  location: "Sri Lanka",
  linkedin: "https://www.linkedin.com/in/gayan-weerasingha-075946188/"
};

// ---- PROJECTS ----
const projects = [
  {
    id: 1,
    title: "Electrical System Design – Cath Lab",
    subtitle: "Karapitiya National Hospital, Galle",
    year: "2025",
    description: "Complete electrical system design for a new Cardiac Catheterization Laboratory including power distribution, lighting design, emergency power supply, earthing, and medical equipment vendor coordination.",
    tags: ["Electrical Engineering","AutoCAD","Hospital Design","IEC Standards"],
    type: "engineering",
    link: "projects/project-1.html",
    external: false
  },
  {
    id: 2,
    title: "20 Claude Code Projects for Beginners",
    subtitle: "Web Apps · Live on Vercel",
    year: "2026",
    description: "20 working web apps built entirely with AI prompts using Claude Code — covering productivity, business & finance, lifestyle, and utility tools. Each app is live and usable.",
    tags: ["Claude Code","React","AI-Built","Vercel"],
    type: "webapp",
    link: "https://20-projects-for-beginners.netlify.app/",
    external: true
  },
  {
    id: 1776754149292,
    title: "The Flight agent Saas Project",
    subtitle: "",
    year: "2026",
    description: "AI-powered flight price monitor that deploys autonomous agents to hunt mispriced tickets and deals 24/7.",
    tags: ["Claude Code","VS Code","React","AI-Built","Vercel"],
    type: "webapp",
    link: "https://theflightagent.app",
    external: true
  }
];

// ---- DOWNLOADS ----
const downloads = [
  {
    id: 1,
    title: "20 Claude Code Projects for Beginners",
    description: "20 fully working web apps built entirely with AI prompts using Claude Code — covering productivity, finance, lifestyle, and utility tools.",
    icon: "rocket",
    meta: ["20 Apps", "React · Vercel"],
    link: "https://20-projects-for-beginners.netlify.app/",
    btnText: "View All Apps",
    external: true
  }
];

// ---- ARTICLES ----
const articles = [
  {
    id: 1,
    title: "Is University Education Enough to Survive in the Industry?",
    date: "Jan 2026",
    readTime: "5",
    excerpt: "University gives us the foundation — theories, equations, standards, and principles. But once we step into the industry, we quickly realise something important: university education alone is not enough.",
    link: "articles/article-1.html"
  }
];
