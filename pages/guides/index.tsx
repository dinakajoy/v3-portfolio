import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { getAllGuides } from "@/lib/guides-loader";
import { formatDate } from "@/lib/utils";
import { IGuide } from "@/interfaces/guides.interfaces";

const ITEMS_PER_PAGE = 5;

export default function GuidesPage({ guides }: { guides: IGuide[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(guides.length / ITEMS_PER_PAGE);

  const paginatedGuides = guides.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Layout>
      <div className="text-gray-700 dark:text-white p-6 flex flex-col items-center">
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Guides
        </motion.h1>

        {paginatedGuides?.length ? (
          <motion.div
            className="grid gap-4 md:grid-cols-2 md:gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {guides.map((guide, index: number) => (
              <motion.article
                key={index}
                className="group relative rounded-lg border border-gray-600 p-6 shadow-md transition-shadow hover:shadow-lg"
                whileHover={{ scale: 1.03 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-gray-500 dark:text-gray-200">
                      {guide.metadata.title}
                    </h2>
                    {guide.metadata.description && (
                      <p className="text-gray-500 dark:text-gray-400">
                        {guide.metadata.description}
                      </p>
                    )}
                  </div>
                  {guide.metadata.date && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(guide.metadata.date)}
                    </p>
                  )}
                </div>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="absolute inset-0"
                >
                  <span className="sr-only">View</span>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No guides published.
          </motion.p>
        )}

        <div className="flex justify-end items-center mt-6 gap-x-4">
          <motion.button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Previous
          </motion.button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <motion.button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Next
          </motion.button>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: { guides: getAllGuides() } };
}
