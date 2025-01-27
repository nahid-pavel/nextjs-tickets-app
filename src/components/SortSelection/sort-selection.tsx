"use client";

import { useQueryState } from "nuqs";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { sortParser } from "@/app/features/ticket/types";

type Options = {
  label?: string;
  value?: string;
};

type sortSelectProps = {
  defaultValue?: string;
  options: Options[];
};

const SortSelect = ({ defaultValue, options }: sortSelectProps) => {
  const [sort, setSort] = useQueryState("sort", sortParser);

  const handleSort = (value: string) => {
    setSort(value);
  };

  return (
    <Select defaultValue={sort ?? defaultValue} onValueChange={handleSort}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options?.map((item, index) => (
          <SelectItem key={index} value={item?.value}>
            {item?.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { SortSelect };
