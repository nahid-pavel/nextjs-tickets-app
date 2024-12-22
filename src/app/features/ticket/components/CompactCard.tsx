import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import React from "react";
interface CompactCardProps {
  className: string;
  title: string;
  description: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
}
export const CompactCard = ({
  className,
  title,
  description,
  content,
  footer,
}: CompactCardProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{content}</CardFooter>}
    </Card>
  );
};
