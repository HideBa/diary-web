import { DIARIES } from "@diary-app/endpoint";
import { useCallback } from "react";
type DIARY = {
  hoge: string;
  fuga: string;
};

export default () => {
  const fetchDiaries = useCallback(async () => {
    const data: Promise<DIARY | null> = await fetch(DIARIES)
      .then(async res => {
        if (res.ok) {
          const resJSON = await res
            .json()
            .then(j => j)
            .catch(err => console.error(err));
          return resJSON;
        }
        console.error("some error occured");
        return null;
      })
      .catch(err => {
        console.error(err);
        return null;
      });
    return data;
  }, []);
  return {};
};
