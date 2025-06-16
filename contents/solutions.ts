import { ISolution } from "@/interfaces/types";

export const solutions: ISolution[] = [
  {
    id: 1,
    shortTitle: "AuthXpress",
    title:
      "AuthXpress - A flexible starter kit for RBAC-based authentication systems",
    description:
      "AuthXpress empowers developers to integrate Role-Based Access Control authentication into applications effortlessly. It provides pre-built structures for user roles, permissions, secure authentication flows, and a scalable architecture that speeds development time.",
    features: [
      "User Authentication: Secure registration, login, and password management",
      "Role-Based Access Control: Define roles and permissions dynamically",
      "Scalability: Easily extend user roles and permission layers",
      "Security Best Practices: Follows OAuth2 and JWT standards",
      "Developer Experience: Clear API endpoints and modular structure",
    ],
    reasons: [
      "Speed Up Development: Reduce the repetitive boilerplate when setting up auth systems",
      "Flexibility: Allow quick adaptation for SaaS, Admin panels, or enterprise systems",
      "Promote Best Practices: Encourage using scalable and secure RBAC from the start",
      "Real-World Relevance: Built to mirror real needs in production-ready apps",
    ],
    solution: [
      "Developers often waste time reinventing authentication systems. AuthXpress cuts setup time significantly.",
      "Businesses can onboard users with different roles and permissions without rewriting core logic.",
      "Ensures secure, compliant user management, critical for B2B and SaaS products.",
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "React.js", "TailwindCSS"],
    link: "https://github.com/dinakajoy/authXpress",
    liveLink: "https://authxpress.vercel.app",
    dashboard: "authxpress-dashboard",
  },
  {
    id: 2,
    shortTitle: "Job Application Assistant",
    title:
      "Job Application Assistant - Optimize your job applications with AI-generated insights",
    description:
      "A web application that helps users optimize their job applications with AI-generated insights, including job descriptiopn analysis, resume analysis and matching, cover letter creation, improvement suggestions and job-skill alignment.",
    features: [
      "Resume Analysis: Upload documents and get AI feedback on strengths and areas for improvement",
      "Cover Letter Generation: Create tailored cover letters based on job descriptions",
      "Skill Matching: Analyze job descriptions and match them with user skills",
      "Job Description Parsing: Extract key information from job postings for better understanding",
      "File Upload: Securely upload and parse user documents (PDF, DOCX)",
    ],
    reasons: [
      "AI-Powered Features: Integrate OpenAI API for intelligent resume analysis and cover letter generation",
      "User-Centric Design: Focus on user experience with a clean and intuitive interface",
      "Real-World User Problems: Solve a genuine need for better job application support and preparation",
      "File Handling Skills: Work with uploading, parsing, and analyzing user files securely",
      "Full-Stack Development: Combine frontend UX design with backend AI integration",
      "Portfolio Value: Create a high-impact project that demonstrates both technical skill and user-centered design thinking",
    ],
    solution: [
      "Job seekers often struggle to tailor their applications and this tool provides automated, personalized support.",
      "It reduces the time and effort required to write strong cover letters and analyze job descriptions.",
      "Improves user confidence by highlighting skill gaps and recommending improvements through AI feedback.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Express.js",
      "OpenAI API",
    ],
    link: "https://github.com/dinakajoy/job-application-assistant",
    liveLink: "https://job-application-assistant.vercel.app",
    dashboard: "job-application-assistant-dashboard",
  },
  {
    id: 3,
    shortTitle: "Soul Sync",
    title:
      "Soul Sync - An AI-powered emotional check-in and self-reflection companion",
    description:
      "Soul Sync is an AI-powered emotional well-being app that helps users reflect, regulate their emotions, and grow through intentional self-discovery. It supports journaling, daily check-ins, and guided sync sessions, all enhanced with compassionate, memory-aware reflections.",
    features: [
      "Google Login: Secure, one-click sign-in with your Google account",
      "AI Chat Support: Gentle, emotionally-aware support AI that offers encouragement and clarity",
      "Smart Journaling: Log your thoughts and receive kind AI-powered reflections",
      "Sync Sessions: Themed guided sessions (e.g., grief, clarity, focus) powered by AI coaching",
      "Mood Check-ins: Track your emotional patterns with quick daily entries",
      "Insights Dashboard: Visualize mood patterns over time for deeper reflection",
      "Data Deletion: Users can delete all their data at any time",
    ],
    reasons: [
      "Mental Health Support: Build an accessible space where people can reflect and receive support anytime",
      "AI API Integration: Practice prompt engineering and build memory-aware AI chat systems",
      "Real Impact: Encourage emotional wellness through a calming, judgment-free experience",
      "Frontend-Backend Synergy: Blend expressive UI with intelligent backend support",
      "Privacy-Focused: Give users full control over their data, ensuring trust and transparency",
    ],
    solution: [
      "Many people lack a safe and convenient space for emotional expression - Soul Sync fills that gap.",
      "It makes mental wellness accessible by combining empathetic design with intelligent, real-time AI guidance.",
      "Users are empowered to reflect, learn about their emotional patterns, and receive thoughtful support at any hour.",
    ],
    techStack: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
    ],
    link: "https://github.com/dinakajoy/soul-sync",
    liveLink: "https://soul-sync-platform.vercel.app",
    dashboard: "soul-sync-dashboard",
  },
];
