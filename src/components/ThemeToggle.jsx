import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/ultis";

export const ThemeToggle = () => {
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light") {
            setIsLightMode(true);
            document.documentElement.classList.add("light");
        } else {
            localStorage.setItem("theme", "dark");
            setIsLightMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isLightMode) {
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
            setIsLightMode(false);
        } else {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
            setIsLightMode(true);
        }
    };

    return (
        <button onClick={toggleTheme} className={cn("fixed top-1 right-5 z-50 cursor-pointer rounded-full p-2 transition-colors duration-300 max-sm:hidden", "focus:outline-hidden")}>
            {isLightMode ? <Moon className="h-6 w-6 text-blue-900" /> : <Sun className="h-6 w-6 text-yellow-300" />}
        </button>
    );
};
