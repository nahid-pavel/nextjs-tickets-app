"use client";

import {
  SortSelect,
  SortSelectOptions,
} from "@/components/SortSelection/sort-selection";
import { useQueryStates } from "nuqs";
import React from "react";
import { sortOptions, sortParser } from "../types";

type TicketSortSelectProps = {
  options?: SortSelectOptions[];
};

export const TicketSortSelect = ({ options }: TicketSortSelectProps) => {
  const [sort, setSort] = useQueryStates(sortParser, sortOptions);
  return <SortSelect options={options} value={sort} onChange={setSort} />;
};
