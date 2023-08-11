/**
 * Finds the maximum number in an array of numbers.
 *
 * @param {array} numbers - The array of numbers.
 * @return {number} The maximum number in the array.
 */
function findMaxNumber(numbers) {

    if (numbers.length === 0) {
        return null;
    }

    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1)); // Output: 30


const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2)); // Output: 15


const emptyArray = [];
console.log(findMaxNumber(emptyArray)); // Output: null