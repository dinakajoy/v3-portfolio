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
            transition={{ delay: 0.2 }}
          >
            Odinaka Joy is a passionate Web Developer with over 5 years of
            experience building intuitive, scalable, and user-focused
            applications. She specializes in JavaScript, working primarily with
            React.js and Node.js, and is currently exploring how to combine
            web development with Artificial Intelligence to build smarter
            solutions.
          </motion.p>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-300 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            She is driven by a strong passion for using technology to improve
            lives, especially in health and education. Whether she’s building
            learning platforms, contributing to developer tools, or creating
            AI-powered assistants that support mental well-being, Odinaka
            believes tech should empower people, not just solve problems. One of
            her key goals is to use AI to build applications that make access to
            helpful resources more inclusive and humane.
          </motion.p>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-300 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Over the years, Odinaka has worked with startups, open-source
            organizations, and international teams — building platforms that
            range from ERP systems to developer tools. She is more than just a
            builder: she is also a mentor, speaker, and advocate for inclusive
            tech communities. She has mentored through Google Developers' Group, Outreachy and She Code Africa, and has contributed talks and insights at several events.
          </motion.p>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-300 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Currently, she is diving deep into AI, exploring how web interfaces
            and intelligent assistants can work together to create smarter, more
            helpful applications. Whether it’s an AI-powered chatbot, a job
            application assistant, or an educational tool, Odinaka enjoys
            turning complex ideas into simple, impactful solutions.
          </motion.p>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-300 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            When she’s not coding, Odinaka is likely writing, parenting her
            energetic daughter, or thinking of new ways to help others grow in
            tech. She is always open to collaborations, mentorship
            opportunities, speaking engagements, or meaningful conversations
            about how technology can change lives for the better.
          </motion.p>
        </div>
      </div>
    </Layout>
  );
}
