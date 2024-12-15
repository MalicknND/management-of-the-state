import { useContext } from "react";
import NotesHeader from "./NotesHeader";
import NotesList from "./NotesList";
import { NoteContext } from "../context/NoteContextProvider";

const NotesContainer = ({ clearAll, deleteNote }) => {
  return (
    <footer
      className="bg-white rounded mt-3 p-3"
      style={{ minHeight: "300px" }}
    >
      <NotesHeader clearAll={clearAll} />
      <NotesList deleteNote={deleteNote} />
    </footer>
  );
};

export default NotesContainer;
