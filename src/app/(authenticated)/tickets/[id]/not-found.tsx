import { Placeholder } from "@/components/Placeholder";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-1">
      <Placeholder
        label="No tickets found"
        button={
          <Button asChild variant="outline">
            <Link href="/tickets">Go to Tickets</Link>
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
