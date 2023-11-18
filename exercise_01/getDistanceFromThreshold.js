/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 **/

/**
 * find how much a number exceeds or is left to reach one value
 * @param {number} value
 * @param {number} threshold
 * @returns {number}
 */

const getDistanceFromThreshold = function (value, threshold) {
    const distance = value - threshold;

    return distance;
};

export default getDistanceFromThreshold;
