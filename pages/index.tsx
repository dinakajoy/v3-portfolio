import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-700 dark:text-white p-6">
      <motion.h1
        className="text-5xl font-bold text-center mb-4 text-gray-700 dark:text-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Odinaka Joy
      </motion.h1>
      <motion.p
        className="text-lg text-gray-900 dark:text-gray-400 text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Senior Software Engineer | AI & Web Developer | Mentor
      </motion.p>

      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          href="/profile"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-lg font-semibold"
        >
          Profile
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg text-lg font-semibold"
        >
          Blog
        </Link>
        <Link
          href="/guides"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg text-lg font-semibold"
        >
          Guides
        </Link>
        <Link
          href="/tech-tomes"
          className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-lg text-lg font-semibold"
        >
          Tech Tomes
        </Link>
      </motion.div>
    </div>
  );
}
