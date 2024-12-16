import React from "react";

import { Heading } from "@/components/Heading";
import { TicketItem } from "../features/ticket/components/ticket-item";
import { initialTickets } from "../features/ticket/types";

const Tickets = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Tickets Page" description="This is Ticket Page" />

      <div className="flex flex-1 flex-col items-center gap-y-5 animate-fade-in-from-top">
        {initialTickets.map((item) => {
          return <TicketItem ticket={item} key={item.id} isDetail={true} />;
        })}
        ;
      </div>
    </div>
  );
};

export default Tickets;
