"use server";

import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";

export const upsertTicket = async (id: string, formData: FormData) => {
  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };
  await prisma.ticket.upsert({
    where: {
      id: id || "",
    },
    update: data,
    create: data,
  });
  revalidatePath("/tickets");

  redirect("/tickets");
};
