import { currentUser, loading } from "@diary-app/localState/recoil/atom";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { auth } from "./firebase";

export default () => {
  const router = useRouter();
  const [userState, setUserState] = useRecoilState(currentUser);
  const [loadingState, setLoadingState] = useRecoilState(loading);

  const signUp = async (email: string, password: string) => {
    setLoadingState(true);
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
    setLoadingState(false);
  };

  const logIn = async (email: string, password: string) => {
    setLoadingState(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
    setLoadingState(false);
  };

  const logout = async () => {
    setLoadingState(true);
    try {
      auth.signOut();
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
    setLoadingState(false);
  };

  const resetPassword = async (email: string) => {
    if (!process.env.APP_URL) return;

    setLoadingState(true);
    const actionCodeSettings = {
      url: process.env.APP_URL,
    };
    try {
      auth.sendPasswordResetEmail(email, actionCodeSettings);
    } catch (err) {
      console.error(err);
    }
    setLoadingState(false);
  };

  const sendEmailValidation = async () => {
    if (!process.env.APP_URL) return;
    const actionCodeSettings = {
      url: process.env.APP_URL,
    };
    try {
      userState?.sendEmailVerification(actionCodeSettings);
    } catch (err) {
      console.error(err);
    }
  };

  const updatePassowrd = async (password: string) => {
    setLoadingState(true);
    try {
      await userState?.updatePassword(password);
    } catch (err) {
      console.error(err);
    }
    setLoadingState(false);
  };

  const updateEmail = async (email: string) => {
    setLoadingState(true);
    try {
      await userState?.updateEmail(email);
    } catch (err) {
      console.error(err);
    }
    setLoadingState(false);
  };

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUserState(user);
    });
  });

  return {
    isLoading: loadingState,
    logIn,
    signUp,
    logout,
    resetPassword,
    updateEmail,
    updatePassowrd,
    sendEmailValidation,
  };
};
