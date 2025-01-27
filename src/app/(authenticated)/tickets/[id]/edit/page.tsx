import { Breadcumbs } from "@/app/features/ticket/components/Breadcumbs";
import { CompactCard } from "@/app/features/ticket/components/CompactCard";
import { UpsertTicket } from "@/app/features/ticket/components/TicketUpsertForm";
import { getTicket } from "@/app/features/ticket/queries/getTicket";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

interface UpdateParams {
  params: Promise<{
    id: string;
  }>;
}

const EditPage = async ({ params }: UpdateParams) => {
  const resolvedParams = await params; // Resolve the promise
  const ticket = await getTicket(resolvedParams.id);

  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Breadcumbs
        breadcumbs={[
          {
            title: "Tickets",
            href: "/tickets",
          },
          {
            title: ticket.title,
            href: `/tickets/${ticket.id}`,
          },
          {
            title: "Edit",
          },
        ]}
      />
      <Separator />

      <div className="flex-1 flex justify-center items-center ">
        <CompactCard
          title="Edit Ticket"
          description="Edit Ticket For Chnages"
          className="w-full max-w-[450px] animate-fade-in-from-top"
          content={<UpsertTicket ticket={ticket} />}
        />
      </div>
    </div>
  );
};

export default EditPage;
