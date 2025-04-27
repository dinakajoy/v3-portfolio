import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ISolution } from "@/interfaces/types";
import { solutions } from "@/contents/solutions";

interface ProjectPageProps {
  project: ISolution;
}

export default function ProjectDetailPage({ project }: ProjectPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <div className="text-gray-700 dark:text-white p-6 flex flex-col items-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {project.shortTitle}
        </motion.h1>

        <div className="block md:flex flex-col gap-6">
          <div className="mb-12">
            <Link
              href="/profile/solutions"
              className="text-blue-600 hover:underline"
            >
              ← Back to solutions
            </Link>
          </div>

          <motion.h2
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {project.title}
          </motion.h2>

          <section className="mb-4">
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
              {project.description}
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
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
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Key Features</h2>
            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
              {project.features.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold mb-2">
              Why {project.shortTitle}
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
              {project.reasons.map((reason, idx) => (
                <li key={idx}>{reason}</li>
              ))}
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold mb-2">
              How It Solves Real Problems
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
              {project.solution.map((solution, idx) => (
                <li key={idx}>{solution}</li>
              ))}
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Screenshots</h2>
            ...
          </section>

          <section className="flex flex-wrap gap-4 mt-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              View Code
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                View Project
              </a>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
}

// Fetch all possible paths
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = solutions.map((solution) => ({
    params: { id: solution.id.toString() },
  }));

  return {
    paths,
    fallback: true, // or false if you want strict paths only
  };
};

// Fetch data for a single project
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const project = solutions.find((solution) => solution.id.toString() === id);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
    revalidate: 60,
  };
};
