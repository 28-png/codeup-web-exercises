{
    "use strict"

    let hamsters = [
        {
            name: "Hamtaro",
            heightInMM: 86,
            fur: ['orange', 'white'],
            gender: "male",
            dateOfBirth: "August 6"
        }, {
            name: "Bijou",
            heightInMM: 75,
            fur: ['white'],
            gender: "female",
            dateOfBirth: "July 10"
        }, {
            name: "Oxnard",
            heightInMM: 100,
            fur: ['grey', 'white'],
            gender: "male",
            dateOfBirth: "May 3"
        }, {
            name: "Boss",
            heightInMM: 120,
            fur: ['brown', 'white'],
            gender: "male",
            dateOfBirth: "Spetember 21"
        }, {
            name: "Snoozer",
            heightInMM: 85,
            fur: ['brown', 'white', "pink"],
            gender: "male",
            dateOfBirth: "January 14"
        }
    ];


let hamsterName = hamsters.map((hamster) => {
    return hamster.name
});
    console.log(hamsterName);


    let furColors = []
    hamsters.map(hamster => {
        hamster.fur.map(color => furColors.push(color));

    });
    console.log(furColors)



    let maleHamster = hamsters.filter(hamster => hamster.gender === "male");
    console.log(maleHamster);

let totalHamsterHeight = hamsters.reduce((hamsterStack, hamster) => {
    return hamsterStack + hamster.heightInMM

}, 0);

    let hamsterStack = 0;
for(let hamster of hamsters) {
    hamsterStack += hamster.heightInMM
}

    console.log(totalHamsterHeight / hamsters.length)
    console.log(hamsterStack)

}