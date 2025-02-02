"use client";

import { useQueryState } from "nuqs";
import React from "react";
import { searchParser } from "../types";
import { SearchInput } from "@/components/SearchInput/SearchInput";

type TicketSearchInputProps = {
  placeholder?: string;
};

export const TicketSearchInput = ({ placeholder }: TicketSearchInputProps) => {
  const [search, setSearch] = useQueryState("search", searchParser);

  return (
    <SearchInput
      value={search}
      onChange={setSearch}
      placeholder={placeholder}
    />
  );
};
