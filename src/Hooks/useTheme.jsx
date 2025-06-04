import React, { useContext } from "react";
import { ThemeContext } from "../Store/Context/ThemeContext";

const useTheme = () => {
  const themHook = useContext(ThemeContext);
  return themHook;
};

export default useTheme;
