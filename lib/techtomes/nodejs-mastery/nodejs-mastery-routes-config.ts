import { EachRoute, Page } from "@/interfaces/routes.interface";

// for page navigation & to sort on leftbar

export const NODEJS_ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction to Node.js", href: "/introduction-to-nodejs" },
      { title: "More on Node.js Ecosystem", href: "/nodejs-ecosystem" },
    ],
    // noLink: false,
    // items: [
    //   { title: "What is Node.js?", href: "/what-is-nodejs" },
    //   { title: "History and Evolution of Node.js", href: "/history-of-nodejs" },
    //   {
    //     title: "Why Use Node.js?",
    //     href: "/why-nodejs",
    //     items: [
    //       { title: "Benefits of Node.js", href: "/benefits-of-nodejs" },
    //       { title: "Use Cases & Industry Adoption", href: "/use-of-nodejs" },
    //     ],
    //   },
    //   {
    //     title: "Understanding the Node.js Ecosystem",
    //     href: "/understanding-nodejs",
    //     items: [
    //       { title: "Package Managers", href: "/package-managers" },
    //       { title: "The Role of V8 JavaScript Engine", href: "/role-of-v8-engine" },
    //       { title: "CommonJS vs ECMAScript Modules", href: "/commonjs-vs-esmodules" },
    //     ],
    //   },
    // ],
  },
  // {
  //   title: "Setting Up Node.js",
  //   href: "/server-actions",
  //   noLink: true,
  //   items: [
  //     { title: "getSession", href: "/getSession" },
  //     { title: "getToken", href: "/getToken" },
  //   ],
  // },
];

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = NODEJS_ROUTES.map((it) =>
  getRecurrsiveAllLinks(it)
).flat();
