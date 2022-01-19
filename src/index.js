import React from "react";
import ReactDOM from "react-dom";
import s from "./style.css";
import gif from "./asset/letsgetreal.gif";

console.log(`You're in ${process.env.NODE_ENV} mode`);

function App() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className={s.blue}>Rifqi's Canvas</h1>
        <img src={gif} alt="banner" style={{ minWidth: 200, maxWidth: 400 }} />
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
