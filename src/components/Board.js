/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import "twin.macro";
import { getColorClass } from "../colors";
import { classnames, getInitialState, checkWinners } from "../utils";

const Board = ({ state, setState }) => {
  const [winningIndexes, setWinningIndexes] = 
    useState(checkWinners(state));

  useEffect(() => {
    setWinningIndexes(checkWinners(state));
  }, [state])

  const toggle = (index) => {
    const tempState = [...state];
    tempState[index].selected = !tempState[index].selected;
    setState([
      ...tempState,
    ]);
  }

  const refresh = () => setState(getInitialState());

  return (
    <div className="md:rounded-lg overflow-hidden">
      <div tw="bg-red-200  flex justify-end">
        <button
          tw="inline-flex items-center  text-red-800  text-sm  p-2 px-6 bg-red-300"
          type="button"
          onClick={() => {
            if (confirm("Are you sure you want to refresh your tiles?"))
              refresh();
          }}
          aria-label="Refresh tiles?"
        >
          refresh
          <span
            tw="inline-flex ml-4  text-xl font-bold "
            role="img"
            aria-label="Refresh icon"
          >
            ⟳
          </span>
        </button>
      </div>

      <ul className="grid grid-cols-5 grid-rows-5 gap-0">
        {state.map((cell, index) => {
          const {label, selected} = cell;
          const row = Math.floor(index / 5);
          const column = index % 5;
          const isWinner = winningIndexes.includes(index);

          const buttonClassName = classnames(
            "h-full flex items-center text-left w-full",
            "text-xs md:text-sm lg:text-normal",
            "p-2 sm:p-4 md:py-8 lg:py-12",
            "focus:outline-none",
            !selected && "bg-gray-100",
            selected && "bg-gray-800 text-white",
            getColorClass(row, column, selected, isWinner)
          );

          return (
            <li key={label}>
              <button
                type="button"
                className={buttonClassName}
                onClick={() => toggle(index)}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Board;
