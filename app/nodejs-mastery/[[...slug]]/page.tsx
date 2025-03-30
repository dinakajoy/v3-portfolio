import Toc from "@/components/toc";
import { notFound } from "next/navigation";
import { getDocsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";
import { nodejs_page_routes } from "@/techtomes/config/nodejs-routes-config";

type PageProps = {
  params: { slug: string[] };
};

const dir = "nodejs-mastery";

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getDocsForSlug(dir, pathName);

  if (!res) notFound();
  return (
    <div className="flex items-start gap-14">
      <div className="flex-[3] py-10">
        <Typography>
          <h1 className="text-3xl -mt-2">{res.frontmatter.title}</h1>
          <p className="-mt-4 text-muted-foreground text-[16.5px]">
            {res.frontmatter.description}
          </p>
          <div>{res.content}</div>
        </Typography>
      </div>
      <Toc path={pathName} dir={dir} />
    </div>
  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getDocsForSlug(dir, pathName);
  if (!res) return null;
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return nodejs_page_routes.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}
