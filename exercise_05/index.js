import isAdditionGreaterThanFift from "./isAdditionGreaterThanFifty";

const isGreaterThanFifty = isAdditionGreaterThanFift(20, 30);
console.log(isGreaterThanFifty); // true (example 1)

const isLessThanFifty = isAdditionGreaterThanFift(20, 20);
console.log(isLessThanFifty); // false (example 2)
