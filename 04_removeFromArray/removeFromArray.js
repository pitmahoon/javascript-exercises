const removeFromArray = function(inputArray, ...remChar) {
    let i = 0;
    let outputArray = inputArray;
    // Selecting Character to be removed
    do {
        outputArray = outputArray.filter((char) => char !== remChar[i]);
        i++;
    } while (i<remChar.length);
    return outputArray;
};
// Do not edit below this line
module.exports = removeFromArray;
