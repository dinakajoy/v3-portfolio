import { Navbar } from "./docs-navbar";
import { Footer } from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-gray-700 dark:bg-gray-900 dark:text-slate-50">
      <Navbar />
      <main className="w-full max-w-7xl mx-auto my-12">{children}</main>
      <Footer />
    </div>
  );
}
