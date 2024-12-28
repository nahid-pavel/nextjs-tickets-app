import { useActionFeedBack } from "@/components/hooks/use-action-feedback";
import React from "react";
import { toast } from "sonner";
import { ActionState } from "./utils/form-error-to-action-state";

interface FormActionprops {
  action: (payload: FormData) => void;
  children: React.ReactNode;
  actionState: ActionState;
  onSuccess?: (action: ActionState) => void;
  onError?: (action: ActionState) => void;
}

export const Form = ({
  action,
  actionState,
  children,
  onSuccess,
  onError,
}: FormActionprops) => {
  useActionFeedBack(actionState, {
    onSuccess: ({ actionState }) => {
      if (actionState.message) {
        toast.success(actionState.message);
      }
      onSuccess?.(actionState);
    },
    onError: ({ actionState }) => {
      if (actionState.message) {
        toast.error(actionState.message);
      }
      onError?.(actionState);
    },
  });
  return (
    <form action={action} className="flex flex-col gap-y-2">
      {children}
    </form>
  );
};
