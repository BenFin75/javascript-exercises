const sumAll = function(numOne, numTwo) {
    let sum = 0;
    if (Number.isInteger(numOne) && Number.isInteger(numTwo) && numOne > 0 && numTwo >0) {
        if (numOne > numTwo) {
            for (i = numTwo; i <= numOne; i++) {
                sum += i;
            }
        } else {
            for (i = numOne; i <= numTwo; i++) {
                sum += i;
            }
        }
    } else {
        return 'ERROR';
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
