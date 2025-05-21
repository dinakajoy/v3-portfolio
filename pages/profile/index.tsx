import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout";

export default function LandingPage() {
  return (
    <Layout>
      <div className="text-gray-700 dark:text-white p-6 flex flex-col  items-center text-justify">
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
          I build intelligent web experiences with Artificial Intelligence (AI)
          and scalable software solutions.
        </motion.p>

        <div className="w-[90%] md:w-full text-white my-12 flex justify-center items-center space-x-1 md:space-x-4">
          <Link
            href="/profile/projects"
            className="px-2 py-1 md:px-4 md:py-2 bg-green-600 hover:bg-green-500 rounded-lg md:text-lg md:font-semibold"
          >
            Projects
          </Link>
          <Link
            href="/profile/solutions"
            className="px-2 py-1 md:px-4 md:py-2 bg-pink-600 hover:bg-pink-500 rounded-lg md:text-lg md:font-semibold"
          >
            Solutions
          </Link>
          <Link
            href="/profile/talks"
            className="px-2 py-1 md:px-4 md:py-2 bg-purple-600 hover:bg-purple-500 rounded-lg md:text-lg md:font-semibold"
          >
            Talks
          </Link>
        </div>

        <div className="w-full space-y-6">
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-300 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Odinaka Joy is a Software Engineer specializing in Web Development
            and AI integration. Her work revolves around building intelligent
            web experiences with Artificial Intelligence (AI) and scalable
            software solutions, contributing to open-source projects, and
            mentoring junior developers.
          </motion.p>
        </div>
      </div>
    </Layout>
  );
}
