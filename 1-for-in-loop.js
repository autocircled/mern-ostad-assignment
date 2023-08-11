/**
 * Prints the properties of an object.
 *
 * @param {Object} object - The object to print the properties of.
 * @return {undefined} This function does not return a value.
 */
function printObjectProperties(object) {

    if (Object.keys(object).length === 0) {
        console.log('Object is empty.');
        return;
    }
    for (let key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}

printObjectProperties(
    {
        name: 'John',
        age: 30,
        city: 'New York'
    }
)

