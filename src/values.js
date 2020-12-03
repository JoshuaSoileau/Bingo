const values = [
  "Anti-Christmas character",
  "Blatant product placement",
  "Christmas caroling",
  "Christmas magic",
  "Company holiday party",
  "Cookie baking",
  "Crazy snowstorm that shuts down travel",
  "Christmas tree shopping",
  "Elderly advice ",
  "Ex bf/gf trouble",
  "Fall in love within a week",
  "Family member deceased",
  "Family property or business in trouble",
  "First kiss interrupted",
  "From a small town",
  "Gets dumped in beginning of the movie",
  "Greedy corporate character",
  "Horse drawn carriage ride/Sleigh ride",
  "Ice skating",
  "Impromptu snowball fight",
  "Incredibly cheesey line that makes you roll your eyes",
  "Jumps to massive conclusion",
  "Main characters dont like each other at first",
  "Ridiculously convenient mistletoe",
  "Santa inspired outfit",
  "Santa-like character",
  "Someone with a holiday themed name",
  "Something that clearly wouldn't happen in real life",
  "Special ornament story",
  "Terrible acting",
  "Terribly bad fake CGI snow",
  "Town Christmas festival",
  "Tree decorating",
  "Trying to come clean gets interrupted",
  "Turning down job for love",
  "Unintentional hand holding",
  "Workaholic",
  '"Accidental" fall that requires help up',
  "Drinking hot chocolate",
  "Almost marries obviously wrong person",
  "Extravagent holiday food display",
  'Main characters "bump into" each other in the beginning',
  "Montage",
  "Excessively decorated interior",
  "Personal Assistant is best friend",
  '"I\'m sorry, I have to take this"',
  "An awkward proposal",
  "Christmas tree lighting",
  "Sudden food fight",
  "Spontaneous trip",
  "Big romantic gesture causes change of heart",
  "Brief social/political statement",
  "Awkward love triangle",
  "Over exaggerated grand entrance",
  "Horrible fake accent",
  "Devious family member",
  "Close coworker/friend is secret enemy",
];

function getRandom(arr, n) {
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
    (total, current) => ({
      ...total,
      [current]: false,
    }),
    {}
  );
};

window.getInitialState = getInitialState;
window.getRandom = getRandom;
window.values = values;

export default { getInitialState };
