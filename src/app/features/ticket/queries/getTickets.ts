import { prisma } from "../lib/prisma";
import { Tickets } from "../types";

export const getTickets = async (): Promise<Tickets[]> => {
  return await prisma.ticket.findMany();
};
