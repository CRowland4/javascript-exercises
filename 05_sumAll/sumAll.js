const sumAll = function(num1, num2) {
    if (!(Number.isInteger(num1)) || !(Number.isInteger(num2))) {
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    };


    let solution = 0;
    let smaller = num1;
    let larger = num2;

    if (num1 > num2) {
        smaller = num2;
        larger = num1;
    };

    for (let i = smaller; i <=  larger; i++) {
        solution += i;
    };
    
    return solution;
};

// Do not edit below this line
module.exports = sumAll;
