import React from "react";
import { TicketItem } from "./ticket-item";
import { getTickets } from "../queries/getTickets";
import { Prisma } from "@prisma/client";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { ParsedSearchParams } from "../types";
import { SortSelect } from "@/components/SortSelection/sort-selection";

export const TicketList = async ({
  userId,
  searchParams,
}: {
  userId?: string;
  searchParams: ParsedSearchParams;
}) => {
  const tickets = await getTickets(searchParams, userId);

  return (
    <>
      <div className="flex flex-1 flex-col items-center gap-y-5 animate-fade-in-from-top">
        <div className="flex w-full max-w-[450px] gap-x-3">
          <SearchInput placeholder="Search by ticket name" />
          <SortSelect
            defaultValue="newest"
            options={[
              {
                label: "Newest",
                value: "newest",
              },
              {
                label: "Oldest",
                value: "oldest",
              },
            ]}
          />
        </div>
        {tickets.map(
          (
            item: Prisma.TicketGetPayload<{
              include: {
                User: {
                  select: {
                    username: true;
                  };
                };
              };
            }>
          ) => {
            return <TicketItem ticket={item} key={item.id} isDetail={true} />;
          }
        )}
      </div>
    </>
  );
};
