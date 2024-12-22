import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

import React from "react";

import { Input } from "@/components/ui/input";
import { Ticket } from "@prisma/client";
import { upsertTicket } from "../actions/upsert-ticket";

interface UpdateParams {
  ticket?: Ticket | null;
}

export const UpsertTicket = async ({ ticket }: UpdateParams) => {
  return (
    <form
      action={upsertTicket.bind(null, ticket?.id as string)}
      className="flex flex-col gap-y-2"
    >
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        id="title"
        name="title"
        required
        defaultValue={ticket?.title}
      ></Input>
      <Label htmlFor="name">Content</Label>
      <Textarea
        id="content"
        name="content"
        required
        defaultValue={ticket?.content}
      ></Textarea>
      <Button type="submit">{ticket ? "Update" : "Create"}</Button>
    </form>
  );
};
