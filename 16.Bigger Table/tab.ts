let guest=["Alpha","Bravo","Charlie"];

guest.unshift("One");
console.log(guest);

guest.splice(2,0,"Two");
guest.push("Three");
for(var i=0;i<guest.length;i++){
    console.log(`Dear ${guest[i]} I would be honored if you would join me for dinner. I would love to hear about your work in computer science.

    Please let me know if you are available on Saturday, August 26th at 7pm.I found a bigger table some other friends are also invited.
`)};