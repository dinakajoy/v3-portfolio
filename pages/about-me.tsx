import Layout from "@/components/layout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <section
        id="about"
        className="flex flex-col items-center justify-center px-6 py-16"
      >
        <div className="max-w-4xl w-full">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            About Me
          </motion.h2>

          {/* About Me */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12"
          >
            I began my coding journey in 2019 with WordPress, then quickly
            transitioned into full web development with JavaScript. My curiosity
            led me into{" "}
            <span className="font-semibold">functional programming</span> and
            the OCaml ecosystem, where I worked on developer tools, databases,
            and APIs. More recently, I’ve been exploring{" "}
            <span className="font-semibold">AI and Large Language Models</span>,
            combining them with my web development expertise to build
            intelligent applications. Along the way, I’ve contributed to{" "}
            <span className="font-semibold">open source</span>, mentored
            developers through She Codes Africa and Outreachy, trained people on
            the use of digital technologies for improvement, and spoken at
            multiple community events.
          </motion.p>

          {/* Experience Timeline */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
          >
            Experience
          </motion.h3>

          <div className="relative border-l border-gray-300 dark:border-gray-700 pl-6 space-y-10">
            {[
              {
                role: "Backend Developer",
                org: "AcceleratorApp",
                period: "2022 – 2024",
                desc: "Built incubation management tools for startups and accelerators.",
              },
              {
                role: "OCaml Intern",
                org: "Tarides",
                period: "2022",
                desc: "Worked on OCaml developer tools, Irmin (Git-like database), and GraphQL APIs.",
              },
              {
                role: "Intern & Mentor",
                org: "Outreachy",
                period: "Intern (2021), Mentor (2022 – 2024)",
                desc: "Contributed to the OCaml ecosystem and guided new contributors.",
              },
              {
                role: "Team Lead & Backend Developer",
                org: "Loctech IT Solutions",
                period: "2020",
                desc: "Led a small team to build an ERP system with JavaScript.",
              },
              {
                role: "Web Engineer II",
                org: "Codelab LLC",
                period: "2020",
                desc: "Worked on client projects using JavaScript and WordPress.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * i, duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -left-4 top-1.5 w-3 h-3 bg-yellow-600 dark:bg-yellow-400 rounded-full"></div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.role} @ {item.org}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {item.period}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
