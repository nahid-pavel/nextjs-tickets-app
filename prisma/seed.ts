import { Tickets } from "@/app/features/ticket/types";
import { hash } from "@node-rs/argon2";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = [
  {
    username: "admin",
    email: "jk102@yahoo.com",
  },
  {
    username: "user",
    email: "b145@yahoo.com",
  },
];

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
  await prisma.user.deleteMany({});
  await prisma.ticket.deleteMany({});

  const passwordHash = await hash("star");

  const dbUsers = await prisma.user.createManyAndReturn({
    data: users.map((user) => ({
      ...user,
      passwordHash,
    })),
  });
  await prisma.ticket.createMany({
    data: tickets.map((ticket) => ({
      ...ticket,
      userId: dbUsers[0]?.id,
    })),
  });
};

seed();
