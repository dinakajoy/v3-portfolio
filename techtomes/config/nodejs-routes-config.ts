import { NODEJS_ROUTES } from "../routes/nodejs-techtomes-routes";
import { getRecurrsiveAllLinks } from "../../lib/getRecursiveAllLinks";

export const nodejs_page_routes = NODEJS_ROUTES.map((it) =>
  getRecurrsiveAllLinks(it)
).flat();
