let result = 0;
let a = 0;
let b = 0;

const sumAll = function sumAll(a,b) {

        if (a > 0 &&  b > 0  && typeof a === 'number' && typeof b === 'number' ) {
            
            let i = 0;
            if (a > b) {

                result = a;

                while (a > b){
                    a --;
                    result += a;
                }
            }else{

                result = b;
                while (b > a){
                    b --;
                    result += b;
                }
            }
            return result;
        }
        else{
            return 'ERROR';
        }

};

// Do not edit below this line
module.exports = sumAll;
