import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <div>
        <p className="text-3xl font-bold tracking-tighter">HomePage</p>
        <p className="text-sm text-muted-foreground">This is for home page</p>
      </div>

      <div className="flex flex-1 flex-col items-center">
        <Link href={"/tickets"} className="underline">
          Go To Tickets
        </Link>
      </div>
    </div>
  );
}
