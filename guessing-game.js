const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let secretNumber;

function checkGuess( num) {
    if (num > secretNumber) {
        console.log("Too high");
        return false;
    } else if (num < secretNumber) {
        console.log("Too low");
        return false;
    } else if (num == secretNumber) {
        return true;
    }
}

function askGuess() {
    rl.question("Enter a guess: ", (answer) => {
        let check = checkGuess(answer);
        if (check) {
            console.log("You win!");
            rl.close();
        } else {
            askGuess();
        }

    })
}

function randomInRange(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

function askRange() {
    rl.question("Enter a min number: ", min => {
        rl.question("Enter a max number: ", max => {
            randNo = randomInRange(min,max);
            secretNumber = randNo;
            console.log(`I'm thinking of a number between1 ${min} and ${max}...`);
            askGuess();
        })
    })


}

askRange();
