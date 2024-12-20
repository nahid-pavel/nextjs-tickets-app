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
import { faExternalLink, faTrash } from "@fortawesome/free-solid-svg-icons";
import { TicketStatus } from "@prisma/client";
import { deleteTicket } from "../actions/delete-ticket";

interface TicketProps {
  ticket: Tickets;
  isDetail?: boolean;
}

export const TicketItem = ({ ticket, isDetail }: TicketProps) => {
  const buttonVariants = (
    <Button variant="outline" asChild size="icon">
      <Link href={`/tickets/${ticket?.id}`}>
        <FontAwesomeIcon icon={faExternalLink} />
      </Link>
    </Button>
  );

  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket?.id as string)}>
      <Button variant="outline" size="icon">
        <FontAwesomeIcon
          icon={faTrash}
          style={{ width: "1rem", height: "1rem" }}
        />
      </Button>
    </form>
  );

  return (
    <div
      className={clsx("w-full flex gap-x-1 animate-fade-in-from-top", {
        "max-w-[450px]": isDetail,
        "max-w-[600px]": !isDetail,
      })}
    >
      <Card key={ticket?.id} className="w-full">
        <CardHeader className="flex gap-x-3">
          <CardTitle className="flex gap-x-3">
            <span>{TICKET_ICONS[ticket?.status as TicketStatus]}</span>
            <span>{ticket?.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx("whitespace-break-spaces", {
              "line-through": ticket?.status === "DONE",
              "line-clamp-3 ": isDetail,
            })}
          >
            {ticket?.content}
          </span>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <div className="flex  flex-col gap-y-1">
        {!isDetail ? deleteButton : buttonVariants}
      </div>
    </div>
  );
};
