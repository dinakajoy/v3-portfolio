import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { NODEJS_ROUTES } from "./techtomes/nodejs-mastery/nodejs-mastery-routes-config";
import { EachRoute } from "@/interfaces/routes.interface";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
