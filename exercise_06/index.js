import checkCollectionHasElements from "./checkCollectionHasElements.js";

const checkCollectionHasElementsResult = checkCollectionHasElements([1, 2, 3]);
console.log(checkCollectionHasElementsResult); // true (example 1)

const checkCollectionHasElementsResult2 = checkCollectionHasElements([]);
console.log(checkCollectionHasElementsResult2); // false (example 2)
