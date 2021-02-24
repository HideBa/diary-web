import React from "react";

export type Props = {
  className?: string;
};

const DiaryPage: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};

export default DiaryPage;
