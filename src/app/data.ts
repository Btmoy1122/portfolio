// All site content lives here so updates don't require touching layout code.

export const profile = {
  name: "Brandon Moy",
  firstName: "Brandon",
  year: "Junior",
  school: "Stony Brook University · Honors College",
  degree: "B.S. Computer Science & Applied Mathematics and Statistics",
  graduation: "May 2028",
  gpa: "3.79 / 4.0",
  activities: [
    "Stony Brook Computing Society Representative",
    "Competitive Club Teams: Rock Climbing & Volleyball",
    "Competitive Gaming",
  ],
  gaming: [
    { game: "Fortnite", result: "Top 10 in an official Epic Games tournament ($500 prize)" },
    { game: "Valorant", result: "Immortal (~top 1% NA)" },
    { game: "League of Legends", result: "Diamond" },
    { game: "TFT", result: "Diamond" },
  ],
  resume: "/Brandon-Moy-Resume.pdf",
  email: "btmoy1121@gmail.com",
  discord: "btmoy1121",
  linkedin: "https://www.linkedin.com/in/brandon-moy-495a65278/",
  github: "https://github.com/Btmoy1122",
  now: [
    "Researching DP algorithms with Prof. Pramod Ganapathi",
    "Computing Society Representative",
    "Up next: building a mini Redis in C",
  ],
};

export const about = [
  "I'm a junior in Stony Brook's Honors College, majoring in Computer Science on the Honors track and Applied Mathematics & Statistics. I graduate in May 2028.",
  "I'm enjoy full-stack development and love owning a feature. At Get Talky I shipped full-stack features for an AI evaluation platform; on my own I've built everything from an AR accessibility web app to a real-time fraud-scoring pipeline on Kafka and Redis. Lately I've been going deeper with backend-work. Next up is a mini Redis written from scratch in C. On the theory side, I do algorithms research with Prof. Pramod Ganapathi, where I derive, prove, and optimize dynamic programming algorithms.",
  "Outside of class I compete on Stony Brook's rock climbing club team (V9 is my best send so far) and volleyball club team, and I play guitar. I've also been a competitive gamer since elementary school, and a few highlights are below.",
];

export const skills = [
  { title: "Languages", items: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL", "HTML/CSS"] },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "D3.js", "Framer Motion", "Vite", "A-Frame / AR.js"],
  },
  {
    title: "Backend & Databases",
    items: ["Node.js", "Express", "FastAPI", "Flask", "REST APIs", "PostgreSQL", "Redis", "Kafka", "Supabase", "Firebase"],
  },
  {
    title: "ML & Data",
    items: ["TensorFlow", "scikit-learn", "pandas", "NumPy", "MediaPipe", "OpenAI API", "Streamlit", "Plotly", "Selenium"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Linux", "Git", "GitHub Actions", "Prometheus", "k6", "pytest", "Criterion", "Vercel", "Jira", "Claude Code"],
  },
  {
    title: "Concepts",
    items: [
      "Distributed Systems",
      "Concurrency",
      "Event-Driven Architecture",
      "Message Queues",
      "Dynamic Programming",
      "Algorithm Design",
      "Object-Oriented Design",
      "Agile",
    ],
  },
];

export const coursework = [
  {
    title: "Computer Science",
    items: [
      "Data Structures",
      "Object-Oriented Programming",
      "Systems I",
      "Systems II",
      "Fundamentals of Software Development",
      "Analysis of Algorithms",
      "Theory of Computation",
      "Computational Geometry",
      "Machine Learning",
    ],
  },
  {
    title: "Mathematics",
    items: ["Discrete Mathematics", "Probability I", "Probability II"],
  },
];

export type Experience = {
  role: string;
  org: string;
  dates: string;
  logo?: string;
  initials?: string;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Undergraduate Researcher",
    org: "Stony Brook University · Algorithms Research, Prof. Pramod Ganapathi",
    dates: "Jun 2026 – Present",
    initials: "DP",
    bullets: [
      "Derive and prove correct dynamic programming algorithms for an algorithmic problem-solving book.",
      "Optimized the multi-peg Tower of Hanoi DP from O(kn²) to O(nk) using convexity and monotone split points.",
      "Constructed a counterexample to a 2025 arXiv paper's split-point formula, verified by exhaustive BFS.",
      "Cut memory from O(n²) to O(n) with rolling arrays and derived wavefront-parallel loop orders for DP tables.",
    ],
    tags: ["Algorithm Design", "Dynamic Programming", "Proofs", "Python"],
  },
  {
    role: "Undergraduate Teaching Assistant",
    org: "Stony Brook University · Object-Oriented Programming",
    dates: "Jan 2026 – May 2026",
    initials: "TA",
    bullets: [
      "Led weekly Java labs for 100+ students on object-oriented design, inheritance, and debugging strategies.",
      "Live-coded lab solutions for students and debugged their projects during office hours.",
    ],
    tags: ["Java", "OOP", "Teaching"],
  },
  {
    role: "Software Engineering Intern",
    org: "Get Talky",
    dates: "May 2025 – Aug 2025",
    logo: "/get-talky-logo.jpg",
    bullets: [
      "Built full-stack features for an AI conversation evaluation platform using React, Node.js, and PostgreSQL.",
      "Designed REST APIs and PostgreSQL schemas for comment tracking and review status, with integration tests.",
      "Built client- and global-level CSV exports of comment data, streamlining reporting for all clients.",
      "Refactored React comment state to update locally instead of re-fetching the full thread on each post.",
      "Prototyped UI automation with AskUI for client testing, cutting manual QA validation time by 20%.",
    ],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "AskUI"],
  },
];

