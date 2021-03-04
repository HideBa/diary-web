import React from "react";
import Link from "next/link";

// import { auth } from "@diary-app/auth/firebase";
export type Props = {};

const Home: React.FC<Props> = ({}) => {
  return (
    <div>
      <Link href="/signup">
        <a>sign up</a>
      </Link>
      <br />
      <Link href="/login">
        <a>login</a>
      </Link>
    </div>
  );
};

export default Home;
