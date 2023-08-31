// first version
let alien_Color:string="Green";
if(alien_Color=="Green"){
    
    console.log("The player earned 5 points")
}
else if(alien_Color=="Yellow"){
    console.log("The Player earned 10 points")
}
else if(alien_Color=="Red"){
console.log("The Player earned 15 points")
}
else{
    console.log("Player color is not recongnized")
}
//2nd version
alien_Color="Yellow";
if(alien_Color=="Green"){
    
    console.log("The player earned 5 points")
}
else if(alien_Color=="Yellow"){
    console.log("The Player earned 10 points")
}
else if(alien_Color=="Red"){
console.log("The Player earned 15 points")
}
else{
    console.log("Player color is not recongnized")
}
// Third version
alien_Color="Red";
if(alien_Color=="Green"){
    
    console.log("The player earned 5 points")
}
else if(alien_Color=="Yellow"){
    console.log("The Player earned 10 points")
}
else if(alien_Color=="Red"){
console.log("The Player earned 15 points")
}
else{
    console.log("Player color is not recongnized")
}
// extra versions
alien_Color="Red";
switch (alien_Color){
    case "Green" :
        console.log("The Player earned 5 points");
        break;
        case "Yellow":
            console.log("The Player earned 10 points");
            break;
            case "Red" :
            console.log("The Player earned 15 points");
            break;
            default:
                console.log("Player is not found");
}
// 3rd versoin
alien_Color="Green"
const points=alien_Color==="Green" ? 5: alien_Color==="Yellow" ? 10:15;
console.log(`Player earned ${points} points for shooting the ${alien_Color} alien.`);