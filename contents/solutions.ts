import { ISolution } from "@/interfaces/types";

export const solutions: ISolution[] = [
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
