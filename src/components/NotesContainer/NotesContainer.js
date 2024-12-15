import NotesHeader from "./NotesHeader";
import NotesList from "./NotesList";

const NotesContainer = () => {
  return (
    <footer
      className="bg-white rounded mt-3 p-3"
      style={{ minHeight: "300px" }}
    >
      <NotesHeader />
      <NotesList />
    </footer>
  );
};

export default NotesContainer;
