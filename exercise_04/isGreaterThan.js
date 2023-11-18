/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 * check whether one number is greater than a given number
 * @param {number} value
 * @param {number} threshold
 * @returns {boolean}
 */

const isGreaterThan = function (value, threshold) {
    const isGreaterThan = value > threshold;

    return isGreaterThan;
};

export default isGreaterThan;
