import React from "react";
import ReactDOM from "react-dom";
import s from "./style.css";
console.log(`You're in ${process.env.NODE_ENV} mode`);

function App() {
  return (
    <React.Fragment>
      <h1 className={s.blue}>Rifqi's Canvas</h1>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
