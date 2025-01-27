import { getAuth } from "@/app/features/auth/getAuth";
import { isOwner } from "@/app/features/auth/utils/isOwner";
import { Breadcumbs } from "@/app/features/ticket/components/Breadcumbs";
import { TicketItem } from "@/app/features/ticket/components/ticket-item";
import { getTicket } from "@/app/features/ticket/queries/getTicket";
import { Separator } from "@/components/ui/separator";

import { notFound } from "next/navigation";

import React from "react";

type TicketParams = {
  params: Promise<{
    id: string;
  }>;
};

const Ticket = async ({ params }: TicketParams) => {
  const { id } = await params;
  const ticket = await getTicket(id);

  const { user } = await getAuth();

  const isTicketOwner = isOwner(user, ticket);

  console.debug({ isTicketOwner });
  if (!ticket || !isTicketOwner) {
    return notFound();
  }
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Breadcumbs
        breadcumbs={[
          {
            title: "Tickets",
            href: "/tickets",
          },
          {
            title: ticket.title,
          },
        ]}
      />
      <Separator />
      <div className="flex flex-col items-center justify-center">
        <TicketItem ticket={ticket} isDetail={false} />
      </div>{" "}
    </div>
  );
};

export default Ticket;
