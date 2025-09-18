import Layout from "@/components/layout";
import ProjectCard from "@/components/project-card";
import { featuredProjects, mentions } from "@/contents/projects";
import { IProjectDetails } from "@/interfaces/types";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <Layout>
      <section
        id="projects"
        className="min-h-screen px-6 py-16"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            My Works
          </motion.h2>

          {/* Featured Projects */}
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="p-6 rounded-2xl shadow-md bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* Explorations */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-12 mb-4 text-center"
          >
            Explorations & Experiments
          </motion.h3>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 mb-12">
            {mentions.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="p-6 rounded-2xl shadow-md bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:underline"
                >
                  <FaGithub /> View Code
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
