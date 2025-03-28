"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-gray-200 text-gray-900" />;
  }

  return (
    <div
      className={`flex flex-col min-h-screen ${
        resolvedTheme === "dark"
          ? "bg-gray-900 text-slate-50"
          : "bg-slate-50 text-gray-700"
      }`}
    >
      <Navbar />
      <main className="max-w-6xl mx-auto my-12">{children}</main>
      <Footer />
    </div>
  );
}
