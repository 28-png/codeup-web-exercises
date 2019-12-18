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
var dogs = [
        {
             name: "Chompers",
             breed: "Pug",
             age: 7
         },
         {
             name: "Freddy",
             breed: "Lab",
             age: 4
         },
         {
             name: "Mr. Pig",
             breed: "Mastif",
             age: 10
         }
     ];
dogs.forEach(function(dog) {
    var agePlusOne =  dog.age+=1
    console.log("name: " + dog.name + "\n" + "breed: " + dog.breed + "\n" + "age: " + agePlusOne);
})




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

// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false

function washCars() {

}


//     ```js
//             // Example input
//             [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: true
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: true
//                  }
//             ]
//       ```
//
//     ```js
//             // Example output:
//              [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: false // changed to false
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false // stays the same
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: false // changed to false
//                  }
//              ]
//     ```







