// ============================================================
//  PORTFOLIO CONTENT — edit here or use /admin to manage
// ============================================================

// ---- ABOUT ----
const about = {
  paragraphs: [
    "Electrical and Electronic Engineer with over 4 years of experience in electrical engineering projects at ICC, Voltas Engineering, and the Central Engineering Consultancy Bureau (CECB). Strong exposure to low-voltage power distribution, switchboards, lighting systems, electrical estimation, and site coordination.",
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
  { degree: "BEng (Hons) Electrical & Electronic Engineering", institution: "South Eastern University of Sri Lanka", year: "Completed", badge: "", icon: "bolt" }
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
    id: 4,
    title: "Private Hospital Building — Dehiwala",
    subtitle: "Dehiwala, Sri Lanka",
    year: "2022 – 2024",
    description: "Site electrical engineering for a private hospital building project in Dehiwala — subcontractor coordination, BIM-integrated detailing, and full site delivery support.",
    tags: ["Site Engineering","BIM Coordination","Revit","MEP"],
    type: "engineering",
    link: "projects/project-4.html",
    external: false
  },
  {
    id: 5,
    title: "Fishery Harbour — Electrical Infrastructure Redesign",
    subtitle: "Sri Lanka",
    year: "2024 – 2025",
    description: "Redesigned the electrical infrastructure for a 500kVA-capacity fishery harbour project — consolidating dual generator supply into a single ATS-managed distribution system with manual bypass.",
    tags: ["Electrical Design","ATS/Changeover","Load Calculation","Generators"],
    type: "engineering",
    link: "projects/project-5.html",
    external: false
  },
  {
    id: 6,
    title: "Hospital Ward Renovation Program",
    subtitle: "Southern & Western Provinces, Sri Lanka",
    year: "2024 – Present",
    description: "Electrical design and consulting across 10–20 hospital ward renovation projects for government and private hospitals in Sri Lanka's Southern and Western provinces.",
    tags: ["Healthcare Design","Retrofit","Electrical Engineering","IEC Standards"],
    type: "engineering",
    link: "projects/project-6.html",
    external: false
  },
  {
    id: 7,
    title: "Private Sector Works — Hospitality & Residential",
    subtitle: "Hospitality & Residential, Sri Lanka",
    year: "Various",
    description: "Electrical design and consulting for private hospitality and residential clients, including Morning Sun, Morning Sun 2, Kahanda Villa, Le Surf, and Rock Island, alongside various housing projects.",
    tags: ["Hospitality Design","Residential Design","Electrical Consulting"],
    type: "engineering",
    link: "projects/project-7.html",
    external: false
  },
  {
    id: 1,
    title: "Cardiac Catheterization Lab – Electrical Design & Distribution",
    subtitle: "Two Facilities incl. Karapitiya National Hospital",
    year: "2025",
    description: "Full electrical distribution design for cardiac catheterization lab suites — 250A main panel, dedicated critical-care UPS backup, and segregated distribution across four clinical zones. Delivered across two separate cath lab facilities using the same critical-care design standard.",
    tags: ["Electrical Engineering","AutoCAD","Hospital Design","IEC Standards","UPS Systems"],
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
    id: 3,
    title: "The Flight Agent — SaaS",
    subtitle: "AI SaaS · Live",
    year: "2026",
    description: "AI-powered flight price monitor that deploys autonomous agents to hunt mispriced tickets and deals 24/7. Alerts via email and Telegram across 50+ currencies.",
    tags: ["Claude Code","VS Code","React","AI-Built","Vercel"],
    type: "webapp",
    link: "https://www.theflightagent.app/",
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
    image: "",
    link: "articles/article-1.html"
  },
  {
    id: 1776922910811,
    title: "Revolutionizing Robotics Prototyping with AI 🤖🦾",
    date: "Mar 2026",
    readTime: "5",
    excerpt: "I’ve been testing out Blueprint.am and the speed of hardware prototyping is changing fast. I wanted to see how it handled a complex request, so I designed a 6-Axis Industrial Robot Arm focused on modularity and \"Plug-and-Work\" efficiency.",
    image: "",
    link: "articles/article-3.html"
  },
  {
    id: 1777219022083,
    title: "Learn to build an AI job matcher",
    date: "Apr 2026",
    readTime: "3",
    excerpt: "Job Matcher App automates job searching using AI. Upload your CV, the app scrapes job boards, uses Claude to match jobs (0-100%), generates cover letters, and tracks applications. Result: 4x more applications in 97% less time. Built with React, Node.js, Claude API.",
    image: "",
    link: "articles/article-4.html"
  }
];

