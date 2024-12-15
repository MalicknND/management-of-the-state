import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

import "./App.css";
import { COLORS } from "./constants/colors";
import Header from "./components/Header/Header";

function App() {
  const [theme, setTheme] = useState({
    backgroundColor: COLORS.gradientOne.color,
    backgroundImage: COLORS.gradientOne.image,
  });

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
        <Header setTheme={setTheme} />
        {/* noteForm  */}
        <div style={{ marginTop: "100px" }}>
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
        </div>

        {/* notesContainer */}
        <footer
          className="bg-white rounded mt-3 p-3"
          style={{ minHeight: "300px" }}
        >
          {/* botes header  */}
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
            <button onClick={clearAll} className="btn btn-primary">
              Clear All
            </button>
          </div>

          {/* notelists */}
          <div className="mt-3 d-flex flex-wrap gap-2">
            {notes.map((note, index) => {
              return (
                <div
                  key={index}
                  className="p-3 rounded border-5 border-start border-primary"
                  style={{
                    height: 100,
                    minWidth: 300,
                    backgroundColor: "#dfdfdf",
                  }}
                >
                  <div className="d-flex justify-content-end gap-2">
                    <MdOutlineModeEdit
                      onClick={() => {
                        setNoteInput(note.title);
                        setSelectedNoteId(note);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                    <FaRegTrashCan
                      onClick={() => deleteNote(note.id)}
                      style={{ cursor: "pointer", color: "red" }}
                    />
                  </div>
                  <div>
                    <p className="m-0 fw-normal">{note.title}</p>
                    <span className="fw-light" style={{ fontSize: 12 }}>
                      {" "}
                      {new Date(note.date).toLocaleDateString()}{" "}
                      {new Date(note.date).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
