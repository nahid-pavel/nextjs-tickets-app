import { ActionState } from "@/app/features/ticket/components/form/utils/form-error-to-action-state";
import { useEffect, useRef } from "react";

type OnArgs = {
  actionState: ActionState;
};

type ActionFeedBackOptions = {
  onSuccess?: (onArgs: OnArgs) => void;
  onError?: (onArgs: OnArgs) => void;
};

export const useActionFeedBack = (
  actionState: ActionState,
  options?: ActionFeedBackOptions
) => {
  const prevTimeStatmp = useRef(actionState.timeStamp);
  const latest = prevTimeStatmp.current !== actionState.timeStamp;
  useEffect(() => {
    if (!latest) return;
    if (actionState.status === "Success") {
      options?.onSuccess?.({ actionState });
    }
    if (actionState.status === "Error") {
      options?.onError?.({ actionState });
    }
    prevTimeStatmp.current = actionState.timeStamp;
  }, [actionState, latest, options]);
};
