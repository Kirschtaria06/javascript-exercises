const removeFromArray = function(arr, remove) {
    let rm = arr.indexOf(remove)
    arr.splice(rm, 1)
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
