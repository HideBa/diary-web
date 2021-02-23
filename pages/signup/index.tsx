import React from "react";
import { default as SignupForm } from "@diary-app/components/molecules/Form/Signup";

export type Props = {
  className?: string;
};

const Signup: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <SignupForm />
    </div>
  );
};

export default Signup;
