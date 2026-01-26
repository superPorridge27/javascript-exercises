const palindromes = function (str) {
    str = str.replace(/[^A-Za-z0-9]/g, "");
    str = str.toLowerCase();
    let firstMiddle = 0;
    let secondMiddle = 0;

    if(str.length % 2 === 0) {
        firstMiddle = Math.floor(str.length/2)-1;
        secondMiddle = Math.floor(str.length/2);
    } else {
        firstMiddle = Math.floor(str.length/2);
        secondMiddle = Math.floor(str.length/2);
    }


    for(let i=0; i<firstMiddle; i++) {
        for(let j=str.length-1-i; j>=secondMiddle; j-- ) {
            if(str[i]==str[j]) {
                break;
            } else {
                return false;
            }
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
