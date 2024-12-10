import React from "react";
import { initialTickets } from "@/app/data";
import Link from "next/link";
import clsx from "clsx";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { TICKET_ICONS } from "./[id]/page";
import { Separator } from "@radix-ui/react-separator";

const Tickets = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <p className="text-3xl font-bold tracking-tighter">Tickets Page</p>
        <p className="text-sm text-muted-foreground">This is for ticket page</p>
      </div>
      <Separator />

      <div className="flex flex-1 flex-col items-center gap-y-5 animate-fade-in-from-top">
        {initialTickets.map((item) => {
          return (
            <Card key={item?.id} className="max-w-[450px]  w-full">
              <CardHeader className="flex gap-x-3">
                <CardTitle className="flex gap-x-3">
                  <span>{TICKET_ICONS[item?.status]}</span>
                  <span>{item?.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent
                className={clsx("line-clamp-3", {
                  "line-through": item?.status === "DONE",
                })}
              >
                <span>{item?.content}</span>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/tickets/${item?.id}`}
                  className={buttonVariants({ variant: "outline" })}
                >
                  View
                </Link>
              </CardFooter>
            </Card>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Tickets;
