let far;
let cel;
let result;

const ftoc = function ftoc(far) {
  
  result = ((far - 32)*5)/9;
  result = result.toFixed(1);
  return parseFloat(result);
};

const ctof = function ctof(cel) {

  result = 1.8 * cel + 32;
  result = result.toFixed(1);
  return parseFloat(result);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

ftoc(32) // fahrenheit to celsius, should return 0

ctof(0) // celsius to fahrenheit, should return 32