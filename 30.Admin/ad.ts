let user_names:string[]=["admin","admin2","admin3","admin4","admin5"];
console.log(user_names);
for(const i in user_names){
    if(user_names[i]==="admin"){
        console.log("Hello Admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${user_names[i]}, thank you for logging in again`)
    }
}