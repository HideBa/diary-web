import Diary from "@diary-app/components/organisms/diary";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { useRouter } from "next/router";
import React from "react";

export type Props = {
  className?: string;
};

const DiaryPage: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn, firebase }) => {
        if (!isSignedIn) {
          router.push("/login");
          return null;
        }
        return <Diary />;
      }}
    </FirebaseAuthConsumer>
  );
};

export default DiaryPage;
