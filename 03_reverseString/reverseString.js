const reverseString = function(str) {
    let stringArray = str.split('');
    let reverseArray = [];
    for (i = 0; i <= stringArray.length; i++){
        reverseArray.push(stringArray[stringArray.length - i]);
    }
    return reverseArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
