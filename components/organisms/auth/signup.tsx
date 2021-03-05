import { useEffect } from "react";
import { useRouter } from "next/router";
import { default as SignupMolecule } from "@diary-app/components/molecules/Form/Signup";

import { auth } from "@diary-app/auth/firebase";
import { useAuth } from "@diary-app/auth";

export type Props = {};

const SignUp: React.FC<Props> = () => {
  const router = useRouter();
  const { signUp } = useAuth();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && router.push("/");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SignupMolecule onSend={signUp} />;
};

export default SignUp;
