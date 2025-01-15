import { getAuthCredentials } from "../features/auth/utils/getAuthCredentials";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getAuthCredentials();

  return <>{children}</>;
}
