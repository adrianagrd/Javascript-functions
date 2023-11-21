import getDistanceMessageFromSumTo100 from "./getDistanceMessageFromSumTo100.js";

const result1 = getDistanceMessageFromSumTo100(70);
console.log(result1); // "Sum with value 110 exceeds in 10 from number 100"

const result2 = getDistanceMessageFromSumTo100(30);
console.log(result2); // "Sum with value 70 is left in 30 from number 100"
