export const reducer = (state, action) => {
  // action is an object with a type and a payload (action: {type, payload})
  switch (action.type) {
    case "changeTheme":
      return { ...state, theme: action.payload };
    case "changeInput":
      return { ...state, noteInput: action.payload };
    case "resetInput":
      return { ...state, noteInput: "" };
    case "addNote":
      return {
        ...state,
        notes: [...state.notes, action.payload],
        noteInput: "",
      };
    case "setSelectedNoteId":
      return { ...state, selectedNoteId: action.payload };
    case "editNote":
      // on copie le tableau
      const notesCopy = [...state.notes];
      // on cherche la note à modifier
      const note = state.notes.findIndex(
        (note) => note.id === state.selectedNoteId.id
      );
      // on récupère l'index de la note
      const noteIndex = state.notes.findIndex(
        (note) => note.id === state.selectedNoteId.id
      );
      // on modifie la note
      let newNote = { ...note, title: state.noteInput };
      // on remplace l'ancienne note par la nouvelle
      notesCopy[noteIndex] = newNote;
      // on met à jour le state
      return {
        ...state,
        notes: notesCopy,
        noteInput: "",
        selectedNoteId: null,
      };
    default:
      throw new Error();
  }
};
