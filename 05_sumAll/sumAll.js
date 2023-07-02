const sumAll = function(first, last) {
    let result = 0;

    if ( !Number.isInteger(first) || !Number.isInteger(last) || first < 0 || last < 0) {
        return "ERROR";

    } else if (first > last) {
            [first, last] = [last, first]
    }

    for (let i = first; i <= last; i++) {
            result += i;
        }
    
        return result
};

// Do not edit below this line
module.exports = sumAll;
