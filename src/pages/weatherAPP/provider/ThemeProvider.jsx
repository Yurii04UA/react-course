import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { changeCssRootVariables } from "../model/ChangeCssRootVariables";

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState("light");
  changeCssRootVariables(theme)
  const changeTheme= () => {
   setTheme(theme === 'light'? 'dark':'light');
   changeCssRootVariables(theme)
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
