"use server";
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import {
  ActionState,
  toActionState,
  fromErrorToActionState,
} from "../../ticket/components/form/utils/form-error-to-action-state";
import { prisma } from "../../ticket/lib/prisma";
import { verify } from "@node-rs/argon2";

const signInSchema = z.object({
  email: z.string().min(1, { message: "Is required" }).max(191).email(),
  password: z.string().min(6).max(191),
});

export const signIn = async (_actionState: ActionState, formData: FormData) => {
  try {
    const { email, password } = signInSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return toActionState("Error", "Incorrect email or password", formData);
    }

    const validPassword = await verify(user.passwordHash, password);

    if (!validPassword) {
      return toActionState("Error", "Incorrect email or password", formData);
    }

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    // @ts-expect-error: This method does not exist in the current type definition

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  redirect("/tickets");
};
