const fibonacci = function(num) {
    num = Number(num);

    if (num === 0) {
        return 0;
    }
    if (num < 0) {
        return "OOPS";
    }
    let fibs = [1, 1];
    if (num <= 1) {
        return fibs[num];
    }

    while (fibs.length <= num) {
        fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2])
        console.log(fibs);
    }

    return fibs[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
