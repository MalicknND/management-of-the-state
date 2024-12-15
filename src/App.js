import { useReducer, useState } from "react";

import { COLORS } from "./constants/colors";
import Header from "./components/Header/Header";
import NoteForm from "./components/NoteForm";
import NotesContainer from "./components/NotesContainer/NotesContainer";
import { reducer } from "./reducer";

// initial state
const initialState = {
  theme: {
    backgroundColor: COLORS.gradientOne.color,
    backgroundImage: COLORS.gradientOne.image,
  },
  noteInput: "",
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (value) => {
    // mettre à jour le formulaire
    dispatch({ type: "changeInput", payload: value });
  };

  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const handleTheme = (theme) => {
    // mettre à jour le theme de l'application
    dispatch({ type: "changeTheme", payload: theme });
  };

  const addNote = (e) => {
    e.preventDefault();
    let newNote = {
      id: Math.floor(Math.random() * 1000),
      title: state.noteInput,
      date: Date.now(),
    };
    setNotes([...notes, newNote]);
    // reset form
    dispatch({ type: "resetInput" });
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
    let newNote = { ...note, title: state.noteInput };
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
    <div style={{ ...state.theme, height: "100dvh" }}>
      {/* Headerrr */}
      <div className="container py-3">
        <Header setTheme={handleTheme} />
        {/* noteForm  */}
        <div style={{ marginTop: "100px" }}>
          <NoteForm
            noteInput={state.noteInput}
            setNoteInput={handleChange}
            selectedNoteId={selectedNoteId}
            editNote={editNote}
            addNote={addNote}
          />
        </div>

        {/* notesContainer */}
        <NotesContainer
          notes={notes}
          setNoteInput={handleChange}
          setSelectedNoteId={setSelectedNoteId}
          deleteNote={deleteNote}
          clearAll={clearAll}
        />
      </div>
    </div>
  );
}

export default App;
