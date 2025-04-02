import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { renderToStaticMarkup } from "react-dom/server";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import Layout from "@/components/layout";
import { getAllGuides, getGuide, getGuidesTocs } from "@/lib/guides-loader";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { Typography } from "@/components/typography";
import { components } from "@/lib/markdown";
import { ScrollArea } from "@/components/ui/scroll-area";
import TocObserver from "@/components/guide-toc-observer";

interface GuidePageProps {
  data: {
    content: any;
    metadata: {
      title: string;
    };
  };
  tocs: any;
}

export default function GuidePage({ data, tocs }: GuidePageProps) {
  const { metadata, content } = data;

  return (
    <Layout>
      <div className="w-full text-gray-700 dark:text-white p-6 flex flex-col mt-[-30px]">
        <div className="flex items-start">
          <Link
            className={buttonVariants({
              variant: "link",
              className: "!mx-0 !px-0 !-ml-1 justify-start",
            })}
            href="/guides"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-1.5" /> Back to Guides
          </Link>
        </div>
        <div className="flex items-start gap-10">
          {/* Main Content */}
          <div className="w-3/4">
            <div className="prose dark:prose-invert">
              <h1 className="text-3xl font-bold mb-6">{metadata.title}</h1>
              <Typography>
                <MDXRemote {...content} components={components} />
              </Typography>
            </div>
          </div>

          {/* Table of Contents */}
          <aside className="w-1/4 xl:flex toc hidden py-9 sticky top-0 h-[96.95vh] pl-6">
            <div className="flex flex-col gap-3 w-full pl-2">
              <h3 className="font-medium text-sm">On this page</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <ScrollArea className="pb-2 pt-0.5 overflow-y-auto">
                  <TocObserver data={tocs} />
                </ScrollArea>
              </ul>
            </div>
          </aside>
        </div>
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
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  if (!slug) return { notFound: true };

  const data = await getGuide(slug);
  const tocs = await getGuidesTocs(slug);
  return { props: { data, tocs } };
};
