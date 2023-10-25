// TODO: implement welcomeMsg function

function welcomeMsg(_name) {
  return "Welcome " + _name + "!";
}
console.log(welcomeMsg("Jane"));
// Welcome Jane!
console.log(welcomeMsg("Marc"));
// Welcome Marc!

// TODO: implement calcGrossPrice function

function calcGrossPrice(a, b) {
  return a * b;
}

console.log(calcGrossPrice(20, 1.19));
// result should be 23.8

function calcGrossPrice(a, b) {
  return a * b;
}

console.log(calcGrossPrice(40, 1.16));
// result should be 46.4

// TODO: Implement the addPositive function

function addPositive(a, b) {
  return a + b;
}
console.log(addPositive(2, 3));
// result1 should be 5

function addPositive2(a, b) {
  return a + -b;
}
console.log(addPositive2(3, -5));
// result2 should be 8

function addPositive3(a, b) {
  return -a + -b;
}
console.log(addPositive3(-1, -8));
// result3 should be 9
