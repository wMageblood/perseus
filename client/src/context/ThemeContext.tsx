import { createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {

  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);

    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
}, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
};