"use client";

import { Input } from "../ui/input";

import { useDebouncedCallback } from "use-debounce";
import { searchParser } from "@/app/features/ticket/types";

import { useQueryState } from "nuqs";

type SearchInputProps = {
  placeholder: string;
};

const SearchInput = ({ placeholder }: SearchInputProps) => {
  const [search, setSearch] = useQueryState("search", searchParser);

  const handleSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSearch(value);
    },
    250
  );

  return (
    <Input
      defaultValue={search}
      onChange={handleSearch}
      placeholder={placeholder}
    />
  );
};

export { SearchInput };
