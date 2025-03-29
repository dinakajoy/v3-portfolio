import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
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
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-lg font-semibold"
          >
            Home
          </Link>
          <Link
            href="/profile"
            className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-lg font-semibold"
          >
            Profile
          </Link>
          <Link
            href="/profile/talks"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-lg font-semibold"
          >
            Talks
          </Link>
        </div>

        <div className="flex gap-6">
          {/* Project List */}
          <div className="w-1/3 bg-white dark:bg-gray-800 p-4 rounded-lg overflow-y-auto">
            <h2 className="text-xl font-semibold mb-3">Project List</h2>
            <ul>
              {projects.map((project, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 rounded ${
                    selectedProject.title === project.title
                      ? "bg-blue-500 text-white"
                      : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Project Details */}
          <div className="w-2/3 bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {selectedProject.description}
            </p>

            <h3 className="text-lg font-semibold mt-4">Challenges</h3>
            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
              {selectedProject.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mt-4">Solutions</h3>
            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
              {selectedProject.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mt-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedProject.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
