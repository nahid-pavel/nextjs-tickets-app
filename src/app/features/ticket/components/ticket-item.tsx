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

import { TICKET_ICONS } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faEdit,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import { Prisma, Ticket, TicketStatus } from "@prisma/client";
import { TicketMoreMenu } from "./TiketMoreMenu";
import { getAuth } from "../../auth/getAuth";
import { isOwner } from "../../auth/utils/isOwner";

export interface TicketProps {
  ticket: Prisma.TicketGetPayload<{
    include: {
      User: {
        select: {
          username: true;
        };
      };
    };
  }>;
  isDetail?: boolean;
}

export const TicketItem = async ({ ticket, isDetail }: TicketProps) => {
  const { user } = await getAuth();
  const isTicketOwner = isOwner(user, ticket);
  const buttonVariants = (
    <Button variant="outline" asChild size="icon">
      <Link href={`/tickets/${ticket?.id}`}>
        <FontAwesomeIcon icon={faExternalLink} />
      </Link>
    </Button>
  );

  const editButton = !!isTicketOwner ? (
    <Button variant="outline" asChild size="icon">
      <Link prefetch href={`/tickets/${ticket?.id}/edit`}>
        <FontAwesomeIcon icon={faEdit} />
      </Link>
    </Button>
  ) : null;

  // const deleteButton = (
  //   <form action={deleteTicket.bind(null, ticket?.id as string)}>
  //     <Button variant="outline" size="icon">
  //       <FontAwesomeIcon
  //         icon={faTrash}
  //         style={{ width: "1rem", height: "1rem" }}
  //       />
  //     </Button>
  //   </form>
  // );

  const moreMenu = !!isTicketOwner ? (
    <TicketMoreMenu
      ticket={ticket as Ticket}
      trigger={
        <Button variant="outline" size="icon" asChild>
          <FontAwesomeIcon
            icon={faCaretDown}
            className="w-4 h-4"
            style={{ width: "36px", height: "36px" }}
          />
        </Button>
      }
    />
  ) : null;

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
        <CardFooter>
          {ticket?.deadline} by {ticket?.User?.username}
        </CardFooter>
      </Card>
      <div className="flex  flex-col gap-y-1">
        {!isDetail ? (
          <>
            {editButton}
            {moreMenu}
          </>
        ) : (
          <>
            {buttonVariants}
            {editButton}
            {moreMenu}
          </>
        )}
      </div>
    </div>
  );
};
