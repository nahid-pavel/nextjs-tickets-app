import React from "react";
import { signOut } from "../../auth/actions/sign-out";
import { User } from "lucia";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { LucideUser, LucideLock, LucideLogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type AccountDropdownProps = {
  user: User;
};

export const AccountDropdowns = ({ user }: AccountDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Avatar>
          <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={"/accounts/profile"}>
            <LucideUser className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={"/accounts/password"}>
            <LucideLock className="mr-2 h-4 w-4" />
            <span>Password</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <form action={signOut}>
            <LucideLogOut className="mr-2 h-4 w-4" />
            <button type="submit">Sign Out</button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