export type Project = {
  title: string;
  accent: "teal" | "lime" | "amber" | "purple" | "sky";
  status?: string;
  github?: string;
  demo?: string;
  team?: string;
  summary: string;
  features: { name: string; desc: string }[];
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Real-time Fraud Decisioning Platform",
    accent: "teal",
    github: "https://github.com/Btmoy1122/FraudDetection",
    summary:
      "A backend service that approves or denies transactions in real time, built to stay correct when requests race, messages repeat, or parts of the system go down.",
    features: [
      {
        name: "Instant decisions",
        desc: "Every transaction is scored against live behavior: how many purchases the user made in the past hour and how the amount compares to their 30-day average.",
      },
      {
        name: "Race-proof limits",
        desc: "Velocity checks run as one atomic Redis Lua script, so a burst of simultaneous requests can't sneak past the limit.",
      },
      {
        name: "No lost events",
        desc: "Decisions and their events commit together through a transactional outbox, then flow through Kafka to audit and analytics consumers with retries and a dead-letter queue.",
      },
      {
        name: "Safe retries",
        desc: "Duplicate requests and redelivered messages get the original decision back instead of being processed twice.",
      },
      {
        name: "Keeps running when things break",
        desc: "If Redis dies it falls back to Postgres. If Kafka dies the API keeps serving and events catch up later. CI tests both by killing containers.",
      },
      {
        name: "Load tested and observable",
        desc: "k6 load tests and Grafana dashboards track throughput, latency, and consumer lag. Getting past a single-process GIL bottleneck took it from ~200 to 500 tx/s with zero errors.",
      },
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Kafka", "Docker", "Prometheus", "Grafana", "k6"],
  },
  {
    title: "AccessLens: AR Accessibility Assistant",
    accent: "purple",
    status: "Hackathon",
    github: "https://github.com/Btmoy1122/AccessLens",
    demo: "https://accesslens1.vercel.app",
    team: "Built with 2 teammates",
    summary:
      "A browser-based AR assistant for people with visual, hearing, or speech impairments. Point your camera at the world and it captions, describes, and remembers what's around you.",
    features: [
      {
        name: "Live captions",
        desc: "Speech around you turns into real-time on-screen captions for hard-of-hearing users.",
      },
      {
        name: "Scene narration",
        desc: "Describes the scene and the people in it out loud for visually impaired users.",
      },
      {
        name: "Face memory",
        desc: "Recognizes people you've met and shows your personal notes about them right next to their face in AR.",
      },
      {
        name: "Hands-free controls",
        desc: "Pinch to click and pull up a floating hand menu, powered by real-time hand tracking.",
      },
    ],
    tags: ["JavaScript", "A-Frame", "AR.js", "MediaPipe", "TensorFlow.js", "face-api.js", "Web Speech API", "Firebase"],
  },
  {
    title: "Undergrad Course Planner",
    accent: "lime",
    github: "https://github.com/eduardoloz/bulletin-website",
    demo: "https://courses.sbcs.io/",
    summary:
      "A planning tool for Stony Brook students that turns the course bulletin into an interactive map of your degree. Used by 100+ students.",
    features: [
      {
        name: "Prerequisite graph",
        desc: "An interactive D3 graph of how courses connect, color-coded by what you've already completed.",
      },
      {
        name: "Degree progress",
        desc: "Mark off your courses and see how far along you are, with progress saved to your account.",
      },
      {
        name: "Professor insights",
        desc: "An AI chatbot answers questions about professors by summarizing scraped RateMyProfessors reviews.",
      },
    ],
    tags: ["React", "D3.js", "Node.js", "Express", "Supabase", "OpenAI", "Selenium"],
  },
  {
    title: "MP3 Metadata & Audio Tool",
    accent: "amber",
    summary: "A command-line tool written in C that reads and edits audio files at the byte level.",
    features: [
      {
        name: "Metadata reader",
        desc: "Parses ID3 tags (title, artist, album) and MPEG frame headers straight from the raw file bytes.",
      },
      { name: "Trim", desc: "Cuts audio down to just the part you want." },
      {
        name: "Overlay",
        desc: "Mixes one track on top of another, even when their sample rates or mono/stereo layouts don't match.",
      },
    ],
    tags: ["C", "Make", "Criterion"],
  },
  {
    title: "Mini Redis",
    accent: "sky",
    status: "Up next",
    // TODO: add repo link and features once work is underway.
    summary:
      "My next project: a Redis-style in-memory key-value store written from scratch in C, to understand what's really going on inside a tool I rely on.",
    features: [],
    tags: ["C"],
  },
];

export const earlierProjects = [
  {
    title: "Financial Sentiment Dashboard",
    github: "https://github.com/Btmoy1122/FinancialSentiment",
    desc: "FinBERT sentiment analysis on Reddit and Yahoo Finance discussions, visualized in Streamlit and Plotly.",
    tags: ["Python", "FinBERT", "Streamlit"],
  },
  {
    title: "Breast Tumor Classifier",
    github: "https://github.com/Harrisaint/Cancer-Histology-Detection",
    desc: "Fine-tuned MobileNetV2 histopathology classifier served through FastAPI with a Next.js frontend.",
    tags: ["TensorFlow", "FastAPI", "Next.js"],
  },
  {
    title: "HealthBot AI",
    github: "https://github.com/Btmoy1122/HopperHacks",
    desc: "HopperHacks project: appointment scheduling, a voice-enabled AI health assistant, and journaling.",
    tags: ["React", "Flask", "OpenAI"],
  },
];
