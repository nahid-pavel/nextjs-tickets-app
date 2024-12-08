import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Tickets App</p>
      <Link href={"/tickets"} className="underline">
        Go To Tickets
      </Link>
    </div>
  );
}
