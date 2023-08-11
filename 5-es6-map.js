/**
 * Doubles each number in the given array.
 *
 * @param {Array<number>} numbers - The array of numbers to be doubled.
 * @return {Array<number>} The array of doubled numbers.
 */
const doubleNumbers = (numbers) => {
    return numbers.map((number) => number * 2);
}
const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers)); // Output: [2, 4, 6, 8, 10]