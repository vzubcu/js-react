// "use strict";

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }
// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2
// while (i <= 16) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }


// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }
    
}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 0; i < 7; i++ ) {
        console.log(20 - +i)
    }
    
}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 1; i <= 5; i++) {
        console.log(i * 2);
    }
    
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    
    let i = 2
    while (i <= 16) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
    }
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
        for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[i - 5] = i;
    }
    
    // Не трогаем
    return arrayOfNumbers;
}



function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    
    // Не трогаем
    return result;
}

console.log(firstTask())


function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (i = 0; i < data.length; i++) {
        if(typeof(data[i]) == "number") {
            data[i] = data[i] * 2;
        } else {
            data[i] = data[i] + " - done";
        }
        
    }
    
    // Не трогаем
    return data;
}

console.log(secondTask())


const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

// Пишем решение вот тут
for (i = 1; i <= data.length; i++) {
    // console.log(data.length - +i)
    console.log(data[+data.length - i])
    result[i] = data[data.length - i]
}