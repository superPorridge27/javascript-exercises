// FUNCTION removeFromArray(sourceArray, valuesToRemove)
//     Initialize an empty list called resultList

//     FOR EACH item in sourceArray DO
//         IF item is NOT in valuesToRemove THEN
//             ADD item to resultList
//         END IF
//     END FOR

//     RETURN resultList
// END FUNCTION
const removeFromArray = function(arr, ...args) {
    return arr.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
