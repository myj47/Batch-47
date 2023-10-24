import inquirer from "inquirer";
const ranNumber = Math.floor(Math.random() * 10) + 1;
const answers = [
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess...",
    },
];
let answer = {
    name: "again",
    type: "confirm",
    message: "Do you want to guess again?",
};
async function numberGuess() {
    let condition = true;
    while (condition) {
        const { userGuess } = await inquirer.prompt(answers);
        if (userGuess === ranNumber) {
            console.log("Yeah you got right answer buddy...");
            condition = false;
        }
        else {
            console.log("Try again Failed...");
        }
        let { again } = await inquirer.prompt(answer);
        condition = again;
    }
}
setTimeout(() => {
    numberGuess();
}, 1000);
