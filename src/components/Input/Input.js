import React from "react";

const Input = ({ value, onInputChange }) => {
  return (
    <input
      value={value}
      onChange={onInputChange}
      type="text"
      className="form-control"
      placeholder="Add note"
      aria-label="note"
    />
  );
};

export default Input;
