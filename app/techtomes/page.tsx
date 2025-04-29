"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { techTomes } from "@/contents/techtomes";

export default function TechTomesLanding() {
  return (
    <Layout>
      <div className="text-gray-700 dark:text-white p-6 flex flex-col items-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TechTomes
        </motion.h1>
        <motion.p
          className="text-lg text-gray-500 dark:text-gray-300 max-w-3xl text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Your ultimate resource for mastering technology. Explore our curated
          knowledge bases on web development, AI, and more.
        </motion.p>
        <div className="w-full grid md:grid-cols-3 gap-6 my-8">
          {techTomes.map((tome, index) => (
            <motion.div
              key={tome.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-md">
                <CardContent className="h-full flex flex-col justify-between">
                  <h2 className="text-xl font-semibold mb-2">{tome.title}</h2>
                  <p className="text-gray-400 mb-4">{tome.description}</p>
                  <Link href={tome.link}>
                    <Button className="bg-[#0ea5e9] hover:bg-[#0ea4e9bd]">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
