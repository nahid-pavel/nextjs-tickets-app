import React from "react";

type TicketParams = {
  params: {
    id: string;
  };
};

const Ticket = ({ params }: TicketParams) => {
  return <div>Ticket : {params.id}</div>;
};

export default Ticket;
