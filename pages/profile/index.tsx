import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout";

export default function ProfilePage() {
  return (
    <Layout>
      <div className="text-gray-700 dark:text-white p-6 flex flex-col items-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-lg text-gray-500 dark:text-gray-300 max-w-3xl text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I&apos;m Odinaka Joy, a Software Engineer specializing in Web
          Development and AI integration. With over 5 years of experience
          building scalable applications, contributing to open-source projects,
          and mentoring developers. My expertise includes TypeScript, React,
          Express.js, AI-powered systems, and system design.
        </motion.p>

        <div className="text-white my-12 flex space-x-4">
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-lg font-semibold"
          >
            Home
          </Link>
          <Link
            href="/profile/projects"
            className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-lg font-semibold"
          >
            Projects
          </Link>
          <Link
            href="/profile/talks"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-lg font-semibold"
          >
            Talks
          </Link>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-8 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>
                JavaScript (TypeScript, React, Next.js, Node.js, Express.js)
              </li>
              <li>OCaml (Js_of_OCaml, Brr, Elm, Dream)</li>
              <li>Database Management (MongoDB, PostgreSQL, Firebase)</li>
              <li>AI & LLM Integration</li>
              <li>Docker, Cloud Services (AWS, GCP)</li>
              <li>System Design, Performance Optimization</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-8 rounded-lgg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl font-semibold mb-2">Work History</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>Web Developer – AcceleratorApp (2022 - 2024)</li>
              <li>Software Engineer – Tarides (2022)</li>
              <li>Outreachy Intern – OCaml (2021)</li>
              <li>Software Engineer – Loctech Nigeria Limited (2020)</li>
              <li>Web Engineer II – Codelab Projects (2019)</li>
            </ul>
          </motion.div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <motion.div
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-8 rounded-lgg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-xl font-semibold mb-2">
              Open Source Contributions
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>Contributor & Mentor – Outreachy (2022, 2024)</li>
              <li>GraphQL API Development – OCaml (opam packages)</li>
              <li>Irmin in the browser – OCaml</li>
              <li>Developer Tools & AI Projects</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-8 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-xl font-semibold mb-2">
              Talks & Presentations
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Spoken at various events on Web Development & AI.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>Advancing Your Business & Career Using ICT (2022)</li>
              <li>
                Boosting Your Business Using Social Media & ICT In Nigeria(2022)
              </li>
              <li>Introduction To Web Development (2020)</li>
              <li>
                The Road Map To Becoming A Full Stack Web Developer (2020)
              </li>
            </ul>
            <Link
              href="/profile/talks"
              className="text-blue-500 hover:underline"
            >
              View my talks
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
