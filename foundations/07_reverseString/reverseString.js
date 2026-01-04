const reverseString = function(string) {
    let charsArray = string.split("")
    let reversedArray = charsArray.reverse()
    let joined = reversedArray.join("")
    return joined
};

// Do not edit below this line
module.exports = reverseString;
