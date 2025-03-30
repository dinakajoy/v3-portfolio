import SubLink from "@/components/sublink";
import { NODEJS_ROUTES } from "./routes/nodejs-techtomes-routes";

export default function NodejsMasteryDocsMenu({ isSheet = false }) {
  return (
    <div className="flex flex-col gap-3.5 mt-5 pr-2 pb-6">
      {NODEJS_ROUTES.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/nodejs-mastery${item.href}`,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}
