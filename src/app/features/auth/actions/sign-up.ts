"use server";

import { z } from "zod";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "../../ticket/components/form/utils/form-error-to-action-state";
import { lucia } from "@/lib/lucia";
import { Prisma } from "@prisma/client";
import { hash } from "@node-rs/argon2";

import { cookies } from "next/headers";
import { prisma } from "../../ticket/lib/prisma";

const signUpSchema = z
  .object({
    username: z
      .string()
      .min(1)
      .max(191)
      .refine(
        (value) => !value?.includes(" "),
        "username cannot contain spaces"
      ),
    email: z.string().min(1, { message: "Is required" }).max(191).email(),
    password: z.string().min(6).max(191),
    confirmPassword: z.string().min(6).max(191),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password do not match",
        path: ["confirmPassword"],
      });
    }
  });

export const signUp = async (_actionState: ActionState, formData: FormData) => {
  try {
    const { username, email, password } = signUpSchema.parse({
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    const passwordHash = await hash(password);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        passwordHash,
      },
    });

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    // @ts-expect-error: This method does not exist in the current type definition
    //
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return toActionState(
        "Error",
        "Either email or username is already in use",
        formData
      );
    }

    return fromErrorToActionState(error, formData);
  }
  return toActionState("Success", "Sign Up Successfull", formData);
};
