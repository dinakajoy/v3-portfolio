import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileAlt,
  FaEnvelope,
  FaCopy,
} from "react-icons/fa";
import Layout from "@/components/layout";

export default function ContactPage() {
  const EMAIL = "odinakajoy@gmail.com";
  const RESUME_LINK = "/dinakajoy-cv.pdf";
  const GITHUB = "https://github.com/dinakajoy";
  const LINKEDIN = "https://linkedin.com/in/dinakajoy";
  const TWITTER = "https://twitter.com/dinakajoy";

  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Layout>
      <section className="flex items-center justify-center transition-colors duration-300 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl w-full"
        >
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Get in touch
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              You can reach out via email or LinkedIn, your choince. I typically respond within a few days. No forms, just direct messages.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Card */}
            <div className="rounded-2xl p-6 bg-gray-50 dark:bg-gray-800 shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Email
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For job opportunities, collaboration, or mentoring inquiries:
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:shadow transition"
                  aria-label={`Email ${EMAIL}`}
                >
                  <FaEnvelope /> <span className="font-medium">{EMAIL}</span>
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                  aria-label="Copy email to clipboard"
                >
                  <FaCopy />
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Tip: For Portfolio inquiry, you can also attach your CV when emailing. Mention "Portfolio inquiry" in the subject so I don't miss it.
              </p>
            </div>

            {/* Links Card */}
            <div className="rounded-2xl p-6 bg-gray-50 dark:bg-gray-800 shadow-md flex flex-col">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Quick links
              </h2>

              <nav className="flex flex-col gap-3 mt-2">
                <a
                  href={RESUME_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow transition"
                >
                  <FaFileAlt />
                  <span>Download Resume</span>
                </a>

                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-transparent border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <FaGithub />
                  <span>View GitHub</span>
                </a>

                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-transparent border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <FaLinkedin />
                  <span>Connect on LinkedIn</span>
                </a>

                <a
                  href={TWITTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-transparent border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <FaTwitter />
                  <span>Follow on Twitter</span>
                </a>
              </nav>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                If you prefer scheduling a quick chat, include a calendaring
                link here (e.g. Calendly). Otherwise, send me an email with a
                few times. I will try to reply quickly.
              </p>
            </div>
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-700 dark:text-gray-300">
              Or check out my work - {" "}
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 dark:text-yellow-400 hover:underline"
              >
                view projects on GitHub
              </a>
              .
            </p>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}
