let letter;
let cipher;
let unicodeVal;
let lastVal;
const caesar = function caesar(letter, cipher) {
 
  if (cipher > 25) {
    cipher = cipher - 26 * (Math.round(cipher / 25));
  } else if(cipher < -25) {
     cipher = cipher + 26 * (Math.round(Math.abs(cipher) / 25));
   }
  
  let result = '';
    for (let i = 0; i < letter.length; i++) {
    
          if (letter[i].match(/[A-Z]/gi)) {

            unicodeVal = letter.charCodeAt(i);
            nextVal = unicodeVal + cipher;

            if (unicodeVal < 91 && nextVal > 90 || nextVal > 122) {
              nextVal = nextVal - 26;
            }else if(unicodeVal > 64 && nextVal < 65 ){
              nextVal = nextVal + 26;
            }else if (unicodeVal > 96 && nextVal < 96){
              nextVal = nextVal + 26;
            }
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
