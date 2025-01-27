"use client";

import { Heading } from "@/components/Heading";

import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
import { Tabs } from "../_navigation/tabs";

const Password = () => {
  const pathname = usePathname();
  return (
    <Heading
      title="Password"
      description="This is Passsword Page"
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

export default Password;
