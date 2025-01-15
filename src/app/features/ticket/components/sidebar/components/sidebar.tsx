"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { navItems } from "../constants";
import { SidebarItem } from "./sidebar-item";

export const SideBar = () => {
  const [isTransition, setIsTransition] = useState(false);
  const [open, setOpen] = useState(false);

  const handleToggle = (open: boolean) => {
    setIsTransition(true);
    setOpen(open);
    setTimeout(() => setIsTransition(false), 2000);
  };
  return (
    <nav
      className={cn(
        "animate-sidebar-from-left",
        "h-screen border-r pt-24",
        isTransition && "duration-200",
        open ? "md:w-60 w-[78px]" : "w-[78px]"
      )}
      onMouseEnter={() => handleToggle(true)}
      onMouseLeave={() => handleToggle(false)}
    >
      <div className="px-3 py-2">
        <nav className="space-y-2">
          {navItems.map((navItem) => (
            <SidebarItem key={navItem.title} open={open} navItem={navItem} />
          ))}
        </nav>
      </div>
    </nav>
  );
};
