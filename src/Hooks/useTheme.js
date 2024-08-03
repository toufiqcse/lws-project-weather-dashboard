import { useState } from "react";
const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  return { darkMode, setDarkMode };
};

export default useTheme;
