"use server";

// import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";

import {
  fromErrorToActionState,
  toActionState,
} from "../components/form/utils/form-error-to-action-state";
import { z } from "zod";
import { redirect } from "next/navigation";
import { setCookieByKey } from "@/app/actions/cookies";

const UpsertTicketSchema = z.object({
  title: z.string().min(1).max(191),
  content: z.string().min(1).max(1024),
  deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Is required"),
  bounty: z.coerce.number().positive(),
});

export const upsertTicket = async (
  id: string,
  actionState: { message: string; payload?: FormData },
  formData: FormData
) => {
  try {
    const data = UpsertTicketSchema.parse({
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      deadline: formData.get("deadline"),
      bounty: formData.get("bounty"),
    });

    const dbData = {
      ...data,

      bounty: data.bounty * 10000,
    };

    await prisma.ticket.upsert({
      where: {
        id: id || "",
      },
      update: dbData,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error

      create: dbData,
    });
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  revalidatePath("/tickets");
  if (!!id) {
    setCookieByKey("toast", "Ticket Update");
    redirect(`/tickets/${id}`);
  }

  // redirect("/tickets");
  return toActionState("Success", "Ticket Created");
};
