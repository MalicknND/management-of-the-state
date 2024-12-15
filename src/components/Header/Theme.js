import React, { useContext } from "react";
import { NoteContext } from "../context/NoteContextProvider";

const Theme = ({ bgColor, bgImage }) => {
  const { setTheme } = useContext(NoteContext);
  return (
    <span
      onClick={() => {
        setTheme({
          backgroundColor: bgColor,
          backgroundImage: bgImage,
        });
      }}
      style={{
        cursor: "pointer",
        display: "inline-block",
        width: 25,
        height: 25,
        borderRadius: "50%",
        backgroundColor: bgColor,
        backgroundImage: bgImage,
      }}
    ></span>
  );
};

export default Theme;
