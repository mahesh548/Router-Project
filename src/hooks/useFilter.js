import { useState } from "react";

export default function useFilter(
  data,
  cb = (item, query) => {
    return item;
  }
) {
  const [filtered, setFiltered] = useState(data);
  const searchFilter = (query) => {
    if (!query) {
      setFiltered(data);
      return;
    }
    setFiltered(data.filter((item) => cb(item, query)));
  };
  return [filtered, searchFilter];
}
