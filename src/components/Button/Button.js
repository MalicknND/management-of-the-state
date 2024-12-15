import React from "react";

const Button = ({ onClick, title, className }) => {
  return (
    <button onClick={onClick} className={`btn ${className} px-4`}>
      {title}
    </button>
  );
};

export default Button;
