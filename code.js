function getFirstValue(arr) {
    return arr[0];
}
console.log(getFirstValue([1, 2, 3])); // 1

function getLastItem(arr) {
    return arr[arr.length - 1];
}
console.log(getLastItem([1, 2, 3])); // 3

function isEmpty(input) {
    return !input || 0 === input.length;
}
console.log(isEmpty([])); // true

function remainder(a, b) {
    return a % b;
}
console.log(remainder(10, 3)); // 1

function search(arr, item) {
    return arr.indexOf(item);
}
console.log(search([1, 2, 3], 2)); // 1

function calcAge(years) {
    return years * 365;
}
console.log(calcAge(20)); // 7300 days

function findSmallestNum(arr) {
    return Math.min(...arr);
}
console.log(findSmallestNum([1, 2, 3, 4, 5])); // 1

function returnNegative(num) {
    return -num;
}
console.log(returnNegative(10)); // -10
