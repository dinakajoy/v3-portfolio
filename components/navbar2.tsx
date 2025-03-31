"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import ThemeToggle from "./ModeToggle";
import DocsMenu from "./docs-menu";
import NodejsMasteryDocsMenu from "@/techtomes/nodejs-docs-menu";
import { Menu } from "lucide-react";
import { NAVLINKS } from "@/data/nav-links";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const path = pathname && pathname.split("/")[1];

  const pathToComponent: { [key: string]: React.FC } = {
    docs: DocsMenu,
    "nodejs-mastery": NodejsMasteryDocsMenu,
  };
  // const component = path ? pathToComponent[path.trim().toLowerCase()] : "";

  return (
    <header className="w-full h-14 sticky top-0 z-50 lg:px-4 backdrop-filter backdrop-blur-xl bg-opacity-5">
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
              <div className="absolute right-6 top-16 w-52 bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col gap-y-2 md:hidden">
                {NAVLINKS.map((item) => (
                  <Anchor
                    key={item.title + item.href}
                    activeClassName="text-primary font-semibold"
                    className="block px-4 py-2 rounded hover:bg-gray-100"
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

      {path && (
        <SheetLeftbar
          menuComponent={pathToComponent[path.trim().toLowerCase()]}
        />
      )}
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="hidden md:flex items-center gap-3">
      <img src="/logo.png" alt="Odinaka Joy" />
    </Link>
  );
}
