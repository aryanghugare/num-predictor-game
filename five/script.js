let random = parseInt(Math.random() * 100 + 1);
let input = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessesR = document.querySelector('.lastResult');

const prev = document.querySelector(".guesses");
const result = document.querySelector(".result");
const p = document.createElement('p');
let play = true;
const low = document.querySelector(".low");
let prevGuess = [];
let numGuess = 1;
const warning = document.createElement("p")


/*

if (play) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(input.value);

        validate(guess)


    })
}

function validate(guess) {
    if (isNaN(guess)) {
        alert("Please Enter a Valid Number!")
    } else if (guess > 100) {
        alert("Please a Enter a Number less than 100")
    } else if (guess < 1) {
        alert("Please a Enter a Number more than 1")
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${random} `)
            endGame(guess);

        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess == random) {
        displayMessage(`Your Guess is Right`);
        endGame();
    }
    if (guess < random) {
        displayMessage(`Your Guess is low`);
        endGame();
    }
    if (guess > randomandom) {
        displayMessage(`Your Guess is High `);
        endGame();
    }
}

function displayGuess(guess) {
    input.value = '';
    prev.innerHTML += `${guess} `
    numGuess++;
    guessesR.innerHTML = `${11-numGuess}`

}


function displayMessage(message) {
    low.innerHTML = `${message}`

}

function endGame() {
    input.value = '';

}

*/

// console.log(play);




if (play == true) {


    submit.addEventListener("click", (e) => {
        e.preventDefault()
        const num = parseInt(input.value)

        if (isNaN(num)) {
            alert("Enter a Number!! ")
            warning.innerHTML = `<h3> Kindly only Enter Numbers </h3>`
            result.appendChild(warning)

        }
        // lessThan(num)
        else if (num >= 100) {
            warning.innerHTML = `<h3> Please Enter the values smaller than 100!!</h3>`
            result.appendChild(warning)
            alert("Please Enter the values smaller than 100!!")
        } else if (num && prevGuess.length < 10 && num < 100) {
            prevGuess.push(num)
            warning.innerHTML = ``
        } else if (prevGuess.length >= 8) {
            play = false
            endgame()
        }

        prev.innerHTML = `${prevGuess}`
        guessesR.innerHTML = `${10-prevGuess.length}`
        console.log(random);

        // validate(num)

        if (num == random) {
            alert("Number is Guessed Right!!")
            play = false
            input.value = ""
            endgame()

        }



        input.value = ""
            // one()

    })



} else {
    guessesR.innerHTML = ``
    prevGuess = []
}


function endgame() {
    play = false;
    prevGuess = []
    submit.setAttribute("disabled", " ")


    warning.innerHTML = `<h2> Game Over!! <button id="start_again">Start Aagin!!</button></h2> `
    result.appendChild(warning)
    startgame()
}

function startgame() {
    const again = document.querySelector("#start_again")
    again.addEventListener("click", (e) => {
        e.preventDefault()

        play = true;
        submit.removeAttribute("disabled")
        warning.innerHTML = ""
        prevGuess = []
        prev.innerHTML = ``
        guessesR.innerHTML = `${10}`

        random = parseInt(Math.random() * 100 + 1)

        return;
    })
}

// console.log(play);

















// if (play === true) {
//     console.log(random);
//     submit.addEventListener("click", (e) => {
//         e.preventDefault();
//         const num = parseInt(input.value);

//         // Check if not a number
//         if (isNaN(num)) {
//             showWarning("Kindly only enter numbers!");
//             return;
//         }

//         // Check if out of range
//         if (num >= 100 || num < 0) {
//             showWarning("Please enter a value between 0 and 99!");
//             return;
//         }

//         // Proceed if valid
//         prevGuess.push(num);
//         updateUI();

//         // Check guess
//         if (num === random) {
//             showMessage("🎉 Number is guessed right!! You won!");
//             endGame();
//             return;
//         }

//         // Check if attempts exceeded
//         if (prevGuess.length >= 10) {
//             showMessage("❌ You've used all 10 attempts. Game Over!");
//             endGame();
//             return;
//         }

//         input.value = "";
//     });
// }

// // Helper functions

// function showWarning(message) {
//     warning.innerHTML = `<h3>${message}</h3>`;
//     result.appendChild(warning);
//     alert(message);
// }

// function showMessage(message) {
//     warning.innerHTML = `<h3>${message}</h3>`;
//     result.appendChild(warning);
//     alert(message);
// }

// function updateUI() {
//     prev.innerHTML = `${prevGuess.join(", ")}`;
//     guessesR.innerHTML = `${10 - prevGuess.length}`;
// }

// function endGame() {
//     play = false;
//     input.disabled = true;
//     submit.disabled = true;
//     guessesR.innerHTML = "";
// }