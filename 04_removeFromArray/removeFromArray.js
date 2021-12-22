const removeFromArray = function(array, ...args) {
    //get things to remove
    removeArray = args
    let finalArray = []
    let add = 1;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < removeArray.length; j++) {
            console.log('array num: ' + array[i])
            if (array[i] === removeArray[j]) {
                add = 0;
            } else if (add !== 0){
                add = 1;
            }
            console.log('add: ' + add);
        }
        if (add === 1) {
            finalArray.push(array[i]);
        }
        add = 1;
        }
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
