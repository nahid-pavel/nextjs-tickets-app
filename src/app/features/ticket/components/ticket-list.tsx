import React from "react";
import { TicketItem } from "./ticket-item";
import { getTickets } from "../queries/getTickets";
import { Prisma } from "@prisma/client";
import { ParsedSearchParams } from "../types";
import { TicketSearchInput } from "./TicketSearchInput";
import { TicketSortSelect } from "./TicketSortSelect";
import { TicketPagination } from "./ticket-pagination";

export const TicketList = async ({
  userId,
  searchParams,
}: {
  userId?: string;
  searchParams: ParsedSearchParams;
}) => {
  const { tickets, metadata } = await getTickets(searchParams, userId);

  return (
    <>
      <div className="flex flex-1 flex-col items-center gap-y-5 animate-fade-in-from-top">
        <div className="flex w-full max-w-[450px] gap-x-3">
          <TicketSearchInput placeholder="Search by ticket name" />
          <TicketSortSelect
            options={[
              {
                sortKey: "createdAt",
                label: "Newest",
                sortValue: "desc",
              },
              {
                sortKey: "createdAt",
                label: "Oldest",
                sortValue: "asc",
              },
              {
                sortKey: "bounty",
                label: "Bounty",
                sortValue: "desc",
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
        <div className="w-full max-w-[450px] ">
          <TicketPagination paginatedTicketMetadata={metadata} />
        </div>
      </div>
    </>
  );
};
