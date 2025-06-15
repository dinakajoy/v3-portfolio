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
          className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I build intelligent, AI-powered web applications and scalable backend systems
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
            I'm Odinaka Joy, a Software Engineer specializing in backend development and AI-powered web solutions. I love building intelligent, scalable systems that solve real-world problems and enhance user experiences.
          </motion.p>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-300 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            From developing an ERP system for a local tech firm, to contributing to the OCaml ecosystem through Outreachy and Tarides, and most recently building a startup incubation platform at AcceleratorApp, I have consistently delivered scalable, user-focused solutions. My passion lies in merging backend engineering with modern AI capabilities to build intelligent systems, like my emotional AI companion, Soul Sync, and my Job Application Assistant that helps users tailor better applications using LLMs.
          </motion.p>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-300 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I primarily work with JavaScript/TypeScript, leveraging frameworks like Node.js, Express.js, React.js, and Next.js to build robust web applications. Recently, I am expanding into Python for AI integration. I also explore OCaml for functional web development, which provides a unique perspective on building reliable and maintainable systems.
          </motion.p>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-300 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Beyond code, I enjoy mentoring upcoming developers through programs like Outreachy, She Code Africa, and Google Africa Developers Scholarship and contributing to open-source. I have spoken at multiple events on the future of web (and AI recently), and I continuously learn to stay at the forefront of web and AI innovation.
          </motion.p>
        </div>
      </div>
    </Layout>
  );
}
