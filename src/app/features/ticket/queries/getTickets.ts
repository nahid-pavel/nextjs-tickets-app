import { prisma } from "../lib/prisma";
import { ParsedSearchParams } from "../types";

export const getTickets = async (
  searchParams: ParsedSearchParams,
  userId?: string
) => {
  const skip = searchParams.page * searchParams.size;
  const take = searchParams.size;

  const [tickets, count] = await prisma.$transaction([
    prisma.ticket.findMany({
      skip,
      take,
      where: {
        userId,

        title: {
          contains: (await searchParams).search,
          mode: "insensitive",
        },
      },
      orderBy: {
        [searchParams.sortKey]: searchParams.sortValue,
      },
      include: {
        User: {
          select: {
            username: true,
          },
        },
      },
    }),
    prisma.ticket.count({
      where: {
        userId,

        title: {
          contains: (await searchParams).search,
          mode: "insensitive",
        },
      },
    }),
  ]);

  return {
    tickets,
    metadata: {
      count,
      hasNext: count > skip + take,
    },
  };
};
