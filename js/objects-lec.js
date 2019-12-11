"use strict"
var newCar = {
    make: "Dodge",
    model: "Ram",
    year: 2013,
    options: ["lift kit", "nav system", "heated seats",]

}
    newCar.liftOff = function (lift) {
        if(lift == "off") {
            console.log("look! we are flying!")
        } else {
            console.log("look! we are crashing!")
        }
    }

console.log("the cars year is " + newCar.year);
console.log("the make/model is " + newCar.make + "/" + newCar.model);
console.log("The vehicle comes with these options " + newCar.options);
console.log(newCar.liftOff("off"))
console.log(newCar.liftOff("banana"))

animal = [
    {
        breed: "lab",
        gender: "male",
        age: 9
    },
    {
        breed: "husky",
        gender: "female",
        age: 12
    },
    {
        breed: "golden retriever",
        gender: "female",
        age: 6
    }
]

console.log()




























