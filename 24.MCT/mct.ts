//Tests using strings equality and inequality
const car1:string="Hello";
const car2:string="hello";
console.log(car1!==car2);
console.log(car1===car2);
// Tests using lower case function
let car='SUBARU';
console.log("Is car.toLowerCase()=='subaru'? I predict True.")
console.log(car.toLowerCase()=='subaru');
console.log("Is car.toLowerCase()=='SUBARU'? I predict False.")
console.log(car.toLowerCase()=='SUBARU');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num:number=10;
console.log("Is num==10? I predict True.");
console.log(num==10);
console.log("Is num==11? I predict False.");
console.log(num==11);
console.log("Is num>9? I predict True.");
console.log(num>9);
console.log("Is num<9? I predict False.");
console.log(num<9);
console.log("Is num>=10? I predict True.");
console.log(num>=10);
console.log("Is num<=11? I predict False.");
console.log(num<=9);
// Tests using "and" and "or" operators
// "and"
let a=10;
let b=20;
console.log("Is (a == 10) && (b == 20)? I predict False.");
console.log((a == 11) && (b == 20)); 
console.log("Is (a == 10) && (b == 20)? I predict True.");
console.log((a == 10) && (b == 20)); 
// "or"
console.log("Is (a == 10) || (b == 20)? I predict True.");
console.log((a == 11) || (b == 20)); 
console.log("Is (a == 10) || (b == 20)? I predict False.");
console.log((a == 11) || (b == 21)); 
// Test whether an item is in a array
let arr=[1,2,3,4];
console.log("Is 3 in numbers? I predict True.");
console.log(3 in arr);
console.log("Is 5 in numbers? I predict False.");
console.log(5 in arr); 
// Test whether an item is not in a array
console.log("Is 3 in numbers? I predict True.");
console.log(3 !in arr);
console.log("Is 5 in numbers? I predict False.");
console.log(5 !in arr); 