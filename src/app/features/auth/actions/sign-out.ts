"use server";

import { redirect } from "next/navigation";
import { getAuth } from "../getAuth";
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";

export const signOut = async () => {
  const { session } = await getAuth();
  if (!session) {
    redirect("/sign-in");
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();

  // @ts-expect-error: This method does not exist in the current type definition

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  redirect("/sign-in");
};
