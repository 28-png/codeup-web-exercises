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
    breed:"Chihuahua"
}

document.getElementById('message').innerHTML = `<p>Our ${dog.breed} is named ${dog.name}</p>`;


    const newFunction = (name) => {
    console.log(`hello! ${name}`)
    };

newFunction("Matt")






}


