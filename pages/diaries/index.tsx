import { config } from "@diary-app/auth/firebase";
import Diary from "@diary-app/components/organisms/diary";
import { useRouter } from "next/router";
import React from "react";

export type Props = {
  className?: string;
};

const DiaryPage: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  return (
    // <div>
    //   <IfFirebaseAuthed>{() => <Diary />}</IfFirebaseAuthed>
    //   <IfFirebaseUnAuthed>{() => <div>nonono</div>}</IfFirebaseUnAuthed>
    // </div>
    <Diary />
  );
};

export default DiaryPage;
