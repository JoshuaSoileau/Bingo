import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getInitialState } from "../values";
import { classnames } from "../utils";

const Board = () => {
  const [state, setState] = useLocalStorage("state", getInitialState());

  const toggle = (key) =>
    setState({
      ...state,
      [key]: !state[key],
    });

  return (
    <div className="">
      <h1>Holiday Movie Bingo!</h1>
      <ul className="grid grid-cols-5 gap-0">
        {Object.entries(state).map(([key, value]) => {
          const buttonClassName = classnames(
            "h-full flex items-center justify-center w-full",
            "text-xs md:text-sm lg:text-normal",
            "p-4",
            !value && "bg-gray-100",
            value && "bg-gray-800 text-white"
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
  );
};

export default Board;
