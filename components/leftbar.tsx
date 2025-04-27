import { AlignLeftIcon } from "lucide-react";
import { Logo, NavMenu } from "./docs-navbar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { DialogTitle } from "./ui/dialog";

export function Leftbar({ menu }: { menu: React.ReactNode }) {
  return (
    <aside className="md:flex hidden w-[20rem] sticky top-16 flex-col h-[93.75vh] overflow-y-auto">
      <ScrollArea className="py-4 px-2">{menu}</ScrollArea>
    </aside>
  );
}

export function SheetLeftbar({ menu }: { menu: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden flex">
          <AlignLeftIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 px-0" side="left">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <SheetHeader>
          <SheetClose className="px-5" asChild>
            <Logo />
          </SheetClose>
        </SheetHeader>
        <div className="flex flex-col gap-4 overflow-y-auto">
          <div className="flex flex-col gap-2.5 mt-3 mx-2 px-5">
            <NavMenu isSheet />
          </div>
          <div className="ml-2 pl-5">
            {/* <DocsMenu isSheet /> */}
            {menu}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
