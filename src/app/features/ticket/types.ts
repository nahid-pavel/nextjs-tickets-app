import { TicketStatus } from "@prisma/client";
import { createSearchParamsCache, parseAsString } from "nuqs/server";

export interface Tickets {
  id?: string;
  title: string;
  content: string;
  deadline?: string;
  status: TicketStatus;
}

export const searchParser = parseAsString.withDefault("").withOptions({
  shallow: false,
  clearOnDefault: true,
});

export const sortParser = parseAsString.withDefault("newest").withOptions({
  shallow: false,
  clearOnDefault: true,
});

export const searchParamsCache = createSearchParamsCache({
  search: searchParser,
  sort: sortParser,
});

export type ParsedSearchParams = Awaited<
  ReturnType<typeof searchParamsCache.parse>
>;
