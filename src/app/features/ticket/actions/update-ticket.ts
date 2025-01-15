"use server";

import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { TicketStatus } from "@prisma/client";
import {
  fromErrorToActionState,
  toActionState,
} from "../components/form/utils/form-error-to-action-state";
import { getAuth } from "../../auth/getAuth";
import { isOwner } from "../../auth/utils/isOwner";

export const updateTicket = async (id: string, status: TicketStatus) => {
  const { user } = await getAuth();
  await new Promise((res) => setTimeout(res, 1000));
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id },
    });

    if (!ticket || !isOwner(user, ticket)) {
      return toActionState("Error", "Not Authorized");
    }
    await prisma.ticket.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  } catch (error) {
    return fromErrorToActionState(error);
  }

  revalidatePath("/tickets");
  return toActionState("Success", "Status Updated");
};
