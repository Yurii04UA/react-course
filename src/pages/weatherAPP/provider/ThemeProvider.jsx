import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState("light");
  const changeTheme= () => {
   setTheme(theme === 'light'? 'dark':'light');
  }
  return (
    <ThemeContext.Provider value={{ 
      theme, 
      changeTheme 
      }} 
      {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
