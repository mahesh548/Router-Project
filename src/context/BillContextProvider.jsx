import { createContext, useState } from "react";

export const BillContext = createContext({});

export function BillContextProvider({ children }) {
  const [expenseList, setExpenseList] = useState([
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
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
  });
  return (
    <BillContext.Provider
      value={{ expenseList, setExpenseList, formData, setFormData }}
    >
      {children}
    </BillContext.Provider>
  );
}
