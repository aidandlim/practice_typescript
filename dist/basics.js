"use strict";
/*
    Core Type
    - number
    - string
    - boolean
*/
function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== "number" || typeof n2 !== "number") {
    //     throw new Error("Incorrect input!");
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var isPrintResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, isPrintResult, resultPhrase);
