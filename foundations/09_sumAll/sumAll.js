const sumAll = function(num1, num2) {
    // INIT startNum = 0;
    // INIT endNum = 0;
    // INIT finalSum = 0;

    // IF the datatype of both num1 & num2 is a number
    // THEN
        // IF num1 < num2
        // THEN startNum = num1, endNum = num2
        // ELSE startNum = num2, endNum = num1
        // ENDIF
    // ELSE
    //    return "ERROR";
    // ENDIF

    // FOR each number of i equals to startNum until endNum
    // SEQUENCE finalSum += i
    // ENDFOR

    // RETURN finalSum

    let startNum = 0,
        endNum = 0,
        finalSum = 0;
    
    if(!(typeof num1 == "number") && !(typeof num2 == "number")) {
        return "ERROR!";
    }
    
    if(num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if(!(Number.isInteger(num1)) || !(Number.isInteger(num2))) {
        return "ERROR";
    }

    if(num1 < num2) {
        startNum = num1;
        endNum = num2;
    } else {
        startNum = num2;
        endNum = num1;
    }
    

    for(i=startNum; i <= endNum; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
