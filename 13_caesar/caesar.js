let letter;
let cipher;
let unicodeVal;
let lastVal;
const caesar = function caesar(letter, cipher) {
    let result = '';
    for (let i = 0; i < letter.length; i++) {
    
          if (letter[i].match(/[A-Z]/gi)) {

            unicodeVal = letter.charCodeAt(i);
            nextVal = unicodeVal + cipher;
            lastVal = String.fromCharCode(nextVal);
            result += lastVal;
             
          } else {
            result += letter[i];
        }
    

    }

    return result;

};

// Do not edit below this line
module.exports = caesar;
