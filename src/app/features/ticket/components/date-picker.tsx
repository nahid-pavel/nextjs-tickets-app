"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  id: string;
  name: string;
  defaultValue: string;
  imperativeReset?: React.MutableRefObject<{
    reset?: () => void;
  }>;
}

export function DatePicker({
  id,
  name,
  defaultValue,
  imperativeReset,
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : new Date()
  );

  const [open, setOpen] = React.useState(false);
  const formattedStringDate = date ? format(date, "yyyy-MM-dd") : "";

  const handleChange = (selectedDate: Date | undefined) => {
    setOpen(false);
    setDate(selectedDate);
  };
  React.useImperativeHandle(imperativeReset, () => ({
    reset: () => {
      setDate(new Date());
    },
  }));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full" id={id} asChild>
        <Button variant={"outline"} className={" justify-start "}>
          <CalendarIcon />
          {date ? format(date, "yyyy-MM-dd") : <span>Pick a date</span>}
          <input type="hidden" name={name} value={formattedStringDate} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
