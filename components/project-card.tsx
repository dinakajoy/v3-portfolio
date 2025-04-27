import { IProject } from "@/interfaces/types";

interface ProjectCardProps {
  selectedProject: IProject;
}

export default function ProjectCard({ selectedProject }: ProjectCardProps) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-4">
        {selectedProject.description}
      </p>

      <h3 className="text-lg font-semibold mt-4">Features</h3>
      <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
        {selectedProject.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mt-4">
        Why Build {selectedProject.title}
      </h3>
      <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
        {selectedProject.reasons.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mt-4">Tech Stack</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {selectedProject.techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-[#0ea5e9] text-white px-3 py-1 rounded-lg text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-between gap-2 mt-2">
        <a
          href={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          View Code
        </a>
        {selectedProject.liveLink && (
          <a
            href={selectedProject.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            View Project
          </a>
        )}
      </div>
    </>
  );
}
