import { useTheme } from "../../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button aria-label="Toggle Theme" onClick={toggleTheme}>
        <div className={`w-20 h-10 relative rounded-full flex items-center bg-[#e8e9e3] dark:bg-[#22262D]`}>
          <div className={`duration-300 ${theme === "dark" ? "translate-x-12" : "translate-x-2"}`}>
            {theme === "dark" ? <Moon className="text-[#e8e9e3]" /> : <Sun /> }
          </div>
        </div>
      </button>
    </div>
  )
};