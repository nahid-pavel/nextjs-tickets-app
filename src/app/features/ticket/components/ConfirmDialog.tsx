import React, { cloneElement, useActionState, useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Form } from "./form/Form";
import {
  ActionState,
  EMPTY_ACTION_STATE,
} from "./form/utils/form-error-to-action-state";
import { SubmitButton } from "./TicketUpsertForm";

interface ConfirmDialogProps {
  title?: string;
  description?: string;
  action: () => Promise<ActionState>;
  trigger: React.ReactElement;
}

export const useConfirmDialog = ({
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. This will permanently delete your account and remove your data from our servers",
  action,
  trigger,
}: ConfirmDialogProps) => {
  const [open, setIsOpen] = useState(false);
  const [actionState, formAction] = useActionState(action, EMPTY_ACTION_STATE);

  const dialogTrigger = cloneElement(trigger, {
    onClick: () => setIsOpen((state) => !state),
  });

  const handleSuccess = () => {
    setIsOpen(false);
  };

  const dialogContent = (
    <AlertDialog open={open} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Form
              action={formAction}
              actionState={actionState}
              onSuccess={handleSuccess}
            >
              <SubmitButton label="Confirm" />
            </Form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
  return [dialogTrigger, dialogContent];
};
