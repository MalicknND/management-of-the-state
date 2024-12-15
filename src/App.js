import { useContext } from "react";

import Header from "./components/Header/Header";
import NoteForm from "./components/NoteForm";
import NotesContainer from "./components/NotesContainer/NotesContainer";
import { NoteContext } from "./components/context/NoteContextProvider";

function App() {
  const { theme } = useContext(NoteContext);

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
        <NotesContainer />
      </div>
    </div>
  );
}

export default App;
