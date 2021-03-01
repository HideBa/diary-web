import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { useRouter } from "next/router";
import React from "react";

export type Props = {
  children?: React.ReactNode;
};

// TODO: fix this component and use for all components
const AuthenticationRequiredPage: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn, user, providerId }) => {
        if (!isSignedIn) {
          router.push("/login");
          return null;
        }
        return children;
      }}
    </FirebaseAuthConsumer>
  );
};

export default AuthenticationRequiredPage;
