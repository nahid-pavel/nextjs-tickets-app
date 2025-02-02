"use client";

import { useQueryState, useQueryStates } from "nuqs";
import React, { useEffect, useRef } from "react";
import { paginationParser, paginationOptions, searchParser } from "../types";
import { Pagination } from "./Pagination";

type TicketPaginationProps = {
  paginatedTicketMetadata: {
    count: number;
    hasNext: boolean;
  };
};

export const TicketPagination = ({
  paginatedTicketMetadata,
}: TicketPaginationProps) => {
  const [pagination, setPagination] = useQueryStates(
    paginationParser,
    paginationOptions
  );

  const [search] = useQueryState("search", searchParser);

  const prevSearch = useRef(search);

  useEffect(() => {
    if (search !== prevSearch.current) {
      setPagination({ ...pagination, page: 0 });
      prevSearch.current = search;
    }
  }, [pagination, search, setPagination]);
  return (
    <Pagination
      pagination={pagination}
      onPagination={setPagination}
      paginatedTicketMetadata={paginatedTicketMetadata}
    />
  );
};
