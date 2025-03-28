import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { articles } from "@/data/posts";

const uniqueTags = [
  "All",
  ...new Set(articles.flatMap((article) => article.tags)),
];

export default function BlogPage() {
  const [visibleArticles, setVisibleArticles] = useState(5);
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleArticles((prev) => prev + 3);
      }
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredArticles = articles.filter(
    (article) =>
      (selectedTag === "All" || article.tags.includes(selectedTag)) &&
      (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Layout>
      <div className="text-gray-700 dark:text-white py-6 flex flex-col items-center">
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Blog
        </motion.h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-6 text-center max-w-3xl">
          Articles on web development, AI, and system design. Posts are linked
          to Dev.to for a wider audience.
        </p>

        <div className="w-full flex gap-6">
          {/* Tags List */}
          <div className="w-1/3 bg-white dark:bg-gray-800 p-4 rounded-lg h-full">
            <h2 className="text-xl font-semibold mb-3">Tags</h2>
            <ul>
              {uniqueTags.map((tag, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 rounded ${
                    selectedTag === tag
                      ? "bg-blue-500 text-white"
                      : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Posts Section */}
          <div className="w-2/3">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full p-2 mb-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-white border border-gray-600 rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {filteredArticles
              .slice(0, visibleArticles)
              .map((article, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="mt-1 text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    {article.date}
                  </p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-gray-100 hover:dark:text-[#0ea5e9] text-2xl font-bold leading-8 tracking-tight my-4"
                  >
                    {article.title}
                  </a>
                  <div className="flex flex-wrap">
                    {article.tags.length > 0 &&
                      article.tags.map((tag, index) => (
                        <a
                          key={index}
                          className="mr-3 mt-1 text-sm font-semibold uppercase text-blue-600 dark:text-sky-500 hover:text-zinc-900 hover:underline underline-offset-4 hover:decoration-wavy dark:hover:text-gray-400"
                          href="/tags/svelte"
                        >
                          {tag}
                        </a>
                      ))}
                  </div>

                  <p className="prose max-w-none text-gray-500 dark:text-gray-400 mt-3">
                    {article.excerpt}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>

        <div ref={loadMoreRef} className="h-10"></div>
      </div>
    </Layout>
  );
}
