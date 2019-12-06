import React from "react";
import values from "../values";
console.log(values);

const Board = () => {
  return <div>{values.map(value => value)}</div>;
};

export default Board;
