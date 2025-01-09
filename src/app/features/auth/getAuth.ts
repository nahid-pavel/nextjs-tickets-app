"use server";

import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";
import { cache } from "react";

export const getAuth = cache(async () => {
  // @ts-expect-error: This method does not exist in the current type definition
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) {
    return {
      user: null,
      session: null,
    };
  }

  const result = await lucia.validateSession(sessionId);

  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);

      // @ts-expect-error: This method does not exist in the current type definition
      cookies.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();

      // @ts-expect-error: This method does not exist in the current type definition
      cookies.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch {}

  return result;
});
