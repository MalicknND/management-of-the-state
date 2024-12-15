export const reducer = (state, action) => {
  // action is an object with a type and a payload (action: {type, payload})
  switch (action.type) {
    case "changeTheme":
      return { ...state, theme: action.payload };
    case "changeInput":
      return { ...state, noteInput: action.payload };
    case "resetInput":
      return { ...state, noteInput: "" };
    default:
      throw new Error();
  }
};
