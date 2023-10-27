/* eslint-disable no-restricted-globals */
import React from "react";
import { getColorClass } from "../colors";
import { classnames, getInitialState } from "../utils";

const Board = ({ state, setState }) => {
  const toggle = (key) =>
    setState({
      ...state,
      [key]: !state[key],
    });

  const refresh = () => setState(getInitialState());

  return (
    <div className="md:rounded-lg overflow-hidden">
      <div className="bg-red-200  flex justify-end">
        <button
          className="inline-flex items-center  text-red-800  text-sm  p-2 px-6 bg-red-300"
          type="button"
          onClick={() => {
            if (confirm("Are you sure you want to refresh your tiles?"))
              refresh();
          }}
          aria-label="Refresh tiles?"
        >
          refresh
          <span
            className="inline-flex ml-4  text-xl font-bold "
            role="img"
            aria-label="Refresh icon"
          >
            ⟳
          </span>
        </button>
      </div>

      <ul className="grid grid-cols-5 grid-rows-5 gap-0">
        {Object.entries(state).map(([key, value], index) => {
          const row = Math.floor(index / 5);
          const column = index % 5;

          const buttonClassName = classnames(
            "h-full flex items-center text-left w-full",
            "text-xs md:text-sm lg:text-normal",
            "p-2 sm:p-4 md:py-8 lg:py-12",
            "focus:outline-none",
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
  );
};

export default Board;
