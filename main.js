// Implement pow(x, n), which calculates x raised to the power n (xn).

// -100.0 < x < 100.0
// n is a 32-bit signed integer, within the range [−231, 231 − 1]

const checkArgs = (x, n) => {
    let error;
    if (x <= -100 || x >= 100) {
        error = 'x don\'t fit range -100.0 < x < 100.0';
    }
    if (!Number.isInteger(n)) {
        error = 'n must be integer';
    } else if (n > 0x7FFFFFFF) {
        error = 'n isn\'t 32 bit';
    }
    return error;
};

const pow = (x, n) => {
    let err = checkArgs(x, n);
    if (typeof err !== 'undefined') {
        throw new Error(err);
    } else {
        if (n < 0) return 1 / pow(x, -n);
        else return !n ? 1 : x * pow(x, --n)
    }

};

console.log(pow(2, 10));
console.log(pow(2.1, 3));
console.log(pow(2, -2));
console.log(pow(100, -2));
