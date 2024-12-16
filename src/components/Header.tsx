import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./theme/theme-switcher";
import { buttonVariants } from "./ui/button";

export const Header = () => {
  return (
    <nav className="flex justify-between py-2.5 px-5 border-b fixed left-0 right-0  z-20 top-0 w-full bg-background/95 backdrop-blur">
      <div className="flex align-items gap-x-2">
        <Link
          href="/"
          // className="text-lg font-bold"
          className={buttonVariants({ variant: "ghost" })}
        >
          <FontAwesomeIcon icon={faHome} />
          <span className="text-lg font-semibold">Home</span>
        </Link>
      </div>
      <div className="flex align-items gap-x-2">
        <ThemeSwitcher />
        <Link
          href="/tickets"
          className={buttonVariants({ variant: "outline" })}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
};
