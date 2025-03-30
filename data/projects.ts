export const projects = [
   // {
  //   title: "Team Collab GraphQL API",
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
  //   title: "TheraBot",
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
  {
    title: "AI-Powered Job Application Assistant",
    description:
      "A web application that helps users optimize their job applications with AI-generated insights.",
    challenges: [
      "Integrating AI-powered resume analysis (WIP)",
    ],
    solutions: [
      "Used OpenAI API for intelligent job recommendations",
      "Designed a clean and structured database for job applications",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "OpenAI API",
      "MongoDB",
    ],
    link: "https://github.com/dinakajoy/job-application-assistant",
  },
  {
    title: "SmartTicTac - AI-Enhanced Tic-Tac-Toe",
    description:
      "A web-based Tic-Tac-Toe game that incorporates AI to provide a challenging gameplay experience.",
    challenges: [
      "Implementing an intelligent AI opponent",
      "Ensuring smooth and responsive UI interactions",
      "Managing game state effectively across different players",
    ],
    solutions: [
      "Utilized Minimax algorithm for AI decision-making",
      "Built an interactive UI with React for a seamless gaming experience",
      "Managed game state efficiently using React hooks",
    ],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Minimax Algorithm"],
    link: "https://github.com/dinakajoy/SmartTicTac",
  },
  {
    title: "Kepler Planet Explorer",
    description:
      "A web application that visualizes exoplanet data from the Kepler space mission, helping users explore discovered planets in an interactive way.",
    challenges: [
      "Fetching and processing large datasets of exoplanets",
      "Creating an intuitive and visually engaging UI",
      "Optimizing performance for data visualization",
    ],
    solutions: [
      "Used NASA's Exoplanet API to fetch planetary data",
      "Designed a clean and interactive UI with React and TailwindCSS with paginated and lazyloaded view options",
      "Implemented efficient state management for smooth user experience",
    ],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "NASA Exoplanet API"],
    link: "https://github.com/dinakajoy/Kepler-planet-explorer",
  },
  {
    title: "AuthXpress",
    description:
      "A secure authentication system built with Express.js, providing user registration, login, and role-based access control (RBAC).",
    challenges: [
      "Implementing a robust authentication and authorization system",
      "Ensuring secure password storage and user data protection",
      "Managing user roles and access levels efficiently",
    ],
    solutions: [
      "Used bcrypt for password hashing and JWT for authentication",
      "Implemented role-based access control (RBAC) for secure authorization",
      "Designed a RESTful API with Express.js for seamless authentication",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "bcrypt",
      "React.js",
      "TailwindCSS",
    ],
    link: "https://github.com/dinakajoy/authXpress",
  },
  {
    title: "JSON Engine",
    description:
      "A lightweight tool for parsing, manipulating, and formatting JSON data efficiently.",
    challenges: [
      "Building a robust and flexible JSON parsing mechanism",
      "Ensuring efficient performance for handling large JSON objects",
      "Providing an intuitive and developer-friendly API",
    ],
    solutions: [
      "Implemented a custom JSON parser with optimized performance",
      "Designed a simple and intuitive API for easy data manipulation",
      "Added error handling to detect and manage malformed JSON structures",
    ],
    techStack: ["JavaScript", "Node.js", "Worker", "JSONStream"],
    link: "https://github.com/dinakajoy/JSON_Engine",
  },
  {
    title: "GitHub Snoop",
    description:
      "A web application that provides insights into GitHub profiles, repositories, and contributions.",
    challenges: [
      "Fetching and processing large amounts of GitHub data efficiently",
      "Designing an intuitive UI to display repository and profile insights",
      "Handling API rate limits and optimizing requests",
    ],
    solutions: [
      "Integrated GitHub API to retrieve user and repository data",
      "Designed a clean and interactive UI using React and TailwindCSS",
      "Implemented caching mechanisms to optimize API calls",
      "Implemented OAuth for secure authentication and persist search history",
    ],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "GitHub API"],
    link: "https://github.com/dinakajoy/github-snoop",
  },
  {
    title: "Quiz App",
    description:
      "A web-based quiz application that allows users to take quizzes on various topics with real-time scoring.",
    challenges: [
      "Creating an engaging and user-friendly quiz interface",
      "Managing real-time quiz state and scoring system",
      "Fetching and displaying quiz data efficiently",
    ],
    solutions: [
      "Designed an interactive and responsive UI with React and TailwindCSS",
      "Implemented real-time quiz state management using React hooks",
      "Integrated a GraphQL API for fetching quiz questions",
    ],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "SWR", "GraphQL API"],
    link: "https://github.com/dinakajoy/quiz_app_graphql_api",
  },
  {
    title: "Mini Netflix Movie App",
    description:
      "A movie streaming web application that allows users to browse, search, and discover movies with a Netflix-like interface.",
    challenges: [
      "Fetching and displaying real-time movie data",
      "Implementing a smooth and responsive UI for a Netflix-like experience",
      "Optimizing API calls for better performance",
    ],
    solutions: [
      "Integrated The Movie Database (json file) API for fetching movie details",
      "Designed an intuitive and visually appealing UI using React and TailwindCSS",
      "Implemented lazy loading and pagination for efficient data fetching",
    ],
    techStack: ["React", "TypeScript", "CSS"],
    link: "https://github.com/dinakajoy/mini-netflix-movie-app",
  },
  {
    title: "Save the Princess Game",
    description:
      "A fun and interactive game where players navigate through challenges to rescue a princess.",
    challenges: [
      "Designing engaging and challenging game mechanics",
      "Ensuring smooth animations and user interactions",
      "Managing game state effectively for seamless gameplay",
    ],
    solutions: [
      "Implemented dynamic game logic to create an immersive experience",
    ],
    techStack: ["React", "CSS Animations"],
    link: "https://github.com/dinakajoy/save-the-princess-game",
  },
  {
    title: "Mini Marvel",
    description:
      "A web application that allows users to explore Marvel characters, comics, and stories using the Marvel API.",
    challenges: [
      "Fetching and displaying large amounts of Marvel character data",
      "Designing an engaging and interactive UI for an immersive experience",
      "Optimizing API calls to prevent rate-limiting issues",
    ],
    solutions: [
      "Integrated the Marvel API to retrieve real-time character and comic data",
      "Designed a visually appealing and responsive UI with React and TailwindCSS",
      "Implemented efficient caching and lazy loading for better performance",
    ],
    techStack: ["React", "CSS", "Marvel API"],
    link: "https://github.com/dinakajoy/mini-marvel",
  },
];
