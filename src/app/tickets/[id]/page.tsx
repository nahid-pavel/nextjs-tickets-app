import { initialTickets } from "@/app/data";
import React from "react";

type TicketParams = {
  params: {
    id: string;
  };
};
const TICKET_ICONS = {
  OPEN: "O",
  DONE: "X",
};
const Ticket = ({ params }: TicketParams) => {
  const ticket = initialTickets?.find((ticket) => ticket.id === params.id);
  if (!ticket) {
    return "No Tickets Found";
  }
  return (
    <div>
      <p>{TICKET_ICONS[ticket?.status]}</p>
      <p>{ticket?.content}</p>
    </div>
  );
};

export default Ticket;
