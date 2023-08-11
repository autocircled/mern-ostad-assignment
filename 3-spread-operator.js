/**
 * Merges two arrays together.
 *
 * @param {Array} arr1 - The first array to merge.
 * @param {Array} arr2 - The second array to merge.
 * @return {Array} The merged array.
 */
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]