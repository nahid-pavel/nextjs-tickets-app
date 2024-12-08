import { initialTickets } from "@/app/data";

import { faBoxArchive, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type TicketParams = {
  params: Promise<{
    id: string;
  }>;
};
const TICKET_ICONS = {
  OPEN: (
    <FontAwesomeIcon
      icon={faBoxOpen}
      style={{ fontSize: "1rem", width: "1rem", height: "1rem" }}
    />
  ),
  DONE: (
    <FontAwesomeIcon
      icon={faBoxArchive}
      style={{ fontSize: "1rem", width: "1rem", height: "1rem" }}
    />
  ),
};
const Ticket = async ({ params }: TicketParams) => {
  const { id } = await params;
  const ticket = initialTickets?.find((ticket) => ticket.id === id);
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
