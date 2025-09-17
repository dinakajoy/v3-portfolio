import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: ReactNode;
};

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn("bg-gray-800 rounded-2xl shadow-md p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("p-4", className)} {...props}>
      {children}
    </div>
  );
}