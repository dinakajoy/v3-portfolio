"use client";
import { HexagonIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import ThemeToggle from "./ModeToggle";
import DocsMenu from "./docs-menu";
import NodejsMasteryDocsMenu from "@/techtomes/nodejs-docs-menu";

export const NAVLINKS = [
  {
    title: "Profile",
    href: "/profile",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Guides",
    href: "/guides",
  },
  {
    title: "TechTomes",
    href: "/techtomes",
  },
  {
    title: "Documentation",
    href: `/docs${page_routes[0].href}`,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const path = pathname && pathname.split("/")[1];

  const pathToComponent: { [key: string]: React.FC} = {
    docs: DocsMenu,
    "nodejs-mastery": NodejsMasteryDocsMenu,
  };

  return (
    <nav className="w-full h-14 sticky top-0 z-50 lg:px-4 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:container h-full max-sm:px-3 flex items-center justify-between">
        {path && (
          <SheetLeftbar
            menuComponent={
              pathToComponent[path.trim().toLowerCase()] || DocsMenu
            }
          />
        )}
        <div className="w-full flex items-center justify-between gap-9">
          <Logo />
          <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground mr-4">
            {NAVLINKS.map((item) => {
              return (
                <Anchor
                  key={item.title + item.href}
                  activeClassName="text-primary font-semibold"
                  absolute
                  className="flex items-center gap-1"
                  href={item.href}
                >
                  {item.title}
                </Anchor>
              );
            })}
          </div>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <img src="/logo.png" alt="Odinaka Joy" />
    </Link>
  );
}
