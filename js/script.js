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