import { useEffect, useState } from "react";

export default function useFilter(
  data,
  cb = (item) => {
    return item;
  }
) {
  const [filtered, setFiltered] = useState(data);
  useEffect(() => {
    setFiltered(data);
  }, [data]);
  const searchFilter = (query) => {
    if (!query) {
      setFiltered(data);
      return;
    }
    setFiltered(data.filter((item) => cb(item) == query));
  };
  return [filtered, searchFilter];
}
