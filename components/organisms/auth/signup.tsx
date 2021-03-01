import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { default as SignupMolecule } from "@diary-app/components/molecules/Form/Signup";

import { auth } from "@diary-app/auth/firebase";

export type Props = {};

const SignUp: React.FC<Props> = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && router.push("/");
    });
  }, []);

  const signUp = async (email: string, password: string) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return <SignupMolecule onSend={signUp} />;
};

export default SignUp;
