// var i = 1;
// while(i < 65536) {
//     i = i * 2;
//     console.log(i);
// }
// var allCones = Math.floor(Math.random() * 50) + 50;

// do {
//     var cones = Math.floor(Math.random() * 5) + 1;
//     allCones = allCones - cones;
//     console.log("I sold " + cones + " cones.");
//     if (cones > allCones)
//     {console.log("I cannot sell you " + cones + ", I only have " + allCones + " left.")
//     }
//     var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     var cones = Math.floor(Math.random() * 5) + 1;
//     allCones = allCones - cones;
//    console.log("I sold " + cones + " cones.");
//     if (cones > allCones)
//     {console.log("I cannot sell you " + cones + ", I only have " + allCones + " left.")
//     }
//
// }
//
// while (allCones > 0) {
// console.log("Yay! I sold them all!")
//
// }

//solution
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
// var conesPurchased = Math.floor(Math.random() * 5) + 1;
// if(conesPurchased > allCones) {
//     var sadConesMessage = "Cannot sell you " + conesPurchased + " I only have " + allCones + "....."
// console.log(sadConesMessage)
//
// } else {
//     allCones -= conesPurchased;
//     var happyConesMessage = conesPurchased + " cones sold .... " + allCones + " cones to go";
//     console.log(happyConesMessage)
// }
//
//
//
// } while(allCones > 0)
// console.log("yay, I sold all the cones");