const getTheTitles = function(arrayOfBookObjects) {
    arrayOfBookNames = arrayOfBookObjects.map(book => book.title);
    return arrayOfBookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
