"use client";

import { Placeholder } from "@/components/Placeholder";
import React from "react";

const Error = ({ error }: { error: Error }) => {
  return <Placeholder label={error?.message || "Something went wrong"} />;
};

export default Error;
