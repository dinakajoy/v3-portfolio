import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { projects } from "@/contents/projects";
import ProjectCard from "@/components/project-card";
import { IProject } from "@/interfaces/types";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<IProject>(projects[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <div className="text-gray-700 dark:text-white p-6 flex flex-col items-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h1>
        <motion.p
          className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Detailed case studies of projects explaining features, reason for building the project, and tech stacks.
        </motion.p>

        <div className="w-[90%] md:w-full text-white my-12 flex justify-center items-center space-x-1 md:space-x-4">
          <Link
            href="/profile"
            className="px-2 py-1 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-500 rounded-lg md:text-lg md:font-semibold"
          >
            Profile
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

        <div className="w-full block md:flex gap-6">
          {/* Project List */}
          <motion.div
            className="w-full mb-8 md:mb-0 md:w-1/3 bg-white dark:bg-gray-800 p-4 rounded-lg overflow-y-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl font-semibold mb-3">Project List</h2>
            <ul>
              {projects.map((project, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 rounded ${
                    selectedProject.title === project.title
                      ? "bg-[#0ea5e9] text-white"
                      : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => {
                    setSelectedProject(project);
                    if (window.innerWidth <= 768) {
                      setIsModalOpen(true);
                    }
                  }}
                >
                  {project.title}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Project Details */}
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg max-w-md w-full max-h-full overflow-y-auto relative">
                <button
                  className="absolute top-2 right-2 font-bold text-gray-500 dark:text-gray-200"
                  onClick={() => setIsModalOpen(false)}
                >
                  ✕
                </button>
                <ProjectCard selectedProject={selectedProject} />
                <button
                  className="text-white bg-red-500 py-2 px-5 rounded-lg mt-4 font-bold hover:bg-red-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
          <motion.div
            className="hidden md:block w-full md:w-2/3 bg-white dark:bg-gray-900 p-6 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <ProjectCard selectedProject={selectedProject} />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
