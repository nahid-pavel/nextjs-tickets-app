import { Heading } from "@/components/Heading";
import { Suspense } from "react";
import { LoadingSpinner } from "./features/ticket/components/LoadingSpinner";
import { TicketList } from "./features/ticket/components/ticket-list";

import { SearchParams } from "nuqs/server";
import { searchParamsCache } from "./features/ticket/types";

type searchParams = {
  searchParams: Promise<SearchParams>;
};

export default async function Home({ searchParams }: searchParams) {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="All Tickets" description="This is Home Page" />

      <Suspense fallback={<LoadingSpinner />}>
        <TicketList
          searchParams={searchParamsCache.parse(await searchParams)}
        />
      </Suspense>
    </div>
  );
}
