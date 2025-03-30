import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { talks } from "@/data/talks";
import TalkCard from "@/components/talk-card";

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
            <TalkCard talk={talk} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
