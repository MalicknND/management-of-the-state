import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const NoteForm = ({
  noteInput,
  setNoteInput,
  selectedNoteId,
  editNote,
  addNote,
}) => {
  return (
    <form className="py-4 px-3 bg-white rounded">
      <div className="d-flex gap-2">
        <Input
          value={noteInput}
          onInputChange={(e) => setNoteInput(e.target.value)}
        />
        {selectedNoteId ? (
          <Button onClick={editNote} title="Edit" className="btn-warning" />
        ) : (
          <Button onClick={addNote} title="Add" className="btn-primary" />
        )}
      </div>
    </form>
  );
};

export default NoteForm;
