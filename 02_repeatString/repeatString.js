let string;
let num;
let result;

const repeatString = function repeatString(string, num) {
    if(num>0){
        result = string;
            for(num; num > 1; num--){
                
                result += string;
            }
        }else if(num == 0){
            result = '';
        }else{
            result = 'ERROR';
        }
return result;

};

// Do not edit below this line
module.exports = repeatString;
