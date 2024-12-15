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
  notes: [],
  selectedNoteId: null,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const handleChange = (value) => {
    // mettre à jour le formulaire
    dispatch({ type: "changeInput", payload: value });
  };

  const [notes, setNotes] = useState([]);
  // const [selectedNoteId, setSelectedNoteId] = useState(null);

  const handleTheme = (theme) => {
    // mettre à jour le theme de l'application
    dispatch({ type: "changeTheme", payload: theme });
  };

  const handleSelectedNoteId = (id) => {
    dispatch({ type: "setSelectedNoteId", payload: id });
  };

  const addNote = (e) => {
    e.preventDefault();
    let newNote = {
      id: Math.floor(Math.random() * 1000),
      title: state.noteInput,
      date: Date.now(),
    };
    // ajouter la note au tableau
    dispatch({ type: "addNote", payload: newNote });
  };

  const editNote = (e) => {
    e.preventDefault();
    dispatch({ type: "editNote" });
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
            selectedNoteId={state.selectedNoteId}
            editNote={editNote}
            addNote={addNote}
          />
        </div>

        {/* notesContainer */}
        <NotesContainer
          notes={state.notes}
          setNoteInput={handleChange}
          setSelectedNoteId={handleSelectedNoteId}
          deleteNote={deleteNote}
          clearAll={clearAll}
        />
      </div>
    </div>
  );
}

export default App;
