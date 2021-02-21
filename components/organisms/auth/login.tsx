import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@diary-app/auth/firebase";

export type Props = {
  className?: string;
};

const Login: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && router.push("/");
    });
  }, []);

  const logIn = async () => {
    // e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return <div className={className}></div>;
};

export default Login;
