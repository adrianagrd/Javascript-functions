import isTypeOf from "./isTypeOf.js";

const isString = isTypeOf("string");
const isNumber = isTypeOf("number");
const isBoolean = isTypeOf("boolean");
const isArray = isTypeOf("array");

console.log(isString("hello")); // true
console.log(isArray([1, 2, 3])); // true
console.log(isArray("hello")); // false
