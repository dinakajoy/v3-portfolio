import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { IProjectDetails } from "@/interfaces/types";

interface ProjectCardProps {
  project: IProjectDetails;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, description, tech, link, liveLink, demo } = project;

  return (
    <div className="rounded-2xl shadow-md p-6 bg-white dark:bg-gray-800 flex flex-col">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-6 mt-4">
        <a
          href={link}
          target="_blank"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          <FaGithub size={20} />
        </a>
        <a
          href={liveLink}
          target="_blank"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          <FaExternalLinkAlt size={20} />
        </a>
        {demo && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-3 py-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            <FaPlay /> Watch Demo
          </button>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-4 w-[90%] md:w-[60%] lg:w-[50%] shadow-xl relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500"
              >
                ✕
              </button>
              <div className="aspect-video">
                {/* {demo.endsWith(".mp4") ? (
                  <video controls className="w-full h-full rounded-lg">
                    <source src={demo} type="video/mp4" />
                  </video>
                ) : (
                  <iframe
                    src={demo}
                    className="w-full h-full rounded-lg"
                    allow="autoplay; fullscreen"
                  />
                )} */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
