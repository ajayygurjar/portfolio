// ── Navigation ────────────────────────────────────────────────
export const NAV_LINKS = ['About', 'Skills', 'Projects', 'Credentials', 'Contact']

// ── Hero / About ──────────────────────────────────────────────
export const HERO = {
  name: 'AJAY\nGURJAR',
  role: 'Full Stack Developer',
  location: 'Bhopal, M.P.',
  bio: 'Building production-ready applications with MERN stack — dual-interface architectures, role-based access control, real-time sync, and secure auth. From pharmacy to full-stack: unconventional paths make for sharper engineers.',
  email: 'ajay161651@gmail.com',
  phone: '+91 8109910288',
  github: 'https://github.com/ajayygurjar',
  linkedin: 'https://linkedin.com/in/ajayygurjar',
  stats: [
    { value: '3',   label: 'Production Projects' },
    { value: '5+',  label: 'Tech Per Project'    },
    { value: '4',   label: 'State Championships' },
    { value: '2',   label: 'Certifications'      },
  ],
}

// ── Skills ────────────────────────────────────────────────────
export const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    label: 'Frontend',
    items: ['React.js', 'Redux Toolkit', 'React Router', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Axios'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth', 'MVC Architecture'],
  },
  {
    label: 'Database',
    items: ['MySQL', 'MongoDB', 'Firebase Realtime DB'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Netlify', 'Firebase Hosting'],
  },
  {
    label: 'CS Fundamentals',
    items: ['Data Structures & Algorithms', 'REST API Design', 'Database Design'],
  },
]

// ── Projects ──────────────────────────────────────────────────
export const PROJECTS = [
  {
    num: '01',
    title: 'Shoppy',
    subtitle: 'Full-Stack E-commerce Platform',
    stack: ['React.js', 'Redux Toolkit', 'Firebase', 'Bootstrap', 'Axios'],
    description:
      'Dual-interface architecture with separate Admin Dashboard and Customer Interface. Firebase Realtime Database for real-time sync, Redux Toolkit for centralized state — multi-address checkout, persistent cart, and live category-based product filtering.',
    highlights: [
      'Dual-interface: Admin Dashboard + Customer Interface',
      'Firebase Realtime DB for live product sync',
      'Persistent cart & multi-address checkout via Redux',
    ],
    live: 'https://shoppy-user.netlify.app',
    github: 'https://github.com/ajayygurjar/Shoppy_User',
    accentColor: '#a8ff3e',
  },
  {
    num: '02',
    title: 'Expense Tracker',
    subtitle: 'Financial Management App',
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    description:
      'Full-stack finance app with RESTful APIs, JWT authentication, and MVC architecture. Normalized MySQL schema with indexed queries, session-based authorization, and server-side pagination for large dataset performance.',
    highlights: [
      'JWT authentication & session-based authorization',
      'Normalized MySQL schema with indexed queries',
      'Server-side pagination for dataset performance',
    ],
    github: 'https://github.com/ajayygurjar/Expense_Tracker',
    accentColor: '#3ef5ff',
  },
  {
    num: '03',
    title: 'ChroniCare',
    subtitle: 'Healthcare Management Platform',
    stack: ['React.js', 'Redux Toolkit', 'Firebase', 'Bootstrap', 'Vite'],
    description:
      'Role-based dashboards for patients and doctors with separate permission sets. Appointment booking with interactive calendar and real-time availability. Medical records module for digital prescriptions and treatment progress tracking.',
    highlights: [
      'Role-based dashboards: Patient & Doctor views',
      'Interactive booking calendar with real-time availability',
      'Digital prescriptions & treatment history module',
    ],
    live: 'https://chronicare-ffd95.web.app',
    github: 'https://github.com/ajayygurjar/ChroniCare',
    accentColor: '#ff6eb4',
  },
]

// ── Certifications ────────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    title: 'Frontend Development',
    org: 'Sharpener.tech',
    detail: 'React.js · Redux · State Management · Firebase',
    status: 'Completed',
  },
  {
    title: 'Backend Development',
    org: 'Sharpener.tech',
    detail: 'Node.js · Express.js · RESTful APIs · Database Management',
    status: 'In Progress',
  },
]

// ── Education ─────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: 'M.Pharmacy',
    field: 'Pharmaceutical Chemistry',
    institution: 'Technocrats Institute of Technology (RGPV)',
    period: 'July 2023 – Present',
    grade: null,
  },
  {
    degree: 'B.Pharmacy',
    field: null,
    institution: 'Technocrats Institute of Technology (RGPV)',
    period: 'June 2022',
    grade: 'CGPA 8.07',
  },
]

// ── Achievement ───────────────────────────────────────────────
export const ACHIEVEMENT = {
  icon: '🏆',
  title: 'National Athlete & Team Captain',
  body: 'National Netball Player — captained 2 National and 7 State Championships, leading the team to 4 State titles. Demonstrates leadership, teamwork, and performance under pressure.',
}

// ── Contact ───────────────────────────────────────────────────
export const CONTACT_LINKS = [
  { label: 'Email',    value: 'ajay161651@gmail.com',       href: 'mailto:ajay161651@gmail.com'             },
  { label: 'GitHub',   value: 'github.com/ajayygurjar',     href: 'https://github.com/ajayygurjar'          },
  { label: 'LinkedIn', value: 'linkedin.com/in/ajayygurjar',href: 'https://linkedin.com/in/ajayygurjar'     },
  { label: 'Phone',    value: '+91 81099 10288',             href: 'tel:+918109910288'                       },
]
