"use client";

import { Input } from "@/components/ui/input";
import React, { useActionState } from "react";
import { SubmitButton } from "./TicketUpsertForm";
import { Form } from "./form/Form";

import { EMPTY_ACTION_STATE } from "./form/utils/form-error-to-action-state";
import { signIn } from "../../auth/actions/sign-in";

export const SignInFrom = () => {
  const [actionState, action] = useActionState(signIn, EMPTY_ACTION_STATE);

  console.debug({ payload: actionState.payload?.get("email") });
  return (
    <Form action={action} actionState={actionState}>
      <Input
        name="email"
        placeholder="Email"
        defaultValue={actionState.payload?.get("email") as string}
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        defaultValue={actionState.payload?.get("password") as string}
      />

      <SubmitButton label="Sign In" />
    </Form>
  );
};
