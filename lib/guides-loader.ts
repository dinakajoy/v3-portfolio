import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { postProcess, preProcess, rehypeCodeTitlesWithLogo, sluggify } from "./markdown";

const guidesDirectory = path.join(process.cwd(), "contents/guides");

export async function getGuidesTocs(slug: string) {
  const contentPath = path.join(guidesDirectory, `${slug}.mdx`);
  const rawMdx = await fs.promises.readFile(contentPath, "utf-8");
  const headingsRegex = /^(#{2,4})\s(.+)$/gm;
  let match;
  const extractedHeadings = [];
  while ((match = headingsRegex.exec(rawMdx)) !== null) {
    const headingLevel = match[1].length;
    const headingText = match[2].trim();
    const slug = sluggify(headingText);
    extractedHeadings.push({
      level: headingLevel,
      text: headingText,
      href: `#${slug}`,
    });
  }
  return extractedHeadings;
}

export function getAllGuides() {
  const files = fs.readdirSync(guidesDirectory);

  return files.map((filename) => {
    const filePath = path.join(guidesDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      metadata: data,
    };
  });
}

export async function getGuide(slug: string) {
  const filePath = path.join(guidesDirectory, `${slug}.mdx`);
  const fileContent = await fs.promises.readFile(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        preProcess,
        rehypeCodeTitles,
        rehypeCodeTitlesWithLogo,
        rehypePrism,
        rehypeSlug,
        rehypeAutolinkHeadings,
        postProcess,
      ],
      remarkPlugins: [remarkGfm],
    },
    parseFrontmatter: true,
  });

  return { content: mdxSource, metadata: data };
}
