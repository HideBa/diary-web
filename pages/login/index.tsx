import Signup from "@diary-app/components/molecules/Form/Signup";
import React from "react";

export type Props = {
  className?: string;
};

const Login: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Signup />
    </div>
  );
};

export default Login;
