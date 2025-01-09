"use server";

import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { TicketStatus } from "@prisma/client";
import {
  fromErrorToActionState,
  toActionState,
} from "../components/form/utils/form-error-to-action-state";

export const updateTicket = async (id: string, status: TicketStatus) => {
  await new Promise((res) => setTimeout(res, 1000));
  try {
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
