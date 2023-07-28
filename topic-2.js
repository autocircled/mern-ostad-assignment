/**
 * Finds and returns all even numbers in the given array.
 *
 * @param {Array} numbersArray - The array of numbers to search.
 * @return {Array} An array containing all the even numbers found.
 */
const findEvenNumbers = (numbersArray) => {

    // Create an empty array
    const evenNumbers = [];

    // Check if the array is empty
    if (numbersArray.length > 0) {

        // Loop through the array
        for (let i = 0; i < numbersArray.length; i++) {

            // Check if the number is even
            if (numbersArray[i] % 2 === 0) {

                // Add the number to the array
                evenNumbers.push(numbersArray[i]);
            }
        }
    }

    // Return the even numbers
    return evenNumbers;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = findEvenNumbers(arr);
console.log(evenNumbers);