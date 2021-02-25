import { DIARIES } from "@diary-app/endpoint";
import { useCallback, useEffect, useState } from "react";

export type DIARY = {
  id: string;
  title: string;
  date: string;
  blocks: Block[];
  timeTables: TimeTable[];
};

export type Block = {
  text: string;
};

export type TimeTable = {
  title: string;
  text: string;
  startTime: string;
  endTime: string;
};

export default () => {
  const [diaries, setDiaries] = useState<DIARY[] | undefined>(undefined);

  const fetchDiaries = useCallback(async (): Promise<DIARY[] | undefined> => {
    return await fetch(DIARIES, {
      mode: "cors",
    })
      .then(async res => {
        if (res.ok) {
          const resJSON = await res
            .json()
            .then(j => j)
            .catch(err => console.error(err));
          return resJSON;
        }
        console.error("Network error occured");
        return undefined;
      })
      .catch(err => {
        console.error(err);
        return undefined;
      });
  }, []);

  useEffect(() => {
    let unmounted = false;
    const execFetchDiaries = async () => {
      if (!unmounted) {
        const diaries = await fetchDiaries();
        setDiaries(diaries);
      }
    };
    execFetchDiaries();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { diaries };
};
