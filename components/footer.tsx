import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/dinakajoy",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/dinakajoy",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    link: "https://twitter.com/dinakajoy",
  },
  { name: "Email", icon: <FaEnvelope />, link: "mailto:dinakajoy@gmail.com" },
];

export function Footer() {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  return (
    <footer
      className={`max-w-6xl mx-auto border-t border-t-cyan-600 ${
        isDarkMode ? "text-white" : "text-gray-700"
      } pt-8 flex flex-col items-center`}
    >
      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact & Socials
      </motion.h2>
      <p
        className={`text-lg  mb-6 text-center max-w-3xl  px-4 ${
          isDarkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Connect with me through my social links or reach out directly via email.
      </p>

      <div className="flex flex-wrap align-center justify-center gap-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xl transition ${
              isDarkMode
                ? "text-gray-400 bg-gray-800 hover:bg-gray-700"
                : "text-gray-700 bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {social.icon}
            {social.name}
          </a>
        ))}
      </div>
      <p
        className={`pt-4 pb-2 italics text-sm ${
          isDarkMode ? "text-gray-400" : "text-gray-500 font-semibold"
        }`}
      >
        &copy; {new Date().getFullYear()} Odinaka Joy
      </p>
    </footer>
  );
}
