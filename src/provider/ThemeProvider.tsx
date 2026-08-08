import { useEffect } from "react";
import { ThemeContext } from "../context/theme.context.tsx";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode: true, setIsDarkMode: () => undefined }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
