import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

type PageAndSizxe = {
  page: number;
  size: number;
  total?: number;
};
type PaginationProps = {
  pagination: PageAndSizxe;
  onPagination: (pagination: PageAndSizxe) => void;
  paginatedTicketMetadata: {
    count: number;
    hasNext: boolean;
  };
};

export const Pagination = ({
  pagination,
  onPagination,
  paginatedTicketMetadata,
}: PaginationProps) => {
  const startOffset = pagination.page * pagination.size + 1;
  const endOffset = startOffset - 1 + pagination.size;

  console.debug({ paginationSize: pagination.size });

  const { hasNext, count } = paginatedTicketMetadata;

  const actualEndOffset = Math.min(endOffset, count);

  const label = `${startOffset}-${actualEndOffset} of ${count}`;

  const onHandleNextHandler = () => {
    onPagination({
      ...pagination,
      page: pagination.page + 1,
    });
  };

  const onHandlePreviousHandler = () => {
    onPagination({
      ...pagination,
      page: pagination.page - 1,
    });
  };

  const previousButton = (
    <Button
      variant="outline"
      size="sm"
      disabled={pagination.page < 1}
      onClick={onHandlePreviousHandler}
    >
      Previous
    </Button>
  );

  const nextButton = (
    <Button
      variant="outline"
      size="sm"
      disabled={!hasNext}
      onClick={onHandleNextHandler}
    >
      Next
    </Button>
  );

  const handleChangeSelect = (size) => {
    onPagination({
      ...pagination,
      size: parseInt(size),
    });
  };

  console.debug({ pagination: pagination.size.toString() });

  const selectButton = (
    <Select
      defaultValue={pagination.size.toString()}
      onValueChange={handleChangeSelect}
    >
      <SelectTrigger className="h-[35px]">
        <SelectValue placeholder="Select size" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="5">5</SelectItem>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="15">15</SelectItem>
      </SelectContent>
    </Select>
  );

  return (
    <div className="flex justify-between items-center">
      <p className="text-sm text-muted-foreground">{label}</p>
      <div className="flex gap-x-2">
        {selectButton}
        {previousButton}
        {nextButton}
      </div>
    </div>
  );
};
