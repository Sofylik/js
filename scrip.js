"use script"


const age = 13;
console.log(age);

const name = "сонька";
console.log(name);

const number = 983;
let plus = number + 10;
console.log(plus)

const student = true;
console.log(student);

const string = "сонька";
console.log(string);

const MyNull = 0;
console.log(MyNull);

const user = prompt(`Введіть своє імʼя`);
alert(`Ку<3 ${user}!`);

const change = confirm(`Так чи ні?`);
if (change === true) {
    alert("Дякую");
} else {
    alert("Дію відмінено!");
}

alert(`Це може бути НЕБЕЗПЕЧНО`);
const danger = confirm(`Ви впевнені?`);

if (danger === true) {
    alert("Дякую за підтвердження");
} else {
    alert("Дію відмінено");
}
