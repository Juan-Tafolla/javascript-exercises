let result;
const add = function add(x,y) {
  result = x + y;
  return result;
};

const subtract = function(x,y) {
	result = x - y
  return result;
};

const sum = function(Array) {
  if (Array.length != 0) {
    
    result = parseInt(Array[0]);
    for (let i = 1; i < Array.length; i++) {
     
      result += parseInt(Array[i]);
    }
  
    return result; 
  } 
  else {
    return 0;
  
  }

};

const multiply = function(Array) {
  if (Array.length != 0) {
    
    result = parseInt(Array[0]);
    for (let i = 1; i < Array.length; i++) {
     
      result *= parseInt(Array[i]);

    }
  
    return result; 
  } 
  else {
    return 0;
  
  }
};

const power = function(x,y) {
	result = x**y
  return result;
};

const factorial = function(x) {
  if (x === 0) {
    return 1;
  } else {
    result = x;
    y = x;
    for (let i = 1; i < y; i++) {
      x--;
      result *= x;
    }
  
    return result; 
  }

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
