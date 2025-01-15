import { prisma } from "../lib/prisma";
import { Tickets } from "../types";

export const getTickets = async (userId?: string): Promise<Tickets[]> => {
  return await prisma.ticket.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "asc",
    },
    include: {
      User: {
        select: {
          username: true,
        },
      },
    },
  });
};
