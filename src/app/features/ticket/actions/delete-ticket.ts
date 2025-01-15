"use server";

import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { setCookieByKey } from "@/app/actions/cookies";
import { isOwner } from "../../auth/utils/isOwner";
import { toActionState } from "../components/form/utils/form-error-to-action-state";
import { getAuth } from "../../auth/getAuth";

export const deleteTicket = async (id: string) => {
  const { user } = await getAuth();
  const ticket = await prisma.ticket.findUnique({
    where: { id },
  });

  if (!ticket || !isOwner(user, ticket)) {
    return toActionState("Error", "Not Authorized");
  }

  await prisma.ticket.delete({
    where: {
      id,
    },
  });
  revalidatePath("/tickets");
  setCookieByKey("toast", "Ticket Deleted");

  redirect("/tickets");
};
