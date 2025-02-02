"use client";

import { Input } from "../ui/input";

import { useDebouncedCallback } from "use-debounce";

type SearchInputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const SearchInput = ({ placeholder, onChange, value }: SearchInputProps) => {
  const handleSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onChange(value);
    },
    250
  );

  return (
    <Input
      defaultValue={value}
      onChange={handleSearch}
      placeholder={placeholder}
    />
  );
};

export { SearchInput };
