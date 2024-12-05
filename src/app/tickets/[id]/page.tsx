import { initialTickets } from "@/app/data";
import React from "react";

type TicketParams = {
  params: {
    id: string;
  };
};

const Ticket = ({ params }: TicketParams) => {
  const ticket = initialTickets.find((ticket) => ticket.id === params.id);
  return (
    <div>
      <p>{ticket?.content}</p>
      <p>{ticket?.status}</p>
    </div>
  );
};

export default Ticket;
