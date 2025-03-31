import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import ThemeToggle from "./ModeToggle";
import { NAVLINKS } from "@/data/nav-links";
import Anchor from "./anchor";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="Odinaka Joy" />
        </Link>
        <div className="flex space-x-4 md:space-x-8 items-center">
          <div className="hidden md:flex space-x-4 md:space-x-8 items-center">
            {NAVLINKS.map((item) => (
              <Anchor
                key={item.title + item.href}
                activeClassName="text-primary font-semibold"
                absolute
                className="flex items-center gap-1"
                href={item.href}
              >
                {item.title}
              </Anchor>
            ))}
          </div>

          <ThemeToggle />
          <button
            className="md:hidden flex items-center p-2 text-muted-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
          {isOpen && (
            <div className="absolute right-6 top-16 w-52 bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col gap-y-2 md:hidden">
              {NAVLINKS.map((item) => (
                <Anchor
                  key={item.title + item.href}
                  activeClassName="text-primary font-semibold"
                  className="block px-4 py-2 rounded hover:bg-gray-100 hover:dark:bg-gray-400"
                  href={item.href}
                >
                  {item.title}
                </Anchor>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
