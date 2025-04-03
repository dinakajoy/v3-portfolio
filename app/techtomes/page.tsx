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
        <p className="text-lg text-gray-500 dark:text-gray-300 mb-6 text-center max-w-3xl">
          Your ultimate resource for mastering technology. Explore our curated
          knowledge bases on web development, AI, and more.
        </p>
        <div className="w-full grid md:grid-cols-3 gap-6 my-8">
          {techTomes.map((tome) => (
            <Card
              key={tome.title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md"
            >
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
          ))}
        </div>
      </div>
    </Layout>
  );
}
