{ // New IFFE
    "use strict"

// old way
console.log(Math.pow(2, 8)); // === 256
// new syntax

for(let i = 0; i < 16; i++) {

console.log(2 ** i); // === 256

}

function explore() {
    let a = 1;
    let b = 2;
    console.log(a);
    console.log(b);
}

explore();

let dog = {
    name:"dog",
    breed:"Chihuahua",
    age: 2
}

document.getElementById('message').innerHTML = `<p>Our ${dog.breed} is named ${dog.name}</p>`;


    const newFunction = (name) => {
    console.log(`hello! ${name}`)
    };

newFunction("Matt");

const add7 = num => num + 7;
    console.log(add7(14));

const newHello = (name2 = "Codeup") => `Hello, ${name2}!`; // first is default parameter then parameter when name is passed through
console.log(newHello("europa"));
    console.log(newHello());

    const sayHello = (myName = "name") => `Hello, ${myName}!`;
    console.log(sayHello("Matt"));
    console.log(sayHello());

    const friend = {
        name: "Calvin",
        age: 7
    };

    const tellMeAbout = ({name = "name",age = 0}) => {
        return `${name} is awesome!
        ${name} is ${age} years old.`
    }

    console.log(tellMeAbout(friend))
    console.log(tellMeAbout(dog))




}


