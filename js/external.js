"use strict"

console.log('Hello from external JavaScript');

// alert('Welcome to my website!')

// var color = prompt('What is your favorite color?');

// alert(color + ' is my favorite color to!');

// start of movie exercie

//start movie 1

// var movies = Number(prompt ("How many days are you renting the movie1?"));

// var days = movies * 3;

// alert(days + " amount");

//end of movie 1

// start movie 2

// var movies2 = Number(prompt('How many days are you renting movie2?'));

// var days2 = movies2 * 3;

// alert(days2 + ' amount');

//end movie 2

//start movie 3

// var movies3 = Number(prompt('How many days are you renting movie3?'));

// var days3 = movies3 * 3;

// alert(days3 + ' amount');

//end movie 3

// total

// alert(days + days2 + days3 + ' total');

//total

//end of movie exercies

//start of silicon valley exercise

// var facebook = 350;
// var google = 400;
// var amazon = 380;
//facebook hours
// var hours1 = parseInt(prompt("How many hours did you work for facebook?"));
// var amount1 = facebook * hours1;
// alert(amount1 + ' amount');
//end facebook hours

//start google hours
// var hours2 = parseInt(prompt('How many hours did you work at google?'));
// var amount2 = google * hours2;
// alert(amount2 + ' amount');
//end google hours

//start of amazon hours
// var hours3 = parseInt(prompt('How many hours did you work at amazon?'));
// var amount3 = amazon * hours3;
// alert(amount3 + ' amount')
//end of amazon hours

// alert(amount1 + amount2 + amount3 + ' total');

//end of silicon valley

//start of school exercise

//solution



// var classAt8AM = 8;
// var classSize = 125;
//
// var currentClassSize = prompt('how many people are currently enrolled in class?');
//
//
// if (currentClassSize > classSize) {
//     alert('classroom is full!')
// }
//
// var classTime = prompt("What time does class start?");
//
// if (currentClassSize > classSize && classTime <= classAt8AM) {
//     alert('cannot register')
// } else if (classTime <= classAt8AM) {
//     alert('that is too early!')
// }

//end of school exercise

//kroger
var numberOfItems = Number(prompt('How many items for checkout?'));
var offerValid = confirm('is the offer valid?');
var isPremiumMember = confirm('Are you a premium member?');

var discountApplied = offerValid && (isPremiumMember || numberOfItems > 2);

alert('Product distount status' + discountApplied);



//kroger end