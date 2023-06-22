"use strict";

let num = 20;

//Function declaration
function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 9));
console.log(calc(5, 3));
console.log(calc(4, 9));
console.log(calc(6, 9));

function ret() {
    let num = 50;

    return num;
}

const aNotherNum = ret();
console.log(aNotherNum);


// Function Expression
const logger = function () {
    console.log("Hello");
};
logger();

//Arrows functions

const calc = (a, b) => a + b;