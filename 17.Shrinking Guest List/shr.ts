let guest=["Alpha","Bravo","Charlie"];

guest.unshift("One");
console.log(guest);

guest.splice(2,0,"Two");
guest.push("Three");
console.log(guest);
console.log("Due to some reasons i can only invite only two person on dinner")


let one=guest.pop();
console.log(`Sorry ${one} Due to some reason table are not organized I will schdelue it for another day `);
let two=guest.pop();
console.log(`Sorry ${two} Due to some reason table are not organized I will schdelue it for another day `);
let three=guest.pop();
console.log(`Sorry ${three} Due to some reason table are not organized I will schdelue it for another day `);
let four=guest.pop();
console.log(`Sorry ${four} Due to some reason table are not organized I will schdelue it for another day `);
for(var i=0;i<guest.length;i++){
    console.log(`Dear ${guest[i]} You are still invited
Please let me know if you are available on Saturday, August 26th at 7pm.
`)};
guest.pop();
guest.pop();
console.log(guest);