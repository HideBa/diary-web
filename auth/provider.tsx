import React, { createContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import { auth } from "./firebase";

type CurrentUser = firebase.User | null | undefined;

export type AuthContextProps = {
  currentUser: CurrentUser;
};

export const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(undefined);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
