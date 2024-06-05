const farr = [1, 2, 3];
farr[1] = 3;
console.log(farr);

const sarr = ['white', 'black', 'green'];
sarr[3] = 'red';
console.log(sarr);

const tarr = [13, 15, 7];
let ttotal = 0;
for (let i = 0; i < tarr.length; i++) {
    ttotal += tarr[i]
}
console.log(ttotal)

const arr4 = [13, 15, 7, 8, 24];
for (const num4 of arr4) {
    console.log(num4)
}

const arr5 = ['one', 'two', 'three', 'four', 'five'];
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i].length < 5) {
        continue;
    }
    console.log(arr5[i])
}

const arr6 = [9, 12, 4, 15, 27, 30, 18, 14, 7, 5];
let total6;
for (let i = 0; i < arr6.length; i++) {
    total6 = Math.max(...arr6)
}
console.log(total6)

const num7 = [9, 12, 4, 15, 27, 30, 18, 14, 7, 5];

for (let i = 0; i < num7.length; i++) {
    if (num7[i] % 2 === 0) {
        console.log(num7[i]);
    }
}