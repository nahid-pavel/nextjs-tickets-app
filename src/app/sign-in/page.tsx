import React from "react";
import { CompactCard } from "../features/ticket/components/CompactCard";

import { signInpath } from "@/paths";
import Link from "next/link";

import { SignInFrom } from "../features/ticket/components/SignInForm";

const SignIn = () => {
  return (
    <div className="flex-1 flex justify-center items-center ">
      <CompactCard
        title="Sign In"
        description="Create a new account"
        className="w-full max-w-[450px] animate-fade-in-from-top"
        content={<SignInFrom />}
        footer={
          <Link className="text-sm text-muted-foreground" href={signInpath()}>
            Have an account? Sign In Now
          </Link>
        }
      />
    </div>
  );
};
export default SignIn;
