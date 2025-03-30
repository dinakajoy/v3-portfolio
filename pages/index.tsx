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
      <motion.h2
        className="text-2xl text-gray-900 dark:text-gray-400 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Software Engineer | AI & Backend Developer
      </motion.h2>
      <motion.p
        className="text-lg text-gray-900 dark:text-gray-400 text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Building intelligent web experiences with AI & scalable software
        solutions.
      </motion.p>

      <motion.div
        className="flex space-x-4 row-start-3 gap-6 flex-wrap items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          href="/profile"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xl transition font-semibold text-gray-100 bg-[#0ea5e9] hover:bg-gray-600"
        >
          <FaUserNinja />
          Profile
        </Link>
        <Link
          href="/blog"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xl transition font-semibold text-gray-100 bg-[#0ea5e9] hover:bg-gray-600"
        >
          <FaMicroblog />
          Blog
        </Link>
        <Link
          href="/guides"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xl transition font-semibold text-gray-100 bg-[#0ea5e9] hover:bg-gray-600"
        >
          <FaDirections />
          Guides
        </Link>
        <Link
          href="/techtomes"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xl transition font-semibold text-gray-100 bg-[#0ea5e9] hover:bg-gray-600"
        >
          <FaChalkboard />
          Tech Tomes
        </Link>
      </motion.div>
    </div>
  );
}
