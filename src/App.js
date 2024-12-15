import { useContext, useState } from "react";

import Header from "./components/Header/Header";
import NoteForm from "./components/NoteForm";
import NotesContainer from "./components/NotesContainer/NotesContainer";
import { NoteContext } from "./components/context/NoteContextProvider";

function App() {
  const { theme } = useContext(NoteContext);

  // // delete note
  // const deleteNote = (id) => {
  //   const newNotes = notes.filter((note) => note.id !== id);
  //   setNotes(newNotes);
  // };

  // // Clear all notes
  // const clearAll = () => {
  //   setNotes([]);
  // };

  return (
    <div style={{ ...theme, height: "100dvh" }}>
      {/* Headerrr */}
      <div className="container py-3">
        <Header />
        {/* noteForm  */}
        <div style={{ marginTop: "100px" }}>
          <NoteForm />
        </div>

        {/* notesContainer */}
        <NotesContainer deleteNote={() => {}} clearAll={() => {}} />
      </div>
    </div>
  );
}

export default App;
