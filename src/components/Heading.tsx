import { Separator } from "@radix-ui/react-separator";
import React from "react";

interface HeadingProps {
  title?: string;
  description?: string;
  tabs?: React.ReactElement;
}

export const Heading = ({ title, description, tabs }: HeadingProps) => {
  return (
    <>
      {tabs}
      <div>
        <p className="text-3xl font-bold tracking-tighter">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Separator />
    </>
  );
};
