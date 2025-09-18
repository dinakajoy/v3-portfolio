import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          {/* Greeting and Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Hi, I’m{" "}
            <span className="text-yellow-600 dark:text-yellow-400">
              Odinaka Joy
            </span>
          </motion.h1>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6"
          >
            Backend developer passionate about{" "}
            <span className="font-semibold">AI</span>,{" "}
            <span className="font-semibold">developer tools</span>, and{" "}
            <span className="font-semibold">open source</span>. Experienced with{" "}
            <span className="font-semibold">Node.js</span>,{" "}
            <span className="font-semibold">OCaml</span>, and{" "}
            <span className="font-semibold">AI-powered web applications</span>.
          </motion.p>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <a
              href="https://github.com/dinakajoy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/dinakajoy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/dinakajoy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 text-2xl"
            >
              <FaTwitter />
            </a>
          </motion.div>

          {/* Intro Video */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="aspect-video max-w-2xl mx-auto shadow-lg rounded-xl overflow-hidden"
          >
            <iframe
              src="https://youtu.be/_diInGGSMDg"
              title="Intro video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}
