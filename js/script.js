'user strict';
// let numberOfFilms;
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while(numberOfFilms = '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

// first();
// second();

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    
    console.log('I finished this lesson');
}

// learnJS('JavaScript', done);

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log("test");
    }
};

// console.log(Object.keys(options))
// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border)


// delete options.name;
// console.log(options)
// console.log(options.colors.background)
// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) == 'object'){
//         for (let i in options[key]){
//             console.log(`Option ${i}, have value ${options[key][i]}`);
//             counter++; 
//         }
//     } else {
//         console.log(`Option ${key}, have value ${options[key]}`)
//         counter++;
//     }
// }
// console.log(counter);

const arr = [1, 5, 13, 6, 8];
// arr[99] = 0;
console.log(arr.length);
arr.sort(compareNum)
// arr.pop();
// arr.push(10);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} entry array ${arr}`)
});

// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
// }

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));