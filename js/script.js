'user strict';

//To String

// !)

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) 
console.log(typeof(null + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fronSize = 26 + 'px';

//TO Number 
//1)

console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt("15px", 10)));

// let answ = +prompt("Hello", "");

// To boolean

// 0, '', null, undefined, NaN;
let switcher = 1;
if (switcher) {
    console.log('Working....');
}
//2)
console.log(typeof(Boolean('4')));

//3)

console.log(typeof(!!"4444"));