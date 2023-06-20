"use strict";

// if (4 == 9) {
//     console.log("OK!");
// } else {
//     console.log("Error");
// }

const num = 50;

// if(num < 49) {
//     console.log('Error');
// } else{
//     console.log('Ok!');
// }

(num < 49) ? console.log('Error') : console.log('Ok!');

switch (num) {
    case 49: 
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break
    case 50:
        console.log('Good');
        break;
    default:
        console.log("Another time");
        break;

}
