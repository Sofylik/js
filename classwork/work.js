"use script"

const c = 'Wellcome!';
console.log(c.length);
console.log('Welcome!'.length);

console.log(c.toLocaleLowerCase());
console.log(c.toLocaleUpperCase());

console.log(c.indexOf('to'));
console.log(c.indexOf('one'));

console.log(c.startsWith('W'));

console.log(c.padEnd(25, '!'))
console.log(c.padStart(14, '!'))

const s = '    buy    ';
console.log(s.trim())


const name = 'sofulik';
const age = 14;

const message = `Мене звати ${name}, мені ${age} років`;

// const message = 'Мене звати'+ ' ' + name + ' ' + 'мені' + ' ' + age + ' ' + 'років'
console.log(message)