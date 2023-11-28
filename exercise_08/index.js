import formatStringByWordsLength from "./formatStringByWordsLength.js";

const result1 = "This is a long, long, long sentence.";
console.log(formatStringByWordsLength(result1)); // "This is a long, long, long sentence."

const result2 = "This is short one.";
console.log(formatStringByWordsLength(result2)); // "This is short one."
