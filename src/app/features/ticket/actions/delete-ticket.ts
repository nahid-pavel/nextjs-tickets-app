"use server";

import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";

export const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({
    where: {
      id,
    },
  });

  redirect("/tickets");
};
