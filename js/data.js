/**
 * PORTFOLIO DATA REPOSITORY - YOGITHA CHALLA
 * 
 * Single source of truth for resume-supported content.
 * Strictly adheres to verified credentials and experience.
 */

const PORTFOLIO_DATA = {
  about: {
    title: "About Me",
    subtitle: "Passionate about engineering intuitive, elegant, and accessible digital products.",
    description: [
      "I am a Computer Science Engineering student at Annamacharya Institute of Science and Technology, Tirupati, with a genuine enthusiasm for web development, UI/UX design, and crafting user-friendly digital solutions.",
      "With hands-on experience as a Software Development Intern at Cloud Data Networks / Alcheminds Solutions, I have contributed to real-world mobile applications across Android and iOS. My technical foundation spans semantic HTML, modern CSS, JavaScript, and core computer science fundamentals in Python and C.",
      "I believe great software is where reliable code meets thoughtful, empathetic interface design. I am continuously learning, building hands-on projects, and eager to contribute to innovative engineering teams as a web development intern or entry-level software engineer."
    ],
    highlights: [
      {
        icon: "graduation-cap",
        label: "CSE Student",
        value: "2024–2028",
        detail: "Annamacharya Institute of Science & Technology"
      },
      {
        icon: "award",
        label: "Academic Record",
        value: "8.0 / 10 CGPA",
        detail: "Current score till 2-2 semester"
      },
      {
        icon: "briefcase",
        label: "Software Development Intern",
        value: "Cloud Data Networks",
        detail: "Alcheminds Solutions Pvt. Ltd."
      },
      {
        icon: "layout",
        label: "Core Focus",
        value: "Web Dev & UI/UX",
        detail: "Responsive, clean & accessible interfaces"
      }
    ]
  },

  skills: {
    title: "Technical & Professional Skills",
    subtitle: "A focused skillset developed through academic coursework, internship experience, and hands-on projects.",
    categories: [
      {
        name: "Frontend Development",
        description: "Building responsive, semantic, and visually accessible web interfaces.",
        skills: [
          { name: "HTML5", level: "Semantic Markup, Forms, Accessibility", icon: "html5" },
          { name: "CSS3", level: "Flexbox, Modern Layouts, Custom Properties, Media Queries", icon: "css3" },
          { name: "Basic JavaScript", level: "DOM Manipulation, Events, Client-side Logic", icon: "javascript" }
        ]
      },
      {
        name: "Programming Languages",
        description: "Core algorithmic thinking and software development problem solving.",
        skills: [
          { name: "Python", level: "Data structures, problem solving, algorithms", icon: "python" },
          { name: "C Programming", level: "Procedural logic, memory concepts, fundamental algorithms", icon: "c" }
        ]
      },
      {
        name: "Database Management",
        description: "Relational database querying and data modeling fundamentals.",
        skills: [
          { name: "MySQL", level: "Relational queries, table schemas, SQL operations", icon: "database" }
        ]
      },
      {
        name: "Development Tools & Version Control",
        description: "Industry-standard workflows for source control and development.",
        skills: [
          { name: "Git", level: "Version control, branching, commits, staging", icon: "git" },
          { name: "GitHub", level: "Pull requests, code reviews, remote collaboration", icon: "github" },
          { name: "VS Code", level: "Primary development environment, extensions, debugging", icon: "vscode" }
        ]
      },
      {
        name: "Professional & Engineering Skills",
        description: "Core collaborative attributes essential for high-performing tech teams.",
        skills: [
          { name: "Problem Solving", level: "Systematic troubleshooting & algorithmic analysis", icon: "cpu" },
          { name: "Team Collaboration", level: "Team sprints, code reviews & cross-functional communication", icon: "users" },
          { name: "Logical Thinking", level: "Analytical breakdown of software requirements", icon: "git-branch" },
          { name: "Continuous Learning", level: "Eager exploration of emerging technologies & best practices", icon: "book-open" }
        ]
      }
    ]
  },

  experience: [
    {
      role: "Software Development Intern",
      company: "Cloud Data Networks / Alcheminds Solutions Pvt. Ltd.",
      period: "23 July 2026 – 23 January 2027",
      type: "Internship",
      location: "Hybrid / On-site",
      summary: "Contributed to real-world mobile applications targeting Android and iOS platforms, focusing on UI engineering, theming, and feature implementation.",
      achievements: [
        "Contributed to the RMA Mobile App for both Android and iOS platforms, ensuring feature reliability and smooth user flows.",
        "Engineered responsive and user-friendly mobile application modules using NativeScript, TypeScript, XML, CSS, and JavaScript.",
        "Implemented theme customization modules to maintain a polished, uniform visual style across varying device form factors.",
        "Contributed to core authentication workflows and real-time push notification features to elevate user engagement.",
        "Focused strictly on consistent cross-platform UI/UX, aligning spacing, color palettes, and typographic scales across Android and iOS.",
        "Collaborated actively in code reviews, bug triage, debugging sessions, and performance improvements.",
        "Maintained version control integrity using Git and GitHub across feature branches, commits, and pull requests."
      ],
      technologies: ["NativeScript", "TypeScript", "XML", "CSS", "JavaScript", "Git", "GitHub"]
    }
  ],

  projects: [
    {
      id: "login-page-ui",
      title: "Login Page UI Design",
      category: "Web Development / UI Design",
      badge: "Frontend Project",
      description: "Designed and developed a responsive login interface focusing on clean layout, modern UI design, visual hierarchy, and user-friendly authentication options.",
      technologies: ["HTML", "CSS", "Flexbox", "Responsive Design"],
      features: [
        "Multiple authentication options: Google, Apple, and Phone verification",
        "Visually aligned provider icons and custom interactive buttons",
        "Structured input fields with clear states (default, focus, hover)",
        "CSS Flexbox layout ensuring flawless centering and responsiveness",
        "Modern depth styling with subtle box-shadows and border-radius curves",
        "Smooth micro-interactions and hover animations",
        "Consistent spacing, typography hierarchy, and accessibility contrast"
      ],
      hasLiveDemo: true,
      demoType: "login",
      githubUrl: null, // Only real URLs
      liveUrl: null
    },
    {
      id: "modern-landing-page-ui",
      title: "Modern Landing Page UI Design",
      category: "Web Development / UI Design",
      badge: "Frontend Project",
      description: "Designed and developed a visually appealing responsive landing page with a modern dark-themed interface and structured content hierarchy.",
      technologies: ["HTML", "CSS", "Dark Theme", "Responsive Layout"],
      features: [
        "Sticky navigation bar with brand identity and quick nav anchors",
        "Impactful hero section with clear headline typography and CTA buttons",
        "Feature highlight cards organized in a balanced responsive grid",
        "Conversion-focused call-to-action (CTA) sections",
        "Responsive Flexbox and Grid management adaptable to all viewports",
        "Curated dark-themed palette with high contrast readability",
        "Reusable design patterns: cards, badges, and responsive containers"
      ],
      hasLiveDemo: true,
      demoType: "landing",
      githubUrl: null, // Only real URLs
      liveUrl: null
    },
    {
      id: "rma-mobile-app",
      title: "RMA Mobile Application",
      category: "Mobile Application Development",
      badge: "Internship Contribution",
      internshipNote: "Work contributed to during Software Development Internship at Cloud Data Networks / Alcheminds Solutions Pvt. Ltd.",
      description: "Contributed to the development and enhancement of the RMA Mobile App for Android and iOS during my Software Development Internship.",
      technologies: ["NativeScript", "TypeScript", "XML", "CSS", "JavaScript", "Git", "GitHub"],
      features: [
        "Engineered responsive mobile user interfaces across Android and iOS",
        "Implemented custom theme styling and design token consistency",
        "Contributed to user authentication modules and security flows",
        "Assisted in notification features and real-time state alerts",
        "Executed thorough mobile debugging, testing, and defect resolution",
        "Active team collaboration via Git feature branching, PRs, and peer code reviews"
      ],
      hasLiveDemo: false,
      demoType: null,
      githubUrl: null, // Proprietary company codebase
      liveUrl: null
    }
  ],

  uiuxShowcase: {
    title: "UI/UX Design & Interface Development",
    subtitle: "Crafting interfaces that bridge clean visual aesthetics with intuitive, frictionless usability.",
    principles: [
      {
        icon: "smartphone",
        title: "Responsive UI",
        description: "Fluid fluid-width layouts that naturally scale from 360px mobile viewports to 1440px desktop displays."
      },
      {
        icon: "layout",
        title: "Clean Layouts",
        description: "Intentional negative space and structured containers that reduce cognitive load for users."
      },
      {
        icon: "tablet",
        title: "Mobile Interfaces",
        description: "Touch-friendly tap targets, thumb-accessible zones, and smooth mobile gestures."
      },
      {
        icon: "shield-check",
        title: "Authentication UI",
        description: "Clear input feedback, social login integration (Google/Apple), and intuitive multi-step forms."
      },
      {
        icon: "moon",
        title: "Dark / Light Themes",
        description: "Balanced contrast ratios that reduce eye strain while preserving brand expression in any lighting."
      },
      {
        icon: "grid",
        title: "Cards & Components",
        description: "Modular, reusable component systems with predictable states: default, hover, active, and focus."
      },
      {
        icon: "type",
        title: "Typography",
        description: "Structured typographic hierarchy with readable line heights, letter spacing, and scalable rem units."
      },
      {
        icon: "maximize-2",
        title: "Spacing & Rhythm",
        description: "Consistent 4px/8px spatial rhythm creating clear visual relationships between elements."
      },
      {
        icon: "compass",
        title: "User-Friendly Navigation",
        description: "Predictable menu patterns, breadcrumb cues, and prominent calls to action."
      }
    ]
  },

  certifications: [
    {
      name: "NxtWave Intensive AI Bootcamp",
      organization: "NxtWave",
      year: "2026",
      tag: "AI & Modern Development",
      credentialType: "Bootcamp Intensive",
      url: PORTFOLIO_CONFIG.certificateUrls.CERTIFICATE_URL_1 || "CERTIFICATE_URL_1"
    },
    {
      name: "SkillQuest – Generative AI Literacy",
      organization: "Simplilearn SkillUp",
      year: "2026",
      tag: "Generative AI",
      credentialType: "Professional Literacy",
      url: PORTFOLIO_CONFIG.certificateUrls.CERTIFICATE_URL_2 || "CERTIFICATE_URL_2"
    },
    {
      name: "Data Analytics Job Simulation",
      organization: "Deloitte – Forage",
      year: "2026",
      tag: "Data Analytics",
      credentialType: "Industry Simulation",
      url: PORTFOLIO_CONFIG.certificateUrls.CERTIFICATE_URL_3 || "CERTIFICATE_URL_3"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B. Tech)",
      major: "Computer Science Engineering",
      institution: "Annamacharya Institute of Science and Technology, Tirupati",
      duration: "2024–2028",
      cgpa: "8.0 / 10 (till 2-2)",
      highlights: [
        "Core coursework: Data Structures, Computer Networks, Database Management Systems, Object Oriented Thinking.",
        "Practical laboratory problem-solving in Python (AI algorithms) and C programming (Network Protocols).",
        "Consistent academic excellence with an 8.0 CGPA."
      ]
    }
  ],

  github: {
    heading: "Code, Projects & Continuous Learning",
    description: "I enjoy learning through hands-on development, building projects, and continuously improving my technical skills.",
    profileUrl: PORTFOLIO_CONFIG.personal.github,
    username: "challayogitha8-debug"
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
