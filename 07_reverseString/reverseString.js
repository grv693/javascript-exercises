const reverseString = function(string) {
    /* 
    Split string into array
    Reverse array
    Make array a string
    */
   let stringArray = string.split("");
   stringArray = stringArray.reverse();
   let reversedString = stringArray.join("");
   return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
