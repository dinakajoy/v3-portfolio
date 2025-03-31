import { AlignLeftIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

export function Leftbar({ menuComponent: Menu }: { menuComponent: React.FC }) {
  return (
    <aside className="md:flex hidden flex-[1] min-w-[230px] sticky top-16 flex-col h-[94.5vh] overflow-y-auto">
      <ScrollArea className="py-4">
        <Menu />
      </ScrollArea>
    </aside>
  );
}

export function SheetLeftbar({
  menuComponent: Menu,
}: {
  menuComponent: React.FC;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden flex">
          <AlignLeftIcon className="w-7 h-7 mb-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 px-0" side="left">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetHeader>
          <h2 className="font-extrabold text-start px-8">TechTomes Menu</h2>
        </SheetHeader>
        <ScrollArea className="flex flex-col gap-4">
          <div className="mx-2 px-5">
            <Menu />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
