import { useState } from "react";
import "./App.css";
import { COLORS } from "./constants/colors";

function App() {
  const [theme, setTheme] = useState({
    backgroundColor: COLORS.gradientOne.color,
    backgroundImage: COLORS.gradientOne.image,
  });

  return (
    <div style={{ ...theme, height: "100dvh" }}>
      {/* Headerrr */}
      <div className="container py-3">
        <header className="bg-white d-flex justify-content-between align-items-center rounded p-3">
          <h1 className="fs-5 fw-normal">Notes</h1>
          <div className="d-flex gap-2">
            <span
              onClick={() => {
                setTheme({
                  backgroundColor: COLORS.gradientOne.color,
                  backgroundImage: COLORS.gradientOne.image,
                });
              }}
              style={{
                cursor: "pointer",
                display: "inline-block",
                width: 25,
                height: 25,
                borderRadius: "50%",
                backgroundColor: COLORS.gradientOne.color,
                backgroundImage: COLORS.gradientOne.image,
              }}
            ></span>
            <span
              onClick={() => {
                setTheme({
                  backgroundColor: COLORS.gradientTwo.color,
                  backgroundImage: COLORS.gradientTwo.image,
                });
              }}
              style={{
                cursor: "pointer",
                display: "inline-block",
                width: 25,
                height: 25,
                borderRadius: "50%",
                backgroundColor: COLORS.gradientTwo.color,
                backgroundImage: COLORS.gradientTwo.image,
              }}
            ></span>
            <span
              onClick={() => {
                setTheme({
                  backgroundColor: COLORS.gradientThree.color,
                  backgroundImage: COLORS.gradientThree.image,
                });
              }}
              style={{
                cursor: "pointer",
                display: "inline-block",
                width: 25,
                height: 25,
                borderRadius: "50%",
                backgroundColor: COLORS.gradientThree.color,
                backgroundImage: COLORS.gradientThree.image,
              }}
            ></span>
            <span
              onClick={() => {
                setTheme({
                  backgroundColor: COLORS.gradientFour.color,
                  backgroundImage: COLORS.gradientFour.image,
                });
              }}
              style={{
                cursor: "pointer",
                display: "inline-block",
                width: 25,
                height: 25,
                borderRadius: "50%",
                backgroundColor: COLORS.gradientFour.color,
                backgroundImage: COLORS.gradientFour.image,
              }}
            ></span>
            <span
              onClick={() => {
                setTheme({
                  backgroundColor: COLORS.gradientFive.color,
                  backgroundImage: COLORS.gradientFive.image,
                });
              }}
              style={{
                cursor: "pointer",
                display: "inline-block",
                width: 25,
                height: 25,
                borderRadius: "50%",
                backgroundColor: COLORS.gradientFive.color,
                backgroundImage: COLORS.gradientFive.image,
              }}
            ></span>
            <span
              onClick={() => {
                setTheme({
                  backgroundColor: COLORS.gradientSix.color,
                  backgroundImage: COLORS.gradientSix.image,
                });
              }}
              style={{
                cursor: "pointer",
                display: "inline-block",
                width: 25,
                height: 25,
                borderRadius: "50%",
                backgroundColor: COLORS.gradientSix.color,
                backgroundImage: COLORS.gradientSix.image,
              }}
            ></span>
          </div>
        </header>
        {/* noteForm  */}
        <div style={{ marginTop: "100px" }}>
          <form className="py-4 px-3 bg-white rounded">
            <div className="d-flex gap">
              <input
                type="text"
                className="form-control"
                placeholder="Add note"
                aria-label="note"
              />
              <button className="btn btn-success">Add</button>
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
                3
              </span>
            </div>
            <button className="btn btn-primary">Clear All</button>
          </div>

          {/* notelists */}
          <div className="mt-3 d-flex flex-wrap gap-2">
            <div
              className="d-flex p-3 rounded border-5 border-start border-primary"
              style={{ height: 100, minWidth: 300, backgroundColor: "#dfdfdf" }}
            >
              <div>
                <p className="m-0 fw-normal">Note title</p>
                <span className="fw-light" style={{ fontSize: 12 }}>
                  {" "}
                  12/12/2024 10 : 12
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
