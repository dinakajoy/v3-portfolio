import { ISolution } from "@/interfaces/types";
import Link from "next/link";

interface SolutionardProps {
  project: ISolution;
}

export default function SolutionCard({ project }: SolutionardProps) {
  return (
    <Link
      href={`/profile/solutions/${project.id}`}
      className="group border rounded-2xl p-6 hover:shadow-lg transition"
    >
      <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600">
        {project.title}
      </h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
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
  );
}
