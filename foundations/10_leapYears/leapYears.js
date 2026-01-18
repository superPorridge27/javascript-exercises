const leapYears = function(year) {
    // IF ((year % 4 === 0) && !(year % 100 === 0)) || ((year % 400 === 0) && !(year % 100 === 0))
    // THEN RETURN true;
    // ELSE RETURN false;

    if((year % 4 === 0) && !(year % 100 === 0) ||
        ((year % 400 === 0))) {
            return true;
        } else {
            return false;
        }
};

// Do not edit below this line
module.exports = leapYears;
