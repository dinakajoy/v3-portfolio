import { Leftbar } from "@/components/leftbar";
import { Navbar } from "@/components/navbar";
import DocsMenu from "@/components/techtomes/nodejs-mastery/docs-menu";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
        <div className="flex items-start gap-8">
          <Leftbar key="leftbar" menu={<DocsMenu />} />
          <div className="flex-[5.25]">{children}</div>
        </div>
      </main>
    </>
  );
}
