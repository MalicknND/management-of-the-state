import React, { useContext } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { NoteContext } from "../context/NoteContextProvider";

// un seul item
const NoteItem = ({ deleteNote, note }) => {
  const { setSelectedNoteId, setNoteInput } = useContext(NoteContext);
  return (
    <div
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
};

// liste des notes
const NotesList = ({ deleteNote }) => {
  const { notes } = useContext(NoteContext);
  return (
    <div className="mt-3 d-flex flex-wrap gap-2">
      {notes.map((note, index) => {
        return <NoteItem key={index} note={note} deleteNote={deleteNote} />;
      })}
    </div>
  );
};

export default NotesList;
