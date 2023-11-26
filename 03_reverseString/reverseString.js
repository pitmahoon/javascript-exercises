const reverseString = function(inputString) {
    let i = inputString.length;
    let reversedString = "";
    for (;i >= 0; i--) {
        reversedString += inputString.substr(i, 1);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
