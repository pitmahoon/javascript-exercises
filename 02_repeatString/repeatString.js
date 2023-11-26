const repeatString = function(inputString, repetition) {
    if (repetition === -1) {
        return "ERROR"
    }

    let output = "";
    for (let i = 0; i < repetition; i++) {
        output = output + inputString;
    }
    return output;
};


// Do not edit below this line
module.exports = repeatString;
