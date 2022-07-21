let number = 0;
const fibonacci = function fibonacci(number) {
        
    if (number < 0) {
        return "OOPS"
    } else {

        let Fibon = [];
        Fibon[0] = 0;
        Fibon[1] = 1;
            
            for (let i = 2; i <= number; i++) {
                
                Fibon[i] = Fibon[i-1] + Fibon[i-2];
            }

        return Fibon[number];
    }
};

// A series of numbers in which each number ( Fibonacci number )
//  is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.


// Do not edit below this line
module.exports = fibonacci;
