import { Tickets } from "@/app/features/ticket/types";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const tickets: Tickets[] = [
  {
    title: "Ticket 1",
    content: "Ticket 1 content",
    status: "DONE",
  },
  {
    title: "Ticket 2",
    content: "Ticket 2 content",
    status: "OPEN",
  },
  {
    title: "Ticket 3",
    content: "Ticket 3 content",
    status: "IN_PROGRESS",
  },
];

const seed = async () => {
  await prisma.ticket.deleteMany({});
  await prisma.ticket.createMany({
    data: tickets,
  });
};

seed();
