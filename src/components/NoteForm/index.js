import React, { useContext } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { NoteContext } from "../context/NoteContextProvider";

const NoteForm = () => {
  const { noteInput, setNoteInput, addNote, selectedNoteId, editNote } =
    useContext(NoteContext);
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
