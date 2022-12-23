import values from "./values.json";

export function classnames(...args) {
  if (!args || !args?.length) return "";

  return args.filter(Boolean).join(" ");
}

export function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export const getInitialState = () => {
  return getRandom(values, 25).reduce(
    (total, current) => ([
      ...total,
      {label: current, selected: false}
    ]),
    []
  );
};

const winningLines = [
  // Horizontal lines
  [0,1,2,3,4],
  [5,6,7,8,9],
  [10,11,12,13,14],
  [15,16,17,18,19],
  [20,21,22,23,24],
  // Vertical lines
  [0,5,10,15,20],
  [1,6,11,16,21],
  [2,7,12,17,22],
  [3,8,13,18,23],
  [4,9,14,19,24],
  // Diagonal lines
  [0,6,12,18,24],
  [4,8,12,16,20],
]

export function checkWinners(state) {
  let winningIndexes = [];
  for (const line of winningLines) {
    let selectedIndexesInLine = 0;
    for (const index of line) {
      if (state[index].selected === true) {
        selectedIndexesInLine++;
      }
    }
    if (selectedIndexesInLine === 5) {
      winningIndexes = [...winningIndexes, ...line];
    }
  }
  return winningIndexes;
}