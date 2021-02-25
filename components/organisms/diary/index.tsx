import React from "react";
import useHooks from "./hooks";

export type Props = {
  className?: string;
};

const Diary: React.FC<Props> = ({ className }) => {
  const { diaries } = useHooks();
  console.log(diaries);
  return (
    <div className={className}>
      {diaries?.map(d => {
        return <div key={d.id}>{d.title}</div>;
      })}
    </div>
  );
};

export default Diary;
