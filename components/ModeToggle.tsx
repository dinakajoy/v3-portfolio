import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = [
    {
      value: "light",
      label: "Light Mode",
      icon: <FaSun className="text-yellow-500" />,
    },
    {
      value: "dark",
      label: "Dark Mode",
      icon: <FaMoon className="text-gray-300" />,
    },
    {
      value: "system",
      label: "System Mode",
      icon: <FaDesktop className="text-blue-500" />,
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-md border flex items-center gap-2 transition-colors duration-300
                   bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"
      >
        {themes.find((t) => t.value === resolvedTheme)?.icon}
      </button>

      {isOpen && (
        <ul
          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50 border transition-all duration-300
                       bg-white text-gray-900 border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-700"
        >
          {themes.map((t) => (
            <li
              key={t.value}
              onClick={() => {
                setTheme(t.value);
                setIsOpen(false);
              }}
              className={`cursor-pointer px-4 py-2 flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200
                          ${
                            resolvedTheme === t.value
                              ? "bg-gray-200 dark:bg-gray-700"
                              : ""
                          }`}
            >
              {t.icon}
              {t.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThemeToggle;
