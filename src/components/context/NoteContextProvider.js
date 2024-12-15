import { createContext, useState } from "react";
import { COLORS } from "../../constants/colors";

export const NoteContext = createContext({});

export const NoteContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: COLORS.gradientOne.color,
    backgroundImage: COLORS.gradientOne.image,
  });
  const [noteInput, setNoteInput] = useState("");
  const [notes, setNotes] = useState([]);
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

  const value = {
    theme,
    setTheme,
    noteInput,
    setNoteInput,
    notes,
    setNotes,
    addNote,
    editNote,
    selectedNoteId,
    setSelectedNoteId,
    deleteNote,
    clearAll,
  };
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
export default NoteContextProvider;
