var user_names = ["admin", "admin2", "admin3", "admin4", "admin5"];
console.log(user_names);
for (var i in user_names) {
    if (user_names[i] === "admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user_names[i], ", thank you for logging in again"));
    }
}
// Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
if (user_names.length == 0) {
    console.log("We need to find some users!");
}
// Remove all of the usernames from your array, and make sure the correct message is printed.
user_names = [];
if (user_names.length == 0) {
    console.log("We need to find some users!");
}
