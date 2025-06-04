import React from "react";
import useTheme from "../Hooks/useTheme";
import { MoonStar, Sun } from "lucide-react";

const ThemeToggleButton = () => {
  const { theme, themeToggler } = useTheme();

  return (
    <button onClick={themeToggler} className="cursor-pointer" >
      {theme === "light" ? <MoonStar className="bg-[#EFF6FF] text-[#2563EB]" />  : <Sun className=" text-amber-50"/>} 
    </button>
  );
};

export default ThemeToggleButton;
