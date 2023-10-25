// Spot the errors and fix them Copy the following complete code block to your script.js file and try to spot and fix the errors.

let userName = "Brad";

console.log("Brad".length >= 4);

userName = "Jenna";

console.log("Jenna".length > 4);

// ^______________ Should log true

// TODO: Implement the isString function
/*
function isString(any) {
  return typeof any === "string";
}

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined)); // result should be false

console.log(isString("")); // result should be true

console.log(isString("John" + "Doe")); // result should be true
*/

const isString = function (any) {
  if (typeof any === "string") {
    return true;
  } else {
    return false;
  }
};

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined)); // result should be false

console.log(isString("")); // result should be true

console.log(isString("John" + "Doe")); // result should be true
