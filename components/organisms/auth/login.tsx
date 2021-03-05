import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "@diary-app/auth/firebase";
import { default as LoginMolecule } from "@diary-app/components/molecules/Form/Login";
import { useAuth } from "@diary-app/auth";

export type Props = {
  className?: string;
};

const Login: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const { logIn } = useAuth();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && router.push("/");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <LoginMolecule onSend={logIn} className={className} />;
};

export default Login;
