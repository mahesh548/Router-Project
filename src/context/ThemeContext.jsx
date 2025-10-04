import { createContext, useEffect, useState } from "react";

export const Theme = createContext();

function switchTheme(themeName) {
  localStorage.setItem("themeName", themeName);
  const html = document.documentElement;
  html.setAttribute("data-theme", themeName);
}

export function ThemeContext({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("themeName") || "dark"
  );
  useEffect(() => {
    switchTheme(theme);
  }, [theme]);
  return <Theme.Provider value={[theme, setTheme]}>{children}</Theme.Provider>;
}
