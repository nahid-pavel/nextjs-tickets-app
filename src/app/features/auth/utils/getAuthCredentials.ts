import { redirect } from "next/navigation";
import { getAuth } from "../getAuth";

export const getAuthCredentials = async () => {
  const { user } = await getAuth();

  if (!user) {
    return redirect("/sign-in");
  }
  return user;
};
