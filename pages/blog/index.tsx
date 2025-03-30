import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { articles } from "@/data/posts";

export default function BlogPage() {
  const [showArticles, setShowArticles] = useState(10);
  const [selectedTag, setSelectedTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const uniqueTags = useMemo(() => {
    return ["All", ...new Set(articles.flatMap((article) => article.tags))];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter(
      (article) =>
        (selectedTag === "All" || article.tags.includes(selectedTag)) &&
        (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [selectedTag, searchQuery, articles]);

  const visibleArticles = useMemo(() => {
    return filteredArticles ? filteredArticles.slice(0, showArticles) : [];
  }, [filteredArticles, showArticles]);

  const [isFirstEffectDone, setIsFirstEffectDone] = useState(false);

  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target || showArticles >= filteredArticles.length) {
      setIsFirstEffectDone(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowArticles((prev) => prev + 5);
        }
      },
      { rootMargin: "100px 0px", threshold: 1 }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
      setIsFirstEffectDone(true);
    };
  }, [showArticles, visibleArticles]);

  useEffect(() => {
    if (!isFirstEffectDone) return;
    setSelectedTag("All");
  }, [isFirstEffectDone]);

  return (
    <Layout>
      <div className="text-gray-700 dark:text-white p-6 flex flex-col items-center">
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
                      ? "bg-[#0ea5e9] text-white"
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

            {visibleArticles.map((article, index) => (
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
                  className="text-gray-900 hover:text-[#0ea5e9] dark:text-gray-100 hover:dark:text-[#0ea5e9] text-2xl font-bold leading-8 tracking-tight my-4"
                >
                  {article.title}
                </a>
                <div className="flex flex-wrap">
                  {article.tags.length > 0 &&
                    article.tags.map((tag, index) => (
                      <a
                        key={index}
                        className="mr-3 mt-1 text-sm font-semibold uppercase text-[#0ea5e9] hover:text-zinc-900 hover:underline underline-offset-4 hover:decoration-wavy dark:hover:text-gray-400"
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
      </div>

      <div ref={loadMoreRef} />
    </Layout>
  );
}
