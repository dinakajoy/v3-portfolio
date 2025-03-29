import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { talks } from "@/data/talsk";

export default function TalksPage() {
  return (
    <Layout>
      <div className="text-gray-700 dark:text-white p-6 flex flex-col items-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Talks & Presentations
        </motion.h1>
        <p className="text-lg text-gray-500 dark:text-gray-300 mb-6 text-center max-w-3xl">
          Recordings, slides, and keynotes from past presentations.
        </p>

        <div className="text-white my-12 flex space-x-4">
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-lg font-semibold"
          >
            Home
          </Link>
          <Link
            href="/profile"
            className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-lg font-semibold"
          >
            Profile
          </Link>
          <Link
            href="/profile/projects"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-lg font-semibold"
          >
            Projects
          </Link>
        </div>

        <div className="w-full space-y-6">
          {talks.map((talk, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-1">{talk.title}</h2>
              <p className="text-gray-400 text-sm">
                {talk.event} - {talk.date}
              </p>
              <p className="text-gray-500 dark:text-gray-300 mt-2">
                {talk.description}
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href={talk.slides}
                  className="underline hover:underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Slides
                </a>
                <a
                  href={talk.recording}
                  className="underline hover:underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recording
                </a>
                <a
                  href={talk.keynote}
                  className="underline hover:underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Keynote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
