const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total += num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num, curIndex) => {
    if(curIndex === 0) {
      total = num;
    } else {
      total *= num;
    }
    return total;
  }, 0);
};

const power = function(a, b) {
  let poweredNum = a;
	for(let i = 1; i < b; i++) {
    poweredNum = poweredNum * a;
  }
  return poweredNum;
};

const factorial = function() {
	
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
