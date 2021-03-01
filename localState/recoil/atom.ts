import { atom } from "recoil";

export type CurrentUser = {
  username?: string;
};

export const currentUser = atom({
  key: "currentUser",
  default: { username: undefined },
});
