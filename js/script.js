const usdRate = 28;
const discount = 0.5;

// function convert (amount, rate) {
//     return rate * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// promotion(convert(500, usdRate));

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if(i === 3) return;
//     }
//     console.log('Done');
// }

// test();

function doNothing() {}
console.log(doNothing() === undefined)

function sayHello(name) {
    return ("Привет, " + name + "!");
}

console.log(sayHello("Anton"));

function returnNeighboringNumbers(number) {
    return [--number, ++number, number+1]
}

console.log(returnNeighboringNumbers(5));

function getMathResult(num, times) {
    if(typeof(times) !== 'number' || times <= 0){
        return num;
    }
    let str;
    for (let i = 1; i <= times; i++ )
    {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
        return str;
    }
}

let fruit = 'some fruit';
console.log(fruit.indexOf('fruit'));

const logg = "Hello world";
console.log(logg.slice(fruit.indexOf('fruit'), 11));
console.log(logg.slice(-5, -1));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const numbers = 12.2;
console.log(Math.round(numbers));

const test = "12.2px";

console.log(parseInt(test));
console.log(parseFloat(test));