const fibonacci = function(input) {
    // Initiate the two numbers
    let currentNumber = 1;
    let prevNumber = 1;
    
    // In case if the input is string
    let num = parseInt(input);

    // Handle the first 3 numbers
    if(num === 0) {
        return 0;
    } else if(num === 1 || num === 2) {
        return 1;
    } else if(num < 0) {
        return "OOPS";
    }

    for(let i = 2; i < num; i++) {
        const temp = currentNumber;
        currentNumber += prevNumber;
        prevNumber = temp;
    }

    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
