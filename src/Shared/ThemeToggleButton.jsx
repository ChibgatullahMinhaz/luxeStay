import React from "react";
import useTheme from "../Hooks/useTheme";

const ThemeToggleButton = () => {
  const { theme, themeToggler } = useTheme();

  return (
    <button onClick={themeToggler} className="p-2 bg-gray-300 dark:bg-gray-800">
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default ThemeToggleButton;
