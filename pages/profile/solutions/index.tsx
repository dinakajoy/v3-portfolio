import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import SolutionCard from "@/components/solution-card";
import { solutions } from "@/contents/solutions";

export default function SolutionsPage() {
  return (
    <Layout>
      <div className="text-gray-700 dark:text-white p-6 flex flex-col items-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Solutions
        </motion.h1>

        <motion.p
          className="text-lg text-gray-500 dark:text-gray-300 max-w-3xl text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Browse a selection of projects that solve real-world challenges using
          modern technologies. Each solution is designed to address specific
          problems with practical, scalable approaches.
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
            href="/profile/talks"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-lg font-semibold"
          >
            Talks
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index }}
            >
              <SolutionCard key={solution.id} project={solution} />
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
