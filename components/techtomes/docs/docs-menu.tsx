"use client";

import { usePathname } from "next/navigation";
import SubLink from "./sublink";
import { ROUTES } from "@/lib/techtomes/docs/routes-config";

export default function DocsMenu({ isSheet = false }) {
  const pathname = usePathname();
  if (!pathname?.startsWith("/techtomes/docs")) return null;

  return (
    <div className="flex flex-col gap-3.5 mt-5 pr-2 pb-6 sm:text-base text-[14.5px]">
      {ROUTES.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/techtomes/docs${item.href}`,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}
