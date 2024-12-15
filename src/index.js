import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NoteContextProvider from "./components/context/NoteContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NoteContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NoteContextProvider>
);
