import React from "react";
import Link from "next/link";
import { useAuth } from "@diary-app/auth";
import { useRecoilState } from "recoil";
import { currentUser } from "@diary-app/localState/recoil/atom";

// import { auth } from "@diary-app/auth/firebase";
export type Props = {};

const Home: React.FC<Props> = () => {
  const { logout } = useAuth();
  const [user, setUser] = useRecoilState(currentUser);
  console.log(user);
  return (
    <div>
      <Link href="/signup">
        <a>sign up</a>
      </Link>
      <br />
      <Link href="/login">
        <a>login</a>
      </Link>
      <br />
      <button onClick={logout}>logout</button>
      <br />
      {/* <div>{user}</div> */}
    </div>
  );
};

export default Home;
