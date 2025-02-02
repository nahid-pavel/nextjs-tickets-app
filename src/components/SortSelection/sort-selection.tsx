"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export type SortSelectOptions = {
  label?: string;
  sortKey: string;
  sortValue?: string;
};

type SortObject = {
  sortKey: string;
  sortValue?: string;
};

type sortSelectProps = {
  options: SortSelectOptions[];
  value?: SortObject;
  onChange?: (sort: SortObject) => void;
};

const SortSelect = ({ options, value, onChange }: sortSelectProps) => {
  const handleSort = (compositeKey: string) => {
    const [sortKey, sortValue] = compositeKey.split("_");
    onChange({
      sortKey,
      sortValue,
    });
  };

  return (
    <Select
      defaultValue={value.sortKey + "_" + value.sortValue}
      onValueChange={handleSort}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options?.map((item) => (
          <SelectItem
            key={item?.sortKey + item?.sortValue}
            value={item?.sortKey + "_" + item?.sortValue}
          >
            {item?.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { SortSelect };
