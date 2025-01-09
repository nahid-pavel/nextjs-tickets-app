import { TicketStatus } from "@prisma/client";

export interface Tickets {
  id?: string;
  title: string;
  content: string;
  deadline?: string;
  status: TicketStatus;
}
