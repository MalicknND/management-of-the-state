import React from "react";
import Button from "../Button/Button";

const NotesHeader = ({ notes, clearAll }) => {
  return (
    <div className="d-flex justify-content-between border-bottom py-3">
      <div className="d-flex gap-2">
        <span className="fw-bold">Notes</span>
        <span
          style={{
            display: "inline-block",
            width: 25,
            height: 25,
            borderRadius: "50%",
            backgroundColor: "#dfdfdf",
            textAlign: "center",
          }}
        >
          {notes.length}
        </span>
      </div>

      <Button onClick={clearAll} title="Clear All" className="btn-primary" />
    </div>
  );
};

export default NotesHeader;
