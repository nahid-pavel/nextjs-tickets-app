"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

import React, { useActionState, useRef } from "react";

import { Input } from "@/components/ui/input";
import { Ticket } from "@prisma/client";
import { upsertTicket } from "../actions/upsert-ticket";
import { useFormStatus } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ErrorActionState } from "./form/utils/form-error-to-action-state";
import { Form } from "./form/Form";
import { DatePicker } from "./date-picker";

interface UpdateParams {
  ticket?: Ticket | null;
}

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending && <FontAwesomeIcon icon={faSpinner} />}
      {label}
    </Button>
  );
};

export const UpsertTicket = ({ ticket }: UpdateParams) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    ErrorActionState
  );

  const datePickerresetRef = useRef<{
    reset?: () => void;
  }>(null);

  const handleSuccess = () => {
    datePickerresetRef?.current?.reset();
  };

  return (
    <Form action={action} actionState={actionState} onSuccess={handleSuccess}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        id="title"
        name="title"
        defaultValue={
          (actionState?.payload?.get("title") as string) ?? ticket?.title
        }
      ></Input>
      <span className="text-xs text-red-500">
        {actionState?.fieldErrors?.title?.[0]}
      </span>
      <Label htmlFor="name">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState?.payload?.get("content") as string) ?? ticket?.content
        }
      ></Textarea>
      <div className="flex gap-x-2 mb-1">
        <div className="w-1/2">
          <Label htmlFor="deadline">Deadline</Label>
          <DatePicker
            key={actionState.timeStamp}
            id="deadline"
            name="deadline"
            imperativeReset={datePickerresetRef}
            defaultValue={
              (actionState.payload?.get("deadline") as string) ??
              ticket?.deadline
            }
          />
        </div>
        <div className="w-1/2">
          <Label htmlFor="bounty">Bounty ($)</Label>
          <Input
            id="bounty"
            name="bounty"
            type="number"
            step=".01"
            defaultValue={
              (actionState.payload?.get("bounty") as string) ??
              (ticket?.bounty ? ticket?.bounty / 10000 : "")
            }
          />
        </div>
      </div>

      <span className="text-xs text-red-500">
        {actionState?.fieldErrors?.content?.[0]}
      </span>
      <SubmitButton label={ticket ? "Update" : "Create"}></SubmitButton>
    </Form>
  );
};
