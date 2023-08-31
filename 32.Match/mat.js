var currentUsers = ["admin", "eric", "jane", "john", "tom"];
var newUsers = ["admin", "eric", "john", "new_user", "tom"];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    var isAvailable = true;
    for (var _a = 0, currentUsers_1 = currentUsers; _a < currentUsers_1.length; _a++) {
        var currentUser = currentUsers_1[_a];
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            isAvailable = false;
            break;
        }
    }
    if (!isAvailable) {
        console.log("The username ".concat(newUser, " is not available. Please choose a different username."));
    }
    else {
        console.log("The username ".concat(newUser, " is available."));
    }
}
