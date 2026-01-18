const repeatString = function(str, num) {
    // INIT finalString = ""
    // IF(num<0)
    // THEN finalString = "ERROR";
    // ELSE
    // FOR i = 0, i < num, i++
    // SEQUENCE
    // finalString += str
    // ENDFOR
    // ENDIF

    // RETURN finalString;

    let finalString = "";
    if(num < 0) {
        finalString = "ERROR";
    } else {
        for(i=0; i < num; i++) {
            finalString += str;
        }
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
