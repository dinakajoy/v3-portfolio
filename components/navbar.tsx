import Link from "next/link";
import ThemeToggle from "./ModeToggle";

export function Navbar() {
  return (
    <nav className="p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="Odinaka Joy" />
        </Link>
        <div className="flex space-x-4 md:space-x-8 items-center font-semibold">
          <Link href="/profile">Profile</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/techtomes">TechTomes</Link>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
