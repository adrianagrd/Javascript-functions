import transformCollectionToString from "./transformCollectionToString.js";

const collection = ["apple", "grapes", "strawberries"];
const result = transformCollectionToString(collection);
console.log(result); // "apple | grapes | strawberries"

const collection2 = [];
const result2 = transformCollectionToString(collection2);
console.log(result2); // ""
