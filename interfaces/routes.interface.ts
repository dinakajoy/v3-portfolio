export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
  tag?: string;
};

export type Page = { title: string; href: string };
