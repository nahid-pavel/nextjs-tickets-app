import React, { Suspense } from "react";

import { Heading } from "@/components/Heading";
import { TicketList } from "../features/ticket/components/ticket-list";
import { LoadingSpinner } from "../features/ticket/components/LoadingSpinner";
import { CompactCard } from "../features/ticket/components/CompactCard";
import { UpsertTicket } from "../features/ticket/components/TicketUpsertForm";
import { getAuth } from "../features/auth/getAuth";

const Tickets = async () => {
  const { user } = await getAuth();
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="My Tickets" description="This is Ticket Page" />
      <CompactCard
        className="w-full max-w-[450px] self-center"
        title="Create Ticket"
        description="A new ticket will be created"
        content={<UpsertTicket />}
      />

      <Suspense fallback={<LoadingSpinner />}>
        <TicketList userId={user.id} />
      </Suspense>
    </div>
  );
};

export default Tickets;
