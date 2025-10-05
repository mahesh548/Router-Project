import { useState } from "react";

export default function useLocalStorage(key, initialData) {
  let localData = JSON.parse(localStorage.getItem(key)) || initialData;
  const [data, setData] = useState(localData);
  const updateData = (newData) => {
    console.log(newData);
    if (typeof newData === "function") {
      let upData = newData(data);
      localStorage.setItem(key, JSON.stringify(upData));
      setData(upData);
      return;
    }
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, updateData];
}
