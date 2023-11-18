import isTypeOf from "./isTypeOf.js";

const isString = isTypeOf("string");
const isNumber = isTypeOf("number");
const isBoolean = isTypeOf("boolean");
const isArray = isTypeOf("array");

console.log(isString("hello world")); // true (example 1)
console.log(isNumber(123)); // true (example 2)
console.log(isBoolean(true)); // true (example 3)
console.log(isArray([1, 2, 3])); // true (example 4)
console.log(isArray("hello world")); // false (example 5)
