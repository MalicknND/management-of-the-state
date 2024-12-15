import { createContext, useState } from "react";
import { COLORS } from "../../constants/colors";

export const NoteContext = createContext({});

export const NoteContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: COLORS.gradientOne.color,
    backgroundImage: COLORS.gradientOne.image,
  });
  const value = {
    theme,
    setTheme,
  };
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
export default NoteContextProvider;
