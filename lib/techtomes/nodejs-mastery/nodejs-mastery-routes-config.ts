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
  },
  {
    title: "Node.js Fundamentals",
    href: "/nodejs-fundamentals",
    noLink: true,
    items: [
      { title: "JavaScript vs Node.js", href: "/javascript-vs-nodejs" },
      { title: "Backend versus Frontend Development", href: "/backend-vs-frontend-development" },
    ],
  },
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
