import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Canvas from "./Canvas";
import Game from "./App";

const config = {
  backgroundColor: 0xffffff,
  antialias: true,
};
type Color =
  | "blue"
  | "red"
  | "yellow"
  | "green"
  | "orange"
  | "purple"
  | "indigo";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <div>
      <Canvas init={(app) => Game(app, color as Color)} {...config} />
      <div
        style={{
          position: "absolute",
        }}
        ref={(ref: HTMLDivElement) => {
          if (!ref || !ref.parentElement) {
            return;
          }
          const { offsetWidth, offsetHeight, offsetTop } = ref.parentElement;
          Object.assign(ref.style, {
            top: `${offsetTop}px`,
            width: `${offsetWidth}px`,
            height: `${offsetHeight}px`,
          });
        }}
      >
        <select name="color" onChange={(event) => setColor(event.target.value)}>
          {["blue", "red", "yellow", "green", "orange", "purple", "indigo"].map(
            (value) => (
              <option key={value} value={value}>
                {value}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
