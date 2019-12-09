"use strict"
// var random = Math.floor((Math.random()*50)+1);
//
// console.log("Random number to skip is: " + random);
//
// for (var i = 1; i < 50; i++) {
//     if (i % 2 === 0) {
//       continue;
//
//     }
//
//     if (random === i) {
//        console.log("Yike! Skipping number " + i);
//     } else {
//         console.log("Here is an odd number: " + i);
//     }
//
//     if (i >= 50) {
//        break;
//
//     }
//
// }
//alternate solution
// do {
//     var userNumber = Number(prompt("Pick an odd number between 1 and 50"));
//     if (userNumber % 2 === 0)
//         alert(userNumber + " is not odd, please pick again")
//     else if (userNumber < 1 || userNumber > 50)
//         alert(userNumber + " is not between 1 and 50, please pick again");
//     else if (isNaN(userNumber))
//         alert(userNumber + " is not a number, please pick again");
//     else {
//         alert("congrats you picked the right number");
//         break;
//     }
// } while (true) {
//
// }