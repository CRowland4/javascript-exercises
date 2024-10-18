const removeFromArray = function(array, ...items) {
    let solution = [];
    for (const element of array) {
        if (!items.includes(element)) {
            solution.push(element);
        }
    };

    return solution;
}

// Do not edit below this line
module.exports = removeFromArray;
