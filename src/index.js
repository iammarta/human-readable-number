module.exports = function toReadable(number) {
    let obj = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let numSub = number.toString().split('');
    let hundred = 'hundred';
    if (number < 20) {
        return obj[number];
    } else if (number >= 20 && number < 100) {
        if (number % 10 != 0) {
            return `${obj[Number(numSub[0]) *10]} ${obj[Number(numSub[numSub.length-1])]}`;
        } else {
            return obj[number];
        }
    }  
    else if (number >= 100 && number <= 999) {
        if (number % 100 != 0) {
            if ((numSub[1] + numSub[numSub.length-1]) >= '11' && (numSub[1] + numSub[numSub.length-1]) <='19' ){
                return `${obj[Number(numSub[0])]} ${hundred} ${obj[numSub[1] + numSub[numSub.length-1]]}`;
            } else if (numSub[1] == '0') {
                return `${obj[Number(numSub[0])]} ${hundred} ${obj[Number(numSub[numSub.length-1])]}`;
            } 
            else if (numSub[numSub.length - 1] != '0' && numSub[1] != '0') {
                return `${obj[Number(numSub[0])]} ${hundred} ${obj[Number(numSub[1]) *10]} ${obj[Number(numSub[numSub.length-1])]}`;
            } else {
                return `${obj[Number(numSub[0])]} ${hundred} ${obj[Number(numSub[1]) *10]}`;
            }
        }
        else {
            return `${obj[Number(numSub[0])]} ${hundred}`;
        }
}
};