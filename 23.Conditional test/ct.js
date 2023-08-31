// first test
var car = "subaru";
console.log("Is car=='subaru'? I predict True.");
console.log(car == 'subaru');
// second test
console.log("Is car=='Honda'? I predict False.");
console.log(car == 'honda');
// third test
console.log("Is car.length==6? I predict True.");
console.log(car.length == 6);
// fourth test
console.log("Is car.lenght==7? I predict False.");
console.log(car.length == 7);
// fifth test
console.log("Is car.LowerCase()='subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');
// sixth case
console.log("Is car.tpUpperCase==''subaru'? I predict False.");
console.log(car.toUpperCase() == 'subaru');
// seventh test
console.log("Is car.startWith('sub') I predict True.");
console.log(car.startsWith("sub"));
// eight test
console.log("Is car.startWith('aru')? I predict False");
console.log(car.startsWith("aru"));
// ninth test
console.log("Is car.includes('sub')? I predict True");
console.log(car.includes('sub'));
// tenth test
console.log("Is car.inculedes('oro')? I predict False");
console.log(car.includes('oro'));
