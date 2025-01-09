"use server";

import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";

export const createTicket = async (formData: FormData) => {
  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };
  // @ts-expect-error: Temporarily ignoring type error because this property exists dynamically at runtime
  await prisma.ticket.create({ data });
  revalidatePath("/tickets");

  redirect("/tickets");
};
