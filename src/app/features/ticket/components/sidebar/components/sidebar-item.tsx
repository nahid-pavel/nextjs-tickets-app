import React, { cloneElement } from "react";
import { NavBaritems } from "../types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";

import { closedClassName } from "../constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

type SidebarItemProps = {
  open: boolean;
  //   isActive: boolean;
  navItem: NavBaritems;
};

export const SidebarItem = ({ open, navItem }: SidebarItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === navItem.href;
  return (
    <>
      {navItem.separator && <Separator />}
      <Link
        href={navItem.href}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "group relative flex h-12 justify-start",
          isActive && "bg-muted font-bold hover:bg-muted"
        )}
      >
        {cloneElement(navItem.icon, {
          className: "h-5 w-5",
        })}
        <span
          className={cn(
            "absolute left-12 text-base duration-200",
            open ? "md:block hidden" : "w-[78px]",
            !open && closedClassName
          )}
        >
          {navItem.title}
        </span>
      </Link>
    </>
  );
};
