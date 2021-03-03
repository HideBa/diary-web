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
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && router.push("/");
    });
  }, []);

  return <LoginMolecule onSend={logIn} className={className} />;
};

export default Login;
