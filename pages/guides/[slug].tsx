import { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
// import { useRouter } from "next/router";
// import Link from "next/link";
import { GuideProps, Heading } from "@/intefaces";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import { getGuide, getAllGuides } from "@/utils/contentLoader";

export default function GuidePage({ metadata, content }: GuideProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const headingElements: NodeListOf<HTMLHeadingElement> =
      document.querySelectorAll("h2, h3");

    const extractedHeadings: Heading[] = Array.from(headingElements).map(
      (h: HTMLHeadingElement) => ({
        id: h.id,
        text: h.innerText,
        level: h.tagName.toLowerCase(), // Optional: Normalize to lowercase
      })
    );

    setHeadings(extractedHeadings);
  }, []);

  return (
    <div className="flex max-w-6xl mx-auto">
      {/* Main Guide Content */}
      <motion.div
        className="w-3/4 p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
        <p className="text-gray-400 mb-6">{metadata.description}</p>
        <Markdown>{content}</Markdown>
        {/* <Markdown className="prose prose-invert">{content}</Markdown> */}
      </motion.div>

      {/* Right Navigation (Table of Contents) */}
      <aside className="w-1/4 sticky top-20 p-4 bg-gray-800 rounded-lg h-screen overflow-auto">
        <h2 className="text-lg font-semibold mb-3">On This Page</h2>
        <ul>
          {headings.map((heading) => (
            <li key={heading.id} className="mb-2">
              <a
                href={`#${heading.id}`}
                className="text-gray-300 hover:text-white"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const guides = getAllGuides();
  const paths = guides.map((guide) => ({ params: { slug: guide.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  GuideProps,
  { slug: string }
> = async (context: GetStaticPropsContext<{ slug: string }>) => {
  const { params } = context;

  if (!params?.slug) {
    return { notFound: true } as const;
  }

  const guide = getGuide(params.slug);

  if (!guide) {
    return { notFound: true } as const;
  }

  return {
    props: {
      metadata: guide.metadata,
      content: guide.content,
    },
  };
};
