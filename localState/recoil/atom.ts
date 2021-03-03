import { atom } from "recoil";
import firebase from "firebase/app";

export type CurrentUser = firebase.User | null | undefined;

export const currentUser = atom<CurrentUser>({
  key: "currentUser",
  default: undefined,
});

export const loading = atom<boolean>({
  key: "loading",
  default: false,
});
