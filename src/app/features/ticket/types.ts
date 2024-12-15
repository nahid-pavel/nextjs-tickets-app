export interface Tickets {
  id: string;
  title: string;
  content: string;
  status: TicketStatus;
}

export type TicketStatus = "DONE" | "OPEN" | "INPROGRESS";

export const initialTickets: Tickets[] = [
  {
    id: "1",
    title: "Ticket 1",
    content: "Ticket 1 content",
    status: "DONE",
  },
  {
    id: "2",
    title: "Ticket 2",
    content: "Ticket 2 content",
    status: "OPEN",
  },
  {
    id: "3",
    title: "Ticket 3",
    content: "Ticket 3 content",
    status: "INPROGRESS",
  },
];
