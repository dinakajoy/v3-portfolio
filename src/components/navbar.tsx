"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";
import { NAVLINKS } from "@/contents/nav-links";
import { ModeToggle } from "./theme-toggle";
import { socials } from "./footer";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background dark:bg-gray-900 border-b-gray-200 dark:border-b-gray-800">
      <div className="container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center sm:gap-5 gap-2.5">
          <div className="flex items-center gap-6">
            <div>
              <Logo />
            </div>
            <div className="md:flex hidden items-center gap-4 text-lg font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center sm:justify-normal justify-between sm:gap-3 ml-1 w-fit">
          <div className="flex items-center justify-between sm:gap-2">
            <div className="flex ml-auto items-center gap-3 sm:gap-6 lg:gap-7">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
              <ModeToggle />
              <button
                className="md:hidden flex items-center p-2 text-muted-foreground"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <LuMenu size={28} />
              </button>
              {isOpen && (
                <div className="absolute right-6 top-16 w-52 bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col gap-y-2 md:hidden z-10">
                  {NAVLINKS.map((item) => (
                    <Link
                      key={item.title + item.href}
                      className="text-primary font-semibold block px-4 py-2 rounded hover:bg-gray-100 hover:dark:bg-gray-400"
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="Odinaka Joy"
        width={100}
        height={20}
        priority
      />
    </Link>
  );
}

export function NavMenu() {
  return (
    <>
      {NAVLINKS.map((item) => (
        <Link
          key={item.title + item.href}
          className="text-primary dark:font-medium font-semibold flex items-center gap-1 sm:text-[1.1rem] text-[14.5px] dark:text-stone-300/85 text-stone-800"
          href={item.href}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}
