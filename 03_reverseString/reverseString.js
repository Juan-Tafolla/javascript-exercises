let string;
const reverseString = function reverseString(string) {
    let result = '';
    for (let i = 1; i <= string.length; i++) {
        result += string.substr(-i,1);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
