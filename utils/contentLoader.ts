import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GuideProps } from "@/intefaces";

const guidesDirectory = path.join(process.cwd(), "data/guides");

// Get all guides with metadata
export function getAllGuides() {
  const files = fs.readdirSync(guidesDirectory);

  return files.map((filename) => {
    const filePath = path.join(guidesDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      metadata: data,
    };
  });
}

// Get single guide content
export function getGuide(slug: string): GuideProps | null {
  const filePath = path.join(guidesDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return { metadata: data, content };
}
