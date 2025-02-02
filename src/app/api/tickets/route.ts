import { getTickets } from "@/app/features/ticket/queries/getTickets";

export const GET = async () => {
  const { tickets, metadata } = await getTickets({
    page: 0,
    search: "",
    sortKey: "createdAt",
    sortValue: "desc",
    size: 5,
  });
  return Response.json({ tickets, metadata });
};
