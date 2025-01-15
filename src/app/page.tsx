import { Heading } from "@/components/Heading";
import { Suspense } from "react";
import { LoadingSpinner } from "./features/ticket/components/LoadingSpinner";
import { TicketList } from "./features/ticket/components/ticket-list";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="All Tickets" description="This is Home Page" />

      <Suspense fallback={<LoadingSpinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
}
