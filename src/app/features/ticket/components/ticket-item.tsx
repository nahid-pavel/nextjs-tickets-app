import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import clsx from "clsx";
import Link from "next/link";

import React from "react";
import { Tickets } from "../types";
import { TICKET_ICONS } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

interface TicketProps {
  ticket: Tickets;
}

export const TicketItem = ({ ticket }: TicketProps) => {
  const buttonVariants = (
    <Button variant="outline" asChild size="icon">
      <Link href={`/tickets/${ticket?.id}`}>
        <FontAwesomeIcon icon={faExternalLink} />
      </Link>
    </Button>
  );

  return (
    <div className="max-w-[450px]  w-full flex gap-x-1 ">
      <Card key={ticket?.id} className="w-full">
        <CardHeader className="flex gap-x-3">
          <CardTitle className="flex gap-x-3">
            <span>{TICKET_ICONS[ticket?.status]}</span>
            <span>{ticket?.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent
          className={clsx("line-clamp-3", {
            "line-through": ticket?.status === "DONE",
          })}
        >
          <span>{ticket?.content}</span>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <div className="flex  flex-col gap-y-1">{buttonVariants}</div>
    </div>
  );
};
