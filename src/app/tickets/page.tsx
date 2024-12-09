import React from "react";
import { initialTickets } from "@/app/data";
import Link from "next/link";

const Tickets = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <p className="text-3xl font-bold tracking-tighter">Tickets Page</p>
        <p className="text-sm text-muted-foreground">This is for ticket page</p>
      </div>
      <div className="flex flex-1 flex-col items-center gap-y-5">
        {initialTickets.map((item) => {
          return (
            <div
              key={item?.id}
              className="max-w-[450px] p-6 border border-slate-400 border-rounded w-full"
            >
              <h3 className="text-lg font-semibold">{item?.title}</h3>
              <p className="truncate text-slate-700">{item?.content}</p>

              <Link href={`/tickets/${item?.id}`} className="underline">
                View
              </Link>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Tickets;
