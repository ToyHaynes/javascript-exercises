const repeatString = function(string, num) {
    let i = 0;
    let result = "";

    if (num < 0) return "ERROR";

    else {
        while(i<num) {
            result += string;
            i++
        }
        return result
    }
}

// Do not edit below this line
module.exports = repeatString;
