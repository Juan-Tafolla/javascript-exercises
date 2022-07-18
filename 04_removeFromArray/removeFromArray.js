let Array = [];
let idx;
let result = [];
const removeFromArray = function removeFromArray(Array) {

        for (let i = 1; i < arguments.length; i++) {
               idx = arguments[i];

                if (Array.indexOf(idx) == -1){
                    continue;                    
                }else{
                    Array.splice(Array.indexOf(idx),1);
            }
        }
    return Array;
};

// Do not edit below this line
module.exports = removeFromArray;

