import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const BillContext = createContext({});

export function BillContextProvider({ children }) {
  const [expenseList, setExpenseList] = useLocalStorage("expenseList", [
    {
      title: "test",
      category: "test category",
      price: "100",
      serial: "1",
      id: crypto.randomUUID(),
    },
    {
      title: "test",
      category: "test category",
      price: "100",
      serial: "2",
      id: crypto.randomUUID(),
    },
  ]);
  const [formData, setFormData] = useLocalStorage("formData", {
    title: "",
    price: "",
    category: "",
  });

  const [editId, setEditId] = useLocalStorage("editId", "");

  return (
    <BillContext.Provider
      value={{
        expenseList,
        setExpenseList,
        formData,
        setFormData,
        editId,
        setEditId,
      }}
    >
      {children}
    </BillContext.Provider>
  );
}
