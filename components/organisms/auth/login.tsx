import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@diary-app/auth/firebase";
import { default as LoginMolecule } from "@diary-app/components/molecules/Form/Login";

export type Props = {
  className?: string;
};

const Login: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && router.push("/");
    });
  }, []);

  const logIn = async (email: string, password: string) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return <LoginMolecule onSend={logIn} />;
};

export default Login;
