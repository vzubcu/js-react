'use strict';

// Код возьмите из предыдущего домашнего задания
// let numberOfFilms;
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDb = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false
// };

// function rememberMyFIlms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последник просмотренных фильмов?', '').trim(),
//             b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDb.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFIlms();

// function detectPersonalLevel() {
//     if (personalMovieDb.count < 10) {
//         console.log('Просмотренно довольно мало фильмов');
//     } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDb.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();
// console.log(personalMovieDb);

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDb);
//     }
// }

// showMyDB(personalMovieDb.privat);
// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = +prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDb.genres[i - 1] = genre;
//     }
        
// }
// writeYourGenres();

// Место для первой задачи
// function calculateVolumeAndArea(latura) {
//     if(typeof(latura) == 'number' && latura > 0 && latura != '' && Number.isInteger(latura)){ 
//         let aria = latura * latura * latura,
//             suprafata = 6 * latura * latura;
//         return  `Объем куба: ${aria}, площадь всей поверхности: ${suprafata}`;
//     } else {
//         return "При вычислении произошла ошибка";
//     }
// }

// console.log(calculateVolumeAndArea(5));
// console.log(calculateVolumeAndArea(15));
// console.log(calculateVolumeAndArea(15.5));
// console.log(calculateVolumeAndArea('15'));
// console.log(calculateVolumeAndArea(-15));

// Место для второй задачи
// function getCoupeNumber(numb) {
//     if(Number.isInteger(numb) && typeof(numb) == 'number' && numb >= 0 ){
//         if(numb != 0 && numb <= 36) {
//             return Math.ceil(numb / 4);
//         } else {
//             return "Таких мест в вагоне не существует";
//         }
//     } else {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }
// }

// console.log(getCoupeNumber(33))
// console.log(getCoupeNumber(7))
// console.log(getCoupeNumber(300))
// console.log(getCoupeNumber(0))
// console.log(getCoupeNumber(7.7))
// console.log(getCoupeNumber(-10))
// console.log(getCoupeNumber("Hello"))


// Место для первой задачи
// function getTimeFromMinutes(minutes) {
//     if(Number.isInteger(minutes) && typeof(minutes) == 'number' && minutes >= 0 ){
//         let hour = parseInt(minutes / 60),
//             remain_minutes = minutes - (hour * 60),
//             hour_text;
//         switch(hour) {
//             case 0:
//                 hour_text = "часов";
//                 break;
//             case 1:
//                 hour_text = "час";
//                 break;
//             case 2:
//                 hour_text = "часа";
//                 break;
//             case 3:
//                 hour_text = "часа";
//                 break;
//             case 4:
//                 hour_text = "часа";
//                 break;
//             default:
//                 hour_text = "часов";
//         }
//         return `Это ${hour} ${hour_text} и ${remain_minutes} минут`;
//     }
//     return "Ошибка, проверьте данные";
// }

// console.log(getTimeFromMinutes(150));
// console.log(getTimeFromMinutes(50));
// console.log(getTimeFromMinutes(0));
// console.log(getTimeFromMinutes(-150));

// Место для второй задачи
// function findMaxNumber(numb_1, numb_2, numb_3, numb_4) {
//     if(typeof(numb_1) == "number" && typeof(numb_2) == "number" && typeof(numb_3) == "number" && typeof(numb_4) == "number" ) {
//         let max_1_2 = numb_1 > numb_2 ? numb_1 : numb_2,
//             max_3_4 = numb_3 > numb_4 ? numb_3 : numb_4,
//             max_final = max_1_2 > max_3_4 ? max_1_2 : max_3_4;
//         return max_final;

//     }
//     return 0;
// }

// console.log(findMaxNumber(1, 5, 6.6, 11))
// console.log(findMaxNumber(1, 5, '6', '10'))


// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }
//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// console.log("Fib - fibona4i")
// console.log(fib(4));
// console.log(fib(7));
// console.log(fib("7"));
// console.log(fib(1));
// console.log(fib(0));