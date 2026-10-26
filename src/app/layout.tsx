import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Odinaka Joy | Software Engineer, Speaker, and Open Source Enthusiast",
  description:
    "Odinaka Joy is a software engineer, speaker, and open source enthusiast passionate about building innovative solutions and sharing knowledge with the tech community.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <link rel="icon" href="/logo.png" sizes="any" />
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-slate-100 text-gray-700 dark:bg-gray-900 dark:text-slate-100">
            <Navbar />
            <main className="w-full max-w-7xl mx-auto">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
