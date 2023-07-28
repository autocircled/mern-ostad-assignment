/**
 * Calculates the discount amount and the new total price based on the given total price.
 *
 * @param {number} totalPrice - The total price before applying the discount.
 * @return {object} An object containing the total price, the discount amount, and the new total price with discount.
 */
const applyDiscount = (totalPrice) => {
    let discount = 0;

    if (totalPrice >= 50 && totalPrice < 100) {
        discount = 0.05; // 5%
    } else if (totalPrice >= 100 && totalPrice < 200) {
        discount = 0.1; // 10%
    } else if (totalPrice >= 200) {
        discount = 0.15; // 15%
    }
    const discountAmount = totalPrice * discount;
    const newTotalPrice = totalPrice - discountAmount;

    return { totalPrice, discountAmount, newTotalPrice };
}

const result = applyDiscount(177.5);

// Print out the results
console.log(`Total Amount: $${result.totalPrice}`);
console.log(`Discount Amount: $${result.discountAmount}`);
console.log(`Total Amount with Discount: $${result.newTotalPrice}`);
