import { Heading } from "@/components/Heading";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="Home" description="This is Home Page" />

      <div className="flex flex-1 flex-col items-center">
        <Link href={"/tickets"} className="underline">
          Go To Tickets
        </Link>
      </div>
    </div>
  );
}
