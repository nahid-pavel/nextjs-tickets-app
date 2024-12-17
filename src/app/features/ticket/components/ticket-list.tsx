import React from "react";
import { TicketItem } from "./ticket-item";
import { getTickets } from "../queries/getTickets";

export const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <div className="flex flex-1 flex-col items-center gap-y-5 animate-fade-in-from-top">
      {tickets.map((item) => {
        return <TicketItem ticket={item} key={item.id} isDetail={true} />;
      })}
      ;
    </div>
  );
};
