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
    
    // console.log('I finished this lesson');
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

// const arr = [1, 5, 13, 6, 8];
// // arr[99] = 0;
// console.log(arr.length);
// arr.sort(compareNum)
// // arr.pop();
// // arr.push(10);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} entry array ${arr}`)
// });

// // for (let i = 0; i < arr.length; i++) {
// //     // console.log(arr[i]);
// // }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

let a = 5,
    b= a;
    b = b + 5;

// console.log(b);
// console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(numbers);
// console.log(newNumbers);

// const add = {
//     d: 17,
//     i: 20,
//     j: {
//         m: 5,
//         p: 3
//     }
// };

// const clone = Object.assign({}, add);
// clone.d = 20;
// clone.j.m = 20;
// console.log(add);
// console.log(clone);


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'aaaaaaa';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'journal', 'livejournal'],
//     internet = [...video, ...blogs, 'vk', "facebook"];



// console.log(internet)

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAaray = [...array];

// const q = {
//     one: 1,
//     two: 2
// }

// const newObjq = {...q};

// console.log(newObjq)


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками:`;
//         languages.forEach(function(lang) {
//             str +=`${lang.toUpperCase()} `;            
//         });
//         return str;
//     }
// };

// function showExperience(plan) {
//     return plan.skills.exp;
// }

// // console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//     return str;
// }

// // console.log(showProgrammingLangs(personalPlanPeter));

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if(arr.length > 0){
//         return `Семья состоит из: ${arr.join(" ")}`;
//     } else {
//         return "Семья пуста";
//     }
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(function(item){
//         console.log(item.toLowerCase());
//     });
// }

// standardizeStrings(favoriteCities)

const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str) != 'string') {
        return "Ошибка!";
    }
    return str.split('').reverse().join('');
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}


console.log(availableCurr([baseCurrencies, ...additionalCurrencies], 'CNY'));