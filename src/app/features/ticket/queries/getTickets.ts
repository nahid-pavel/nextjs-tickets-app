import { prisma } from "../lib/prisma";
import { ParsedSearchParams } from "../types";

export const getTickets = async (
  searchParams: ParsedSearchParams,
  userId?: string
) => {
  return await prisma.ticket.findMany({
    where: {
      userId,
      title: {
        contains: (await searchParams).search,
        mode: "insensitive",
      },
    },
    orderBy: {
      ...((await searchParams).sort === "newest" && { createdAt: "desc" }),
      ...((await searchParams).sort === "bounty" && { bounty: "desc" }),
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
