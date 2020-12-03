/* eslint-disable no-restricted-globals */
import React from "react";
import "twin.macro";
import "./styles/tailwind.css";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { getInitialState } from "./values";

import Octocat from "./components/Octocat";
import Background from "./components/Background";
import Board from "./components/Board";
import Head from "./components/Head";
import Snow from "./components/Snow";

function App() {
  const [, setState] = useLocalStorage("state", getInitialState());
  const refresh = () => setState(getInitialState());

  return (
    <div tw="flex flex-col min-h-screen justify-evenly bg-gradient-to-b to-lightBlue-200 from-lightBlue-800 relative">
      <Head />
      <Octocat />

      <div tw="max-w-4xl mx-auto lg:ml-32 relative z-10">
        <h1 tw="px-4 md:px-0 font-serif font-extrabold text-5xl lg:text-6xl text-red-600 flex flex-col md:flex-row justify-between items-start mb-8">
          <strong className="headline">Hallmark Movie Bingo!</strong>
          <button
            tw="block my-6 md:my-0 order-first md:order-last"
            type="button"
            onClick={() => {
              if (confirm("Are you sure you want to refresh your tiles?"))
                refresh();
            }}
            aria-label="Refresh tiles?"
          >
            <span role="img" aria-label="Refresh icon">
              🔄
            </span>
          </button>
        </h1>

        <p
          tw="text-lg md:text-2xl text-lightBlue-700 mb-12  px-4 md:px-0"
          style={{ filter: "drop-shadow(-2px 1px 0px white)" }}
        >
          Because these movies are just unbearable
          <br tw="hidden md:block" />
          to watch otherwise...
        </p>

        <Board />
      </div>

      <Background />
      <Snow />
    </div>
  );
}

export default App;
