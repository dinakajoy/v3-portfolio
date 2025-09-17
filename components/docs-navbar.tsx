import Link from "next/link";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { buttonVariants } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/theme-toggle";
import { NAVLINKS } from "@/contents/nav-links";
import { socials } from "./footer";

export function Navbar({ menu }: { menu?: React.ReactNode }) {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background dark:bg-gray-900 border-b-gray-200 dark:border-b-gray-800">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center sm:justify-between md:gap-2">
        <div className="flex items-center sm:gap-5 gap-2.5">
          <SheetLeftbar menu={menu} />
          <div className="flex items-center gap-6">
            <div className="md:flex hidden">
              <Logo />
            </div>
            <div className="md:flex hidden items-center gap-4 text-lg font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center sm:justify-normal justify-between sm:gap-3 ml-1 sm:w-fit w-[90%]">
          {/* <AlgoliaSearch {...algolia_props} /> */}
          <div className="flex items-center justify-between sm:gap-2">
            <div className="flex ml-4 sm:ml-0">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  })}
                >
                  {social.icon}
                </a>
              ))}
              <ModeToggle />
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
      <img src="/logo.png" alt="Odinaka Joy" />
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex items-center gap-1 sm:text-[1.1rem] text-[14.5px] dark:text-stone-300/85 text-stone-800"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
