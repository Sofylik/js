const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => Math.pow(num, 2);
const applyCallbackToEachElement = (arr, callback) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    };
    return result;
};
console.log(applyCallbackToEachElement(arr, squareCallback));


let originalPrice = 420;
let discountPercent = 20;
const showDiscountPrice = (originalPrice, discountPercent) => {
    return (originalPrice * discountPercent) / 100;
};
const calculateDiscountPrice = (price, callback) => {
    let discount = callback(price, discountPercent);
    let totalPrice = price - discount;
    return totalPrice;
};