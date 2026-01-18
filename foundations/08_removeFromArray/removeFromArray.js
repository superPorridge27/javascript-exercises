const removeFromArray = function(arr, ...args) {
    // RETURN CALL FILTER on arr with CALL on INCLUDE num
    return arr.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
