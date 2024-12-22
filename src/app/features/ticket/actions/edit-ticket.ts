"use server";

import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";

export const editTicket = async (id: string, formData: FormData) => {
  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };
  await prisma.ticket.update({
    where: {
      id,
    },
    data,
  });
  revalidatePath("/tickets");

  redirect("/tickets");
};
