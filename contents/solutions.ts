import { ISolution } from "@/interfaces/types";

export const solutions: ISolution[] = [
  // {
  //   title: "Smart ERP System",
  //   description:
  //     "An AI-integrated ERP system designed to automate inventory and employee management.",
  //   challenges: [
  //     "Implementing a role-based access control (RBAC) system",
  //     "Optimizing real-time inventory tracking",
  //     "Integrating AI-driven insights into ERP workflows",
  //   ],
  //   solutions: [
  //     "Developed a granular RBAC using JWT and middleware",
  //     "Used WebSockets for real-time inventory updates",
  //     "Trained a basic ML model to predict restocking needs",
  //   ],
  //   techStack: ["React.js", "Express.js", "MongoDB", "Socket.io", "Python ML"],
  //   link: "#",
  // },
  // {
  //   title: "Soul Sync",
  //   description:
  //     "An AI-integrated ERP system designed to automate inventory and employee management.",
  //   challenges: [
  //     "Implementing a role-based access control (RBAC) system",
  //     "Optimizing real-time inventory tracking",
  //     "Integrating AI-driven insights into ERP workflows",
  //   ],
  //   solutions: [
  //     "Developed a granular RBAC using JWT and middleware",
  //     "Used WebSockets for real-time inventory updates",
  //     "Trained a basic ML model to predict restocking needs",
  //   ],
  //   techStack: ["React.js", "Express.js", "MongoDB", "Socket.io", "Python ML"],
  //   link: "#",
  // },
  // {
  //   title: "Job Genie",
  //   description:
  //     "A web application that helps users optimize their job applications with AI-generated insights.",
  //   challenges: ["Integrating AI-powered resume analysis (WIP)"],
  //   solutions: [
  //     "Used OpenAI API for intelligent job recommendations",
  //     "Designed a clean and structured database for job applications",
  //   ],
  //   techStack: [
  //     "Next.js",
  //     "TypeScript",
  //     "TailwindCSS",
  //     "OpenAI API",
  //     "MongoDB",
  //   ],
  //   link: "https://github.com/dinakajoy/job-application-assistant",
  //   liveLink: "https://job-application-assistant.vercel.app",
  // },
  // {
  //   title: "Team Collab",
  //   description:
  //     "TeamCollab is a collaborative project and task management GraphQL API. It supports scalable team structures, project tracking, and efficient task management using modern best practices.",
  //   challenges: [
  //     "Implementing a role-based access control (RBAC) system",
  //     "Implementing security with GraphQL Shield",
  //     "Implementing errors",
  //   ],
  //   solutions: [
  //     "Developed a granular RBAC using JWT and middleware",
  //     "Teams, Members, Project & Task Management with GraphQL Shield",
  //     "Implemented error handling with Apollo Server",
  //     "Implemented a custom error handler for GraphQL errors",
  //     "Used DataLoader for efficient data fetching and caching",
  //   ],
  //   techStack: ["Node.js", "Express.js", "MongoDB", "Apollo Server"],
  //   link: "https://github.com/dinakajoy/teamcollab-graphQL-API",
  // },
  // {
  //   title: "Team Work",
  //   description:
  //     "Teamwork is an internal social network for employees of an organization. The goal of this application is to facilitate more interaction between colleagues and promote team bonding.",
  //   solutions: [
  //     "User Authentication and Authorization",
  //     "Employees, Content and Comment Management",
  //     "Documented using Swagger",
  //   ],
  //   techStack: ["Node.js", "Express.js", "PostgreSQL", "Swagger API"],
  //   link: "https://github.com/dinakajoy/teamwork-REST-API",
  // },
  {
    id: 1,
    shortTitle: "AuthXpress",
    title:
      "AuthXpress — A flexible starter kit for building RBAC-based authentication systems quickly",
    description:
      "AuthXpress empowers developers to integrate robust Role-Based Access Control (RBAC) authentication into applications effortlessly. It provides pre-built structures for user roles, permissions, secure authentication flows, and a scalable architecture that accelerates development time.",
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
      "Developers often waste time reinventing authentication systems — AuthXpress cuts setup time significantly.",
      "Businesses can onboard users with different roles and permissions without rewriting core logic.",
      "Ensures secure, compliant user management, critical for B2B and SaaS products.",
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "React.js", "TailwindCSS"],
    link: "https://github.com/dinakajoy/authXpress",
    liveLink: "https://authxpress.vercel.app",
  },
];
