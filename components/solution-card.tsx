import { ISolution } from "@/interfaces/types";
import Link from "next/link";

interface SolutionardProps {
  project: ISolution;
}

export default function SolutionCard({ project }: SolutionardProps) {
  return (
    <div className="group border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 px-6 py-4 flex flex-col">
      <Link
        href={`/profile/solutions/${project.id}`}
        className="flex flex-col h-full"
      >
        <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600">
          {project.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}
