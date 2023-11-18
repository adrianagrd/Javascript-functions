/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * generate a rounded random number depending on a limit
 * @param {number} limit
 * @returns {number}
 */

const generateRandomNumberInRange = function (limit) {
    const randomNumber = Math.random() * limit;
    const roundedRandomNumber = Math.round(randomNumber);

    return roundedRandomNumber;
};

export default generateRandomNumberInRange;
