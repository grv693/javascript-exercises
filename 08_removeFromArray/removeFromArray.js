// This function takes array and infinite number of arguments, which will be then removed from the array
const removeFromArray = function(array, ...valuesToRemove) {
    for (const value of valuesToRemove) {
        while (array.indexOf(value) !== -1)
            array.splice(array.indexOf(value), 1);
    }
    return array
    
    
};

// Do not edit below this line
module.exports = removeFromArray;
