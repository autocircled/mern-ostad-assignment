/**
 * Generates a multiplication table for a given number.
 *
 * @param {number} num - The number to generate the multiplication table for.
 * @return {undefined} - This function does not return a value.
 */
const multiplyTableGenerater = (num) => {

    console.log(`The multiplication table for: ${num}`);

    for (let i = 1; i <= 10; i++) {

        console.log(`${i} x ${num} = ${i * num}`);

    }
}

multiplyTableGenerater(5);