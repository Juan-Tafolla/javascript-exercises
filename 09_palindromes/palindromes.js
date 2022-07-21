let string;
const palindromes = function palindromes(string) {
    let result = '';
    minusString = string.toLowerCase();
    almostfinalString = minusString.replace(/[.,!]/g,"");
    finalString = almostfinalString.replace(/\s/g,"");

    for (let i = 1; i <= finalString.length; i++) {
        result += finalString.substr(-i,1);
    }
    if (result === finalString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
