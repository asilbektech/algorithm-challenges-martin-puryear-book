// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch  -  gotta pay yer way. ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".

const acronym = (string) => {
    const word = "";
    for (let i = 0; i < string.length; i++) {
        const firstCharacter = word.charAt(0).toUpperCase();
    }
    return word;
};

// Count Non-Spaces Accept a string and return the number of non-space characters found in the string. For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

const countNonSpaces = (str) => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char != " ") {
            count++;
        }
    }
    return count;
};

console.log(countNonSpaces("Honey pie, you are driving me crazy"));

// ["abc", "defg", "a", "xy"], 3; => ["abc", "defg"];

// Given anarray of string, and length(number). Return a new array, remove all strings that have less chars than length

const isLessChars = (str, num) => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.length >= num) {
            result.push(char);
        }
    }
    return result;
};

console.log(isLessChars(["abc", "defg", "a", "xypo"], 4));

// //  Integer to Roman Numerals Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.

// const intToRomanNum = (num) => {
//     const dic = {
//         1: "I",
//         5: "V",
//         10: "X",
//         50: "L",
//         100: "C",
//         500: "D",
//         1000: "M",

//         4: "IV",
//         9: "IX",
//         19: "XIX",
//         40: "XL",
//         49: "XLIX"
//     };
//     let nums = Object.keys(dic);
// };
