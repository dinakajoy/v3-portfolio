import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import TalkCard from "@/components/talk-card";
import { talks } from "@/contents/talks";

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

        <motion.p
          className="text-lg text-gray-500 dark:text-gray-300 max-w-3xl text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Recordings, slides, and keynotes from past presentations.
        </motion.p>

        <div className="text-white my-12 flex space-x-4">
          <Link
            href="/"
            className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-lg text-lg font-semibold"
          >
            Home
          </Link>
          <Link
            href="/profile"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-lg font-semibold"
          >
            Profile
          </Link>
          <Link
            href="/profile/projects"
            className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-lg font-semibold"
          >
            Projects
          </Link>
          <Link
            href="/profile/solutions"
            className="px-4 py-2 bg-pink-600 hover:bg-pink-500 rounded-lg text-lg font-semibold"
          >
            Solutions
          </Link>
        </div>

        <div className="w-full space-y-6">
          {talks.map((talk, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index }}
            >
              <TalkCard talk={talk} key={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
