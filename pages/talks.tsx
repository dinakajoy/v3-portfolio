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
          Recordings, slides, and keynotes from past presentations. Also open to more speaking engagements -{" "}
          <Link
            href="mailto:dinakajoy@gmail.com"
            className="text-yellow-600 dark:text-yellow-400 underline"
          >
            get in touch!
          </Link>
        </motion.p>

        <div className="w-full space-y-6">
          {talks.map((talk, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 + index }}
            >
              <TalkCard talk={talk} key={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
