"use client";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Ticket, TicketStatus } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import React from "react";
import { TICKET_STATUS_LABELS } from "../constants";
import { updateTicket } from "../actions/update-ticket";
import { toast } from "sonner";

import { deleteTicket } from "../actions/delete-ticket";
import { useConfirmDialog } from "./ConfirmDialog";

interface TicketMenuProps {
  ticket: Ticket;
  trigger: React.ReactNode;
}

export const TicketMoreMenu = ({ ticket, trigger }: TicketMenuProps) => {
  const [dialogTrigger, dialogContent] = useConfirmDialog({
    action: deleteTicket.bind(null, ticket?.id as string),
    trigger: (
      <DropdownMenuItem>
        <FontAwesomeIcon icon={faTrash} className="mr-2 h-4 w-4" />
        <span>Delete</span>
      </DropdownMenuItem>
    ),
  });

  // const deleteIcon = (
  //   <DropdownMenuItem>
  //     <FontAwesomeIcon icon={faTrash} className="mr-2 h-4 w-4" />
  //     <span>Delete</span>
  //   </DropdownMenuItem>
  // );

  const handleUpdateTicketStatus = async (value: TicketStatus) => {
    const promise = updateTicket(ticket?.id, value);

    toast.promise(promise, {
      loading: "Updating status",
    });

    const result = await promise;
    if (result.status === "Success") {
      toast.success(result.message);
    } else if (result.status === "Error") {
      toast.error(result.message);
    }
  };

  return (
    <>
      {dialogContent}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" side="right">
          <DropdownMenuRadioGroup
            value={ticket.status}
            onValueChange={handleUpdateTicketStatus}
          >
            {Object.keys(TICKET_STATUS_LABELS).map((key) => (
              <DropdownMenuRadioItem value={key} key={key}>
                {TICKET_STATUS_LABELS[key]}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          {dialogTrigger}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
