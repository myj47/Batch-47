var guest = ["Alpha", "Bravo", "Charlie"];
guest.unshift("One");
console.log(guest);
guest.splice(2, 0, "Two");
guest.push("Three");
console.log(guest);
console.log("Due to some reasons i can only invite only two person on dinner");
var one = guest.pop();
console.log("Sorry ".concat(one, " Due to some reason table are not organized I will schdelue it for another day "));
var two = guest.pop();
console.log("Sorry ".concat(two, " Due to some reason table are not organized I will schdelue it for another day "));
var three = guest.pop();
console.log("Sorry ".concat(three, " Due to some reason table are not organized I will schdelue it for another day "));
var four = guest.pop();
console.log("Sorry ".concat(four, " Due to some reason table are not organized I will schdelue it for another day "));
for (var i = 0; i < guest.length; i++) {
    console.log("Dear ".concat(guest[i], " You are still invited\nPlease let me know if you are available on Saturday, August 26th at 7pm.\n"));
}
;
guest.pop();
guest.pop();
console.log(guest);
