import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaChalkboard,
  FaDirections,
  FaMicroblog,
  FaUserNinja,
} from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-gray-700 dark:bg-gray-900 dark:text-slate-50">
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
        className="flex space-x-4 row-start-3 gap-6 flex-wrap items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          href="/profile"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xl transition text-gray-800 bg-gray-200 hover:bg-gray-300 dark:text-gray-700 dark:bg-gray-200 dark:hover:bg-gray-300"
        >
          <FaUserNinja />
          Profile
        </Link>
        <Link
          href="/blog"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xl transition text-gray-800 bg-gray-200 hover:bg-gray-300 dark:text-gray-700 dark:bg-gray-200 dark:hover:bg-gray-300"
        >
          <FaMicroblog />
          Blog
        </Link>
        <Link
          href="/guides"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xl transition text-gray-800 bg-gray-200 hover:bg-gray-300 dark:text-gray-700 dark:bg-gray-200 dark:hover:bg-gray-300"
        >
          <FaDirections />
          Guides
        </Link>
        <Link
          href="/techtomes"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xl transition text-gray-800 bg-gray-200 hover:bg-gray-300 dark:text-gray-700 dark:bg-gray-200 dark:hover:bg-gray-300"
        >
          <FaChalkboard />
          Tech Tomes
        </Link>
      </motion.div>
    </div>
  );
}
