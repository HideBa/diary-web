import { auth } from "./firebase";

export default () => {
  const logout = () => {
    auth.signOut();
  };
  return { logout };
};
