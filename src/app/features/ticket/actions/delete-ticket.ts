"use server";

import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { setCookieByKey } from "@/app/actions/cookies";

export const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({
    where: {
      id,
    },
  });
  revalidatePath("/tickets");
  setCookieByKey("toast", "Ticket Deleted");

  redirect("/tickets");
};
