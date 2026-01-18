const reverseString = function(str) {
    // INIT splittedChars = CALL split("") on str to get the splitted characters
    // INIT splittedRevChars = [] to store the reversed splitted characters

    // FOR iterate from i = splittedChars.length-1 to 0
    // SEQUENCE
    // push splittedChars[i] to splittedRevChars
    // ENDFOR

    let splittedChars = str.split("");
    let splittedRevChars = [];

    for(i = splittedChars.length; i > -1; i--) {
        splittedRevChars.push(splittedChars[i]);
    }

    return splittedRevChars.join("");
};

// Do not edit below this line
module.exports = reverseString;
