/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * get the total number of words contained in one string.
 * @param {string} sentence
 * @returns {number}
 */

const getTotalWordsFromString = function (sentence) {
  const words = sentence.split(" ");
  const totalWords = words.length;

  return totalWords;
};

export default getTotalWordsFromString;
