"use client";

import { Input } from "@/components/ui/input";
import React, { useActionState } from "react";
import { SubmitButton } from "./TicketUpsertForm";
import { signUp } from "../../auth/actions/sign-up";
import { EMPTY_ACTION_STATE } from "./form/utils/form-error-to-action-state";
import { Form } from "./form/Form";

export const SignUpForm = () => {
  const [actionState, action] = useActionState(signUp, EMPTY_ACTION_STATE);
  return (
    <Form action={action} actionState={actionState}>
      <Input
        name="username"
        placeholder="Username"
        defaultValue={actionState.payload?.get("username") as string}
      />
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
      <Input
        name="confirmPassword"
        placeholder="Confirm password"
        type="password"
      />
      <SubmitButton label="Sign Up" />
    </Form>
  );
};
