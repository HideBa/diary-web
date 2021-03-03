import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { default as SignupMolecule } from "@diary-app/components/molecules/Form/Signup";

import { auth } from "@diary-app/auth/firebase";
import { useAuth } from "@diary-app/auth";

export type Props = {};

const SignUp: React.FC<Props> = () => {
  const router = useRouter();
  const { signUp } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && router.push("/");
    });
  }, []);

  return <SignupMolecule onSend={signUp} />;
};

export default SignUp;
