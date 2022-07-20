let year = 0;
const leapYears = function leapYears(year) {
    if (year % 100 == 0 && year % 400 != 0) {
        return false;
    }else if(year % 100 == 0 && year % 400 == 0) {
        return true
    }else if(year % 100 != 0 && year % 4 == 0){
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
