import React from "react";

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
        <input
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Add note"
          aria-label="note"
        />
        {selectedNoteId ? (
          <button onClick={editNote} className="btn btn-warning">
            Update
          </button>
        ) : (
          <button onClick={addNote} className="btn btn-success">
            Add
          </button>
        )}
      </div>
    </form>
  );
};

export default NoteForm;
