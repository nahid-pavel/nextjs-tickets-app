import React, { Suspense } from "react";

import { Heading } from "@/components/Heading";
import { getAuth } from "@/app/features/auth/getAuth";
import { CompactCard } from "@/app/features/ticket/components/CompactCard";
import { UpsertTicket } from "@/app/features/ticket/components/TicketUpsertForm";
import { LoadingSpinner } from "@/app/features/ticket/components/LoadingSpinner";
import { TicketList } from "@/app/features/ticket/components/ticket-list";
import { searchParamsCache } from "@/app/features/ticket/types";
import { SearchParams } from "nuqs";

type TicketPageProps = {
  searchParams: Promise<SearchParams>;
};

const Tickets = async ({ searchParams }: TicketPageProps) => {
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
        <TicketList
          userId={user.id}
          searchParams={searchParamsCache.parse(await searchParams)}
        />
      </Suspense>
    </div>
  );
};

export default Tickets;
