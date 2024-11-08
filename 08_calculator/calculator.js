const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(nums) {
  return nums.reduce(add, 0);
	
};

const multiply = function(nums) {
  return nums.reduce(
    (a, b) => a * b,
    1
  )
};

const power = function(a, b) {
  let result = 1;
	for (let i = 0; i < b; i++) {
    result *= a;
  }

  return result;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
