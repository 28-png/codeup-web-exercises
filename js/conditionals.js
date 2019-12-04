"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
// do not put a var in confirm it will return boolean value.
// Number(confirm('Would you like to enter a number'))
// var enterNumber = Number(prompt('enter a number here'))
// var addHundred = enterNumber + 100;
// var isPositiveOrNegative = (enterNumber > 0) ? 'positive' : 'negative';
//
// var isOddOrEven = (enterNumber & 1) ? 'odd' : 'even';
// if(enterNumber > 0) {
//     alert('this number is ' + isPositiveOrNegative)
//     alert('this number is ' + isOddOrEven)
//     alert('this number is ' + addHundred + ' plus 100')
// } else if(enterNumber < 0) {
//     alert('this number is ' + isPositiveOrNegative)
//     alert('this number is ' + isOddOrEven)
//     alert('this number is ' + addHundred + ' plus 100')
// } else {
//     alert('that is not a number')
// }
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(colors) {
//     var colorMessage;
//     if(colors === 'blue') {
//        colorMessage = 'blue is the color of the sky'
//     } else if (colors === 'red'){
//         colorMessage = 'Strawberries are red'
//     } else if (colors === 'cyan') {
//         colorMessage = 'I dont know anything about cyan'
//     } else {
//         colorMessage = 'that is not in the color list'
//     }
//     return colorMessage;
// }

// console.log(analyzeColor(randomColor))
// console.log(analyzeColor('cyan'))
// console.log(analyzeColor('blue'))
// console.log(analyzeColor('orange'))


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// function analyzeColor(colors) {
//     var colors = prompt('type in red, blue, or cyan')
//     var colorMessage;
//     switch (colors) {
//         case 'blue':
//             alert('blue is the color of the sky')
//         colorMessage = 'blue is the color of the sky'
//         break;
//         case 'red':
//             alert('strawberries are red')
//             colorMessage = 'strawberries are red'
//             break;
//         case 'cyan':
//             alert('I dont know anything about cyan')
//             colorMessage = 'I dont know anything about cyan'
//             break;
//        default:
//            alert('that is not on the color list')
//             colorMessage = 'that is not in the color list'
//             break;
//     }
//     return colorMessage;
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var num = Number(prompt('enter a number'))
var one = num * .10; var oneTotal = num - one;
var two = num * .25; var twoTotal = num - two;
var three = num * .35; var threeTotal = num - three;
var four = num * .50; var fourTotal = num - four;
function calculateTotal(num) {
    switch(num) {
        case 0:
            alert('no discount')
          break;
        case 1:
            alert(oneTotal.toFixed(2) + ' discount is 10%');
            break;
        case 2:
            alert(twoTotal.toFixed(2) + ' discount is 25% off!')
            break;
        case 3:
            alert(threeTotal.toFixed(2) + ' discount is 35% off!')
            break;
        case 4:
            alert(fourTotal.toFixed(2) + ' is 50% off!')
            break;
        case 5:
            alert('it is free!')
            break;
    }
}

console.log(calculateTotal(luckyNumber))

