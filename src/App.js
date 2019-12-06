import React from "react";
import Board from "./components/Board";
import values from "./values";
import { useMedia } from "./hooks/useMedia";

const getRandomValues = values => {
  let newArray = [];

  while (newArray.length < 25 || !values.length) {
    const randomIndex = Math.floor(values.length * Math.random());
    newArray.push(values.splice(randomIndex, 1));
  }

  return newArray;
};

const createMatrix = arr => {
  let newArray = [];

  while (arr.length) {
    newArray.push(arr.splice(0, 5));
  }

  return newArray;
};

function App() {
  // const gutter = useMedia(["(min-width: 768px)"], [30], 15);
  const gutter = 5;
  let cards = createMatrix(getRandomValues(values));

  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900,900italic"
        rel="stylesheet"
      ></link>
      <Board cards={cards} gutter={gutter} />

      <style jsx global>{`
        html,
        body,
        .App {
          height: 100vh;
          width: 100vw;
          margin: 0;
          overflow: scroll;
          padding: 0;
        }

        html {
           {
            /* background: linear-gradient(
            0deg,
            rgba(0, 0, 200, 0.2),
            rgba(0, 0, 200, 0)
          ); */
          }
        }

        body {
           {
            /* background: linear-gradient(
            120deg,
            rgba(50, 150, 100, 0.2),
            rgba(0, 0, 100, 0)
          ); */
          }
          background: #f8f9fa;
          font-family: "Lato", "Lucida Grande", "Lucida Sans Unicode", Tahoma,
            Sans-Serif;
          color: #292e31;

          font-weight: 900;
          font-size: 14px;
        }

        .App {
           {
            /* background: linear-gradient(
            240deg,
            rgba(150, 50, 50, 0.3),
            rgba(0, 0, 200, 0)
          ); */
          }
        }
      `}</style>
    </div>
  );
}

export default App;
