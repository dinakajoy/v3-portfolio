"use client";
import { ModeToggle } from "@/components/theme-toggle";
import { HexagonIcon } from "lucide-react";
import Link from "next/link";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import ThemeToggle from "./ModeToggle";

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
  return (
    <nav className="w-full h-14 sticky top-0 z-50 lg:px-4 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:container h-full max-sm:px-3 flex items-center justify-between">
        <SheetLeftbar />
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
      <HexagonIcon className="w-6 h-6 text-muted-foreground fill-current" />
      <h2 className="text-md font-bold font-code">Odinaka Joy</h2>
    </Link>
  );
}
