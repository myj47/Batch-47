let guest=["Alpha","Bravo","Charlie"];



// Print name of guest who is not coming
let guestNotComing:string="Bravo";
console.log(`${guestNotComing} is not coming to dinner` );
// Replace name of guest who is not coming
let newGuest:string="Chaplin";
let inedexOfNotComing:number=guest.indexOf(guestNotComing);
// console.log(inedexOfNotComing);
// if (inedexOfNotComing !==-1){
// guest[inedexOfNotComing]=newGuest;
// }
// console.log(guest);
guest.splice(1,1,"Charlie");
console.log(guest);
for(var i=0;i<guest.length;i++){
    console.log(`Dear ${guest[i]} I would be honored if you would join me for dinner. I would love to hear about your work in computer science.

    Please let me know if you are available on Saturday, August 26th at 7pm.
`)}
