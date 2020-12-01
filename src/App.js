import React from "react";
import Board from "./components/Board";
import "./styles/tailwind.css";

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
        rel="stylesheet"
      />
      <Board />
    </div>
  );
}

export default App;
