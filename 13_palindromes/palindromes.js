const palindromes = function (string) {
    const processed = string.toLowerCase().split("").filter(char => "abcdefghijklmnopqrstuvwxyz0123456789".includes(char)).join("");
    const reversed = processed.split('').reverse().join('');
    return processed === reversed;
};








// Do not edit below this line
module.exports = palindromes;
