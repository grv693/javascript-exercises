const sumAll = function(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
        return "ERROR";
    }
    else if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
        return "ERROR";
    }
    else if (numOne < 0 || numTwo < 0) {
        return "ERROR";
    }

    if (numTwo < numOne) {
        let temp = numOne;
        numOne = numTwo;
        numTwo = temp;
    }
    
    let sum = 0;
    for (let i = numOne; i <= numTwo; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
