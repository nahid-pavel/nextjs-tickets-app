"use client";

import { Heading } from "@/components/Heading";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../_navigation/tabs";

const Accounts = () => {
  const pathname = usePathname();
  return (
    <Heading
      title="Accounts"
      description="This is Accounts Page"
      tabs={
        <Tabs value={pathname.split("/").at(-1)}>
          <TabsList>
            <TabsTrigger value="profile" asChild>
              <Link href="/accounts/profile">Accounts</Link>
            </TabsTrigger>
            <TabsTrigger value="password" asChild>
              <Link href="/accounts/password">Password</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      }
    />
  );
};

export default Accounts;
