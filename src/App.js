import { useContext, useState } from "react";

import Header from "./components/Header/Header";
import NoteForm from "./components/NoteForm";
import NotesContainer from "./components/NotesContainer/NotesContainer";
import { NoteContext } from "./components/context/NoteContextProvider";

function App() {
  const { theme } = useContext(NoteContext);

  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const addNote = (e) => {
    e.preventDefault();
    let newNote = {
      id: Math.floor(Math.random() * 1000),
      title: noteInput,
      date: Date.now(),
    };
    setNotes([...notes, newNote]);
    setNoteInput("");
  };

  const editNote = (e) => {
    e.preventDefault();
    // on copie le tableau
    const notesCopy = [...notes];
    // on cherche la note à modifier
    const note = notes.find((note) => note.id === selectedNoteId.id);
    // on récupère l'index de la note
    const noteIndex = notes.findIndex((note) => note.id === selectedNoteId.id);
    // on modifie la note
    let newNote = { ...note, title: noteInput };
    // on remplace l'ancienne note par la nouvelle
    notesCopy[noteIndex] = newNote;
    // on met à jour le state
    setNotes(notesCopy);
    setNoteInput("");
    setSelectedNoteId(null);
  };

  // delete note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  // Clear all notes
  const clearAll = () => {
    setNotes([]);
  };

  return (
    <div style={{ ...theme, height: "100dvh" }}>
      {/* Headerrr */}
      <div className="container py-3">
        <Header />
        {/* noteForm  */}
        <div style={{ marginTop: "100px" }}>
          <NoteForm
            noteInput={noteInput}
            setNoteInput={setNoteInput}
            selectedNoteId={selectedNoteId}
            editNote={editNote}
            addNote={addNote}
          />
        </div>

        {/* notesContainer */}
        <NotesContainer
          notes={notes}
          setNoteInput={setNoteInput}
          setSelectedNoteId={setSelectedNoteId}
          deleteNote={deleteNote}
          clearAll={clearAll}
        />
      </div>
    </div>
  );
}

export default App;
