"use server";

import { cookies } from "next/headers";

export const getCookieByKey = async (key: string) => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(key);
  if (!cookie) {
    return null;
  }
  return cookie.value;
};
export const setCookieByKey = async (key: string, value: string) => {
  const cookieStore = await cookies(); // `cookies()` in this context returns `ResponseCookies`
  cookieStore.set(key, value);
};

// Delete a cookie by key
export const deleteCookiesByKey = async (key: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(key);
};
