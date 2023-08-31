const currentUsers = ["admin", "eric", "jane", "john", "tom"];
const newUsers = ["admin", "eric", "john", "new_user", "tom"];

for (const newUser of newUsers) {
  let isAvailable = true;

  for (const currentUser of currentUsers) {
    if (newUser.toLowerCase() === currentUser.toLowerCase()) {
      isAvailable = false;
      break;
    }
  }

  if (!isAvailable) {
    console.log(`The username ${newUser} is not available. Please choose a different username.`);
  } else {
    console.log(`The username ${newUser} is available.`);
  }
}
