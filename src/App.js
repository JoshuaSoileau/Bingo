import React from "react";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <Board />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <style jsx global>{`
        .body {
          padding: 0;
          margin: 0;
        }
        p {
          font-size: 20px;
        }
      `}</style>

      <style jsx>{`
        .App {
          background: linear-gradient(
            240deg,
            rgba(150, 50, 50, 0.3),
            rgba(0, 0, 200, 0)
          );
          overflow: scroll;
          height: 100vh;
          width: 100vw;
        }
      `}</style>
    </div>
  );
}

export default App;
