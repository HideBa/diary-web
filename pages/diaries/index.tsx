import Diary from "@diary-app/components/organisms/diary";
import React from "react";

export type Props = {
  className?: string;
};

const DiaryPage: React.FC<Props> = ({ className }) => {
  return <Diary />;
};

export default DiaryPage;
