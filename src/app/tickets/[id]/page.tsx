import { initialTickets } from "@/app/data";

import {
  faBoxArchive,
  faBoxOpen,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons/faFile";
import { faPencil } from "@fortawesome/free-solid-svg-icons/faPencil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type TicketParams = {
  params: Promise<{
    id: string;
  }>;
};
export const TICKET_ICONS = {
  OPEN: (
    <FontAwesomeIcon
      icon={faFile}
      style={{ fontSize: "1rem", width: "1rem", height: "1rem" }}
    />
  ),
  DONE: (
    <FontAwesomeIcon
      icon={faCheckCircle}
      style={{ fontSize: "1rem", width: "1rem", height: "1rem" }}
    />
  ),
  INPROGRESS: (
    <FontAwesomeIcon
      icon={faPencil}
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
