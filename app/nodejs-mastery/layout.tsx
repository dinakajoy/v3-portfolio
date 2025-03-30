import { Leftbar } from "@/components/leftbar";
import NodejsMasteryDocsMenu from "@/techtomes/nodejs-docs-menu";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-14">
      <Leftbar key="leftbar" menuComponent={NodejsMasteryDocsMenu} />
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
