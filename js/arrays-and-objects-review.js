"use strict"


// 1. What is an array in Javascript?
//
//     2. What is an object in Javascript?
//
//     3. What is the difference between an array and an object?
//
//     4. What is a property? A method?
//
//     5. Why are loops useful when dealing with arrays?
//
//     6. What is an index?
//
//     7. What is the difference between dot and bracket notation?


// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//
//     ```js
//         filterNumbers(["fred", true, 5, 3]) //[3, 5]

function filterNumbers(input) {
    var bucket = []
    for (var i = 0; i < input.length; i++) {
        if(typeof input[i] === "number") {
             bucket.push(input[i])
       }
    }
        return bucket.sort()
}

console.log(filterNumbers(["fred", true, 5, 3]));

// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.
//
//     ```js
//     //Example Input:
//
//        [
//         {
//              name: "Chompers",
//              breed: "Pug",
//              age: 7
//          },
//          {
//              name: "Freddy",
//              breed: "Lab",
//              age: 4
//          },
//          {
//              name: "Mr. Pig",
//              breed: "Mastif",
//              age: 10
//          }
//      ];
//    ```
//     ```js
//     //Example output
//      [
//         {
//              name: "Chompers",
//              breed: "Pug",
//              age: 8
//          },
//          {
//              name: "Freddy",
//              breed: "Lab",
//              age: 5
//          },
//          {
//              name: "Mr. Pig",
//              breed: "Mastif",
//              age: 11
//          }
//      ];









