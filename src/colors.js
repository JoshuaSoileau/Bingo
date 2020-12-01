/**
 * This variable serves no functional purpose other than getting Tailwind to not purge these classes.

const classes = [
  "bg-indigo-50",
  "bg-indigo-100",
  "bg-indigo-200",
  "bg-indigo-300",
  "bg-indigo-400",
  "bg-indigo-500",
  "bg-indigo-600",
  "bg-indigo-700",
  "bg-indigo-800",
  "bg-indigo-900",
  "text-indigo-50",
  "text-indigo-100",
  "text-indigo-200",
  "text-indigo-300",
  "text-indigo-400",
  "text-indigo-500",
  "text-indigo-600",
  "text-indigo-700",
  "text-indigo-800",
  "text-indigo-900",

  "bg-blue-50",
  "bg-blue-100",
  "bg-blue-200",
  "bg-blue-300",
  "bg-blue-400",
  "bg-blue-500",
  "bg-blue-600",
  "bg-blue-700",
  "bg-blue-800",
  "bg-blue-900",
  "text-blue-50",
  "text-blue-100",
  "text-blue-200",
  "text-blue-300",
  "text-blue-400",
  "text-blue-500",
  "text-blue-600",
  "text-blue-700",
  "text-blue-800",
  "text-blue-900",

  "bg-lightBlue-50",
  "bg-lightBlue-100",
  "bg-lightBlue-200",
  "bg-lightBlue-300",
  "bg-lightBlue-400",
  "bg-lightBlue-500",
  "bg-lightBlue-600",
  "bg-lightBlue-700",
  "bg-lightBlue-800",
  "bg-lightBlue-900",
  "text-lightBlue-50",
  "text-lightBlue-100",
  "text-lightBlue-200",
  "text-lightBlue-300",
  "text-lightBlue-400",
  "text-lightBlue-500",
  "text-lightBlue-600",
  "text-lightBlue-700",
  "text-lightBlue-800",
  "text-lightBlue-900",

  "bg-cyan-50",
  "bg-cyan-100",
  "bg-cyan-200",
  "bg-cyan-300",
  "bg-cyan-400",
  "bg-cyan-500",
  "bg-cyan-600",
  "bg-cyan-700",
  "bg-cyan-800",
  "bg-cyan-900",
  "text-cyan-50",
  "text-cyan-100",
  "text-cyan-200",
  "text-cyan-300",
  "text-cyan-400",
  "text-cyan-500",
  "text-cyan-600",
  "text-cyan-700",
  "text-cyan-800",
  "text-cyan-900",

  "bg-teal-50",
  "bg-teal-100",
  "bg-teal-200",
  "bg-teal-300",
  "bg-teal-400",
  "bg-teal-500",
  "bg-teal-600",
  "bg-teal-700",
  "bg-teal-800",
  "bg-teal-900",
  "text-teal-50",
  "text-teal-100",
  "text-teal-200",
  "text-teal-300",
  "text-teal-400",
  "text-teal-500",
  "text-teal-600",
  "text-teal-700",
  "text-teal-800",
  "text-teal-900",
];

*/

const colors = [
  "teal",
  "cyan",
  "lightBlue",
  "blue",
  "indigo",
  "",
  "",
  "test test tes ",
];

const lowNumbers = {
  0: "200",
  1: "100",
  2: "50",
  3: "100",
  4: "200",
};
// const lowNumbers = {
//   0: "50",
//   1: "100",
//   2: "200",
//   3: "100",
//   4: "50",
// };

const highNumbers = {
  0: "700",
  1: "800",
  2: "900",
  3: "800",
  4: "700",
};

export const getColorClass = (row, column, active) => {
  const color = colors[row];
  const bgNumber = active ? highNumbers[column] : lowNumbers[column];
  const textNumber = active ? lowNumbers[column] : highNumbers[column];

  return `bg-${color}-${bgNumber}  text-${color}-${textNumber}`;
};

export default {
  getColorClass,
};
