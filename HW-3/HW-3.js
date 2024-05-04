"use script"
const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

const email = 'sofiasemtsiv@gmail.com';
console.log(email.includes('@'));
console.log(email.length);

const my = 'My';
const name = 'name';
const is = 'is';
const fullName = my + ' ' + name + ' ' + is + ' ' + 'sofulik';
console.log(fullName);

let userName = 'sofulik';
let payment = 391;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);