import React from "react";

import NotesHeader from "./NotesHeader";
import NotesList from "./NotesList";

const NotesContainer = ({
  notes,
  clearAll,
  setNoteInput,
  setSelectedNoteId,
  deleteNote,
}) => {
  return (
    <footer
      className="bg-white rounded mt-3 p-3"
      style={{ minHeight: "300px" }}
    >
      <NotesHeader clearAll={clearAll} notes={notes} />
      <NotesList
        notes={notes}
        setNoteInput={setNoteInput}
        setSelectedNoteId={setSelectedNoteId}
        deleteNote={deleteNote}
      />
    </footer>
  );
};

export default NotesContainer;
