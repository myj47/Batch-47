var guest = ["Alpha", "Bravo", "Charlie"];
// Print name of guest who is not coming
var guestNotComing = "Bravo";
console.log("".concat(guestNotComing, " is not coming to dinner"));
// Replace name of guest who is not coming
var newGuest = "Chaplin";
var inedexOfNotComing = guest.indexOf(guestNotComing);
// console.log(inedexOfNotComing);
// if (inedexOfNotComing !==-1){
// guest[inedexOfNotComing]=newGuest;
// }
// console.log(guest);
guest.splice(1, 1, "Charlie");
console.log(guest);
for (var i = 0; i < guest.length; i++) {
    console.log("Dear ".concat(guest[i], " I would be honored if you would join me for dinner. I would love to hear about your work in computer science.\n\n    Please let me know if you are available on Saturday, August 26th at 7pm.\n"));
}
