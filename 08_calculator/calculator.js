const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b
}

const sum = function(array) {
  return array.reduce((total, currentNumber) => {return total + currentNumber;}, 0);
};

const multiply = function(...a) {
  return a.reduce((total, currentNumber) => {
    return total * currentNumber;
  }, a);
};

const power = function(a,b) {
  let power = a
	for(let i =1; i<b; i++) {
    power *= a
  } 
  return power
};

const factorial = function(number) {
  let total = 1;
  for(let i=1; i<=number; i++){
    total *= i
  } return total
};

const calculator = { add, subtract, sum, multiply, power, factorial }
 
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
