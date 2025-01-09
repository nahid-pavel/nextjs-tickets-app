import { signInpath } from "@/paths";

import React from "react";
import { CompactCard } from "../features/ticket/components/CompactCard";
import { SignUpForm } from "../features/ticket/components/SignUpForm";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="flex-1 flex justify-center items-center ">
      <CompactCard
        title="Sign Up"
        description="Create a new account"
        className="w-full max-w-[450px] animate-fade-in-from-top"
        content={<SignUpForm />}
        footer={
          <Link className="text-sm text-muted-foreground" href={signInpath()}>
            Have an account? Sign In Now
          </Link>
        }
      />
    </div>
  );
};

export default SignUp;
