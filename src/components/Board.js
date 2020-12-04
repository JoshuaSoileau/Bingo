import React from "react";
import { getColorClass } from "../colors";
import { classnames } from "../utils";

const Board = ({ state, setState }) => {
  const toggle = (key) =>
    setState({
      ...state,
      [key]: !state[key],
    });

  return (
    <ul className="grid grid-cols-5 grid-rows-5 gap-0 md:rounded-lg overflow-hidden">
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
  );
};

export default Board;
