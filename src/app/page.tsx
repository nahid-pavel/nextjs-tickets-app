import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <p>Tickets App</p>
      <Link href={"/tickets"} className="underline">
        Go To Tickets
      </Link>
    </div>
  );
}
