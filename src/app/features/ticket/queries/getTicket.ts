import { initialTickets, Tickets } from "../types";

export const getTicket = async (id: string): Promise<Tickets | undefined> => {
  const ticket = initialTickets?.find((ticket) => ticket.id === id);
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return new Promise((resolve) => {
    resolve(ticket);
  });
};
