"use client";

import { faArrowPointer, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./theme/theme-switcher";
import { buttonVariants } from "./ui/button";
import { signInpath, signUppath } from "@/paths";
import { SubmitButton } from "@/app/features/ticket/components/TicketUpsertForm";
import { signOut } from "@/app/features/auth/actions/sign-out";
import clsx from "clsx";
import { useAuth } from "@/app/features/auth/hooks/useAuth";

export const Header = () => {
  const { user, isFetched } = useAuth();
  // const { user } = await getAuth();

  if (!isFetched) {
    return null;
  }
  return (
    <nav
      className={clsx(
        "flex  py-2.5 px-5 border-b fixed left-0 right-0  z-20 top-0 w-full bg-background/95 backdrop-blur animate-header-from-top",
        {
          "justify-between": !user,
          "justify-end": !!user,
        }
      )}
    >
      {user ? (
        <form action={signOut}>
          <SubmitButton
            label="Sign Out"
            icon={<FontAwesomeIcon icon={faArrowPointer} />}
          />
        </form>
      ) : (
        <>
          {" "}
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
            <Link
              href={signInpath()}
              className={buttonVariants({ variant: "outline" })}
            >
              Sign In
            </Link>
            <Link
              href={signUppath()}
              className={buttonVariants({ variant: "outline" })}
            >
              Sign Up
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};
