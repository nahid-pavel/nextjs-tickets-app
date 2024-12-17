import { TicketItem } from "@/app/features/ticket/components/ticket-item";
import { getTicket } from "@/app/features/ticket/queries/getTicket";

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
  if (!ticket) {
    return notFound();
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <TicketItem ticket={ticket} isDetail={false} />
    </div>
  );
};

export default Ticket;
