import { ZodError } from "zod";

export type ActionState = {
  status?: "Success" | "Error";
  message?: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
  timeStamp: number;
  formData?: FormData;
};

export const ErrorActionState: ActionState = {
  message: "",

  fieldErrors: {},
  timeStamp: Date.now(),
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: "",
  fieldErrors: {},
  timeStamp: Date.now(),
};

export const fromErrorToActionState = (
  error: unknown,
  formData?: FormData
): ActionState => {
  if (error instanceof ZodError) {
    return {
      status: "Error",
      // message: error?.errors?.[0]?.message,
      fieldErrors: error?.flatten()?.fieldErrors,
      payload: formData,
      timeStamp: Date.now(),
    };
  } else if (error instanceof Error) {
    return {
      status: "Error",
      message: error?.message,
      payload: formData,
      fieldErrors: {},
      timeStamp: Date.now(),
    };
  } else {
    return {
      status: "Error",
      message: "An Unknown Error Occured",
      payload: formData,
      fieldErrors: {},
      timeStamp: Date.now(),
    };
  }
};

export const toActionState = (
  status: ActionState["status"],
  message: string,
  formData?: FormData
): ActionState => {
  console.debug({ status });
  return {
    message,
    timeStamp: Date.now(),
    status,
    fieldErrors: {},
    formData,
  };
};
