"use client";

import { usePathname } from "next/navigation";
import { NODEJS_ROUTES } from "@/lib/techtomes/nodejs-mastery/nodejs-mastery-routes-config";
import SubLink from "./sublink";

export default function DocsMenu({ isSheet = false }) {
  const pathname = usePathname();
  if (pathname && !pathname.startsWith("/techtomes/nodejs-mastery"))
    return null;

  return (
    <div className="flex flex-col gap-3.5 mt-5 pr-2 pb-6 sm:text-base text-[14.5px]">
      {NODEJS_ROUTES.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/techtomes/nodejs-mastery${item.href}`,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}
