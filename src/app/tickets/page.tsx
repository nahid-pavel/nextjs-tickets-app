import React, { Suspense } from "react";

import { Heading } from "@/components/Heading";
import { TicketList } from "../features/ticket/components/ticket-list";
import { LoadingSpinner } from "../features/ticket/components/LoadingSpinner";

const Tickets = async () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Tickets Page" description="This is Ticket Page" />

      <Suspense fallback={<LoadingSpinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default Tickets;
