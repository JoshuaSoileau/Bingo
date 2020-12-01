export function classnames(...args) {
  if (!args || !args?.length) return "";

  return args.filter(Boolean).join(" ");
}
