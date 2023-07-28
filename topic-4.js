/**
 * Calculate a grade based on the given number.
 *
 * @param {number} num - The number to calculate the grade from.
 * @return {string} The calculated grade.
 */
const gradeCalculator = (num = 0) => {
    let grade = '';
    let number = parseInt(num);
    switch (true) {
        case (number > 100):
            grade = 'Wrong Input';
            break;
        case number >= 90 && number <= 100:
            grade = 'A';
            break;
        case number >= 80 && number < 90:
            grade = 'B';
            break;
        case number >= 70 && number < 80:
            grade = 'C';
            break;
        case number >= 60 && number < 70:
            grade = 'D';
            break;
        case number >= 0 && number < 60:
            grade = 'F';
            break;
        default:
            grade = 'Wrong Input';
            break;
    }

    return grade.length == 1 ? `Grade: ${grade}` : grade;
}


console.log(gradeCalculator(120)); // Wrong Input
console.log(gradeCalculator(92)); // Grade: A
console.log(gradeCalculator(75)); // Grade: C
console.log(gradeCalculator(55)); // Grade: F
console.log(gradeCalculator(-8)); // Wrong Input
