import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { GuideProps } from "@/intefaces";
import Link from "next/link";
import { getAllGuides, getGuide } from "@/utils/contentLoader";
import Layout from "@/components/layout";

interface GuidePageProps {
  guide: GuideProps;
}

export default function GuidePage({ guide }: GuidePageProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll("h2, h3");
      let current = null;
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 200) {
          current = heading.id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <div className="flex max-w-5xl mx-auto mt-10 space-x-8">
        {/* Main Content */}
        <div className="w-3/4">
          <h1 className="text-3xl font-bold mb-6">{guide.metadata.title}</h1>
          {/* <ReactMarkdown
            rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
            components={{
              h2: ({ node, ...props }) => (
                <h2 className="text-xl font-bold mt-6" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-lg font-semibold mt-4" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="mt-2 text-gray-500 dark:text-gray-400" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="mt-2 text-gray-500 dark:text-gray-400" {...props} />
              ),
            }}
          >
            {guide.content}
          </ReactMarkdown> */}
          <div className="prose dark:prose-invert">
            <ReactMarkdown rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}>
              {guide.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Table of Contents */}
        <aside className="w-1/4 border-l pl-4">
          <h2 className="text-lg font-semibold">On this page</h2>
          <ul className="mt-2 space-y-2 text-sm">
            {guide.content.match(/(##|###) (.+)/g)?.map((heading, index) => {
              const text = heading.replace(/(##|###) /, "");
              const id = text.toLowerCase().replace(/\s+/g, "-");
              return (
                <li key={index}>
                  <Link
                    href={`#${id}`}
                    className={`block ${
                      activeId === id
                        ? "text-blue-600 font-bold hover:text-blue-600"
                        : "text-gray-500 dark:text-gray-400 dark:hover:text-blue-600"
                    }`}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </Layout>
  );
}

// Get all guide slugs for static paths
export const getStaticPaths: GetStaticPaths = () => {
  const guides = getAllGuides();
  return {
    paths: guides.map((guide) => ({ params: { slug: guide.slug } })),
    fallback: false,
  };
};

// Fetch guide content at build time
export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params?.slug) return { notFound: true };
  const guide = getGuide(params.slug as string);
  return { props: { guide } };
};
