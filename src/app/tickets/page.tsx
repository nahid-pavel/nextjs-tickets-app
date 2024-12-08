import React from "react";
import { initialTickets } from "@/app/data";
import Link from "next/link";

const Tickets = () => {
  return initialTickets.map((item) => {
    return (
      <div key={item?.id}>
        <p>{item?.title}</p>

        <Link href={`/tickets/${item?.id}`} className="underline">
          View
        </Link>
      </div>
    );
  });
};

export default Tickets;
