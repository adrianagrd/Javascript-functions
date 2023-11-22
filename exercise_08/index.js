//imports

import formatStringByWordsLength from "./formatStringByWordsLength.js";

const result1 = formatStringByWordsLength(
  "This is a long, long, long sentence.",
);
console.log(result1); // "This is a long, long, long sentence."

const result2 = formatStringByWordsLength("This is short one.");
console.log(result2); // "This is short one."
