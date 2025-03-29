import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { useState } from "react";
// import Link from "next/link";

const techTomes = [
  {
    title: "Deep Dive into Node.js Streams",
    summary: "Understand Node.js streams for handling large data efficiently.",
    tags: ["Node.js", "Streams", "Backend"],
    date: "March 25, 2025",
    slug: "nodejs-streams",
  },
  {
    title: "Building an AI Chatbot with Express.js",
    summary: "Learn how to integrate AI into your Express.js applications.",
    tags: ["AI", "Express.js", "Chatbot"],
    date: "March 20, 2025",
    slug: "ai-chatbot-express",
  },
  {
    title: "Dockerizing Your Full-Stack App",
    summary: "A step-by-step guide to containerizing your web applications.",
    tags: ["Docker", "DevOps", "Full-Stack"],
    date: "March 15, 2025",
    slug: "docker-fullstack",
  },
];

export default function TechTomesPage() {
  const [search, setSearch] = useState("");
  const filteredTomes = techTomes.filter(
    (tome) =>
      tome.title.toLowerCase().includes(search.toLowerCase()) ||
      tome.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="text-gray-700 dark:text-white p-6 flex flex-col items-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TechTomes
        </motion.h1>
        <p className="text-lg text-gray-500 dark:text-gray-300 mb-6 text-center max-w-3xl">
          Recordings, slides, and keynotes from past presentations.
        </p>

        <div className="w-full space-y-6">
          <input
            type="text"
            placeholder="Search TechTomes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            // className="w-full p-2 border rounded mb-4"
            className="w-full p-2 mb-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-white border border-gray-600 rounded-md"
          />
          <div className="grid gap-4">
            {filteredTomes.length > 0 ? (
              filteredTomes.map((tome, index) => (
                <div key={index} className="border p-4 rounded-lg shadow">
                  <h2 className="text-xl font-semibold">{tome.title}</h2>
                  <div className="mt-2 flex gap-2">
                    {tome.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-800 px-2 py-1 text-sm rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
