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
        <p className="text-lg text-gray-500 dark:text-gray-300 mb-6 text-center max-w-3xl">
          Detailed case studies of projects showcasing challenges, solutions,
          and tech stacks.
        </p>

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
            href="/profile/solutions"
            className="px-4 py-2 bg-pink-600 hover:bg-pink-500 rounded-lg text-lg font-semibold"
          >
            Solutions
          </Link>
          <Link
            href="/profile/talks"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-lg font-semibold"
          >
            Talks
          </Link>
        </div>

        <div className="w-full block md:flex gap-6">
          {/* Project List */}
          <div className="w-full mb-8 md:mb-0 md:w-1/3 bg-white dark:bg-gray-800 p-4 rounded-lg overflow-y-auto">
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
          </div>

          {/* Project Details */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
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
            </div>
          )}
          <div className="hidden md:block w-full md:w-2/3 bg-white dark:bg-gray-800 p-6 rounded-lg">
            <ProjectCard selectedProject={selectedProject} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
