/* eslint-disable no-restricted-globals */
import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { getInitialState } from "./values";
import { classnames } from "./utils";
import { getColorClass } from "./colors";
import "./styles/tailwind.css";
import Snow from "./Snow";
import Octocat from "./Octocat";

function App() {
  const [state, setState] = useLocalStorage("state", getInitialState());

  const refresh = () => setState(getInitialState());

  const toggle = (key) =>
    setState({
      ...state,
      [key]: !state[key],
    });

  return (
    <div className="flex flex-col min-h-screen justify-evenly bg-gradient-to-b from-lightBlue-200 to-indigo-300 relative">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
        rel="stylesheet"
      />

      <Octocat />

      <div className="max-w-4xl mx-auto">
        <h1 className="px-4 md:px-0 font-serif font-extrabold text-5xl lg:text-6xl text-red-600 flex flex-col md:flex-row justify-between items-start mb-8">
          <strong className="headline">Hallmark Movie Bingo!</strong>
          <button
            className="block my-6 md:my-0 order-first md:order-last"
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
          className="text-lg md:text-2xl text-lightBlue-700 mb-12  px-4 md:px-0"
          style={{ filter: "drop-shadow(-2px 1px 0px white)" }}
        >
          Because these movies are just unbearable
          <br className="hidden md:block" />
          to watch otherwise...
        </p>

        <ul className="grid grid-cols-5 grid-rows-5 gap-0">
          {Object.entries(state).map(([key, value], index) => {
            const row = Math.floor(index / 5);
            const column = index % 5;

            const buttonClassName = classnames(
              "h-full flex items-center text-left w-full",
              "text-xs md:text-sm lg:text-normal",
              "p-2 sm:p-4 md:py-8 lg:py-12",
              "focus:outline-none",
              !value && "bg-gray-100",
              value && "bg-gray-800 text-white",
              getColorClass(row, column, value)
            );

            return (
              <li key={key}>
                <button
                  type="button"
                  className={buttonClassName}
                  onClick={() => toggle(key)}
                >
                  {key}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <Snow />
    </div>
  );
}

export default App;
