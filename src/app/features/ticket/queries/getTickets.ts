import { initialTickets, Tickets } from "../types";

export const getTickets = async (): Promise<Tickets[]> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return new Promise((resolve) => {
    resolve(initialTickets);
  });
};
