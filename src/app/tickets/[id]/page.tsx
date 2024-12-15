import { TicketItem } from "@/app/features/ticket/components/ticket-item";

import { initialTickets } from "@/app/features/ticket/types";
import { Placeholder } from "@/components/Placeholder";
import { Button } from "@/components/ui/button";

import Link from "next/link";

import React from "react";

type TicketParams = {
  params: Promise<{
    id: string;
  }>;
};

const Ticket = async ({ params }: TicketParams) => {
  const { id } = await params;
  const ticket = initialTickets?.find((ticket) => ticket.id === id);
  if (!ticket) {
    return (
      <div className="flex flex-1">
        <Placeholder
          label="No tickets found"
          button={
            <Button asChild variant="outline">
              <Link href="/tickets">Go to Tickets</Link>
            </Button>
          }
        />
        <Placeholder label="No tickets found" />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <TicketItem ticket={ticket} />
    </div>
  );
};

export default Ticket;
