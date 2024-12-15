import React from "react";

const Theme = ({ setTheme, bgColor, bgImage }) => {
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
