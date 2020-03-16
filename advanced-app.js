import stateData from "./states.js";
//console.log(stateData);
const gameStartUp = () => {
    let score = 0;
    let number = 0;
    const timeRemaining = document.getElementById('timeRemaining');
    const input = document.getElementById('inputCountry');
    const matchNot = document.getElementById('matchNot');
    const scoreDisplay = document.getElementById('score');
    const restart = document.getElementById('restart');
    const namedStates = [];

    const getKeyByValue = (object, value) =>
        Object.keys(object).find(key => object[key] === value);

    const findState = () => {
        let stateNamed = (input.value).toLowerCase();
        let result = getKeyByValue(stateData, stateNamed);
        if (namedStates.includes(stateNamed)) {
            matchNot.innerText = "You've already said this!";
            matchNot.style.color = "black";
            input.value = "";
        } else if (result === undefined) {
            matchNot.innerText = `"${stateNamed}" is not a state!`;
            matchNot.style.color = "red";
            input.value = "";
        } else {
            matchNot.innerText = "It's a match!"
            matchNot.style.color = "green";
            score += 1;
            namedStates.push(stateNamed);
            let colorIn = document.getElementById(result);
            colorIn.style.fill = "green";
            stateNamed = "";
            input.value = "";
        }
        scoreDisplay.innerText = score;
    }

    const initiateTimerAndSetWinConditions = () => {
        const minutesAllowed = 10;
        const millisecondsAllowed = minutesAllowed * 60000;
        let millisecondsLeft = millisecondsAllowed;
        const timer = setInterval(() => {
            if (millisecondsLeft > 0) {
                millisecondsLeft -= 1000;
                let mins = Math.floor((millisecondsLeft) % (1000 * 60 * 60) / (1000 * 60));
                let secs = Math.floor((millisecondsLeft % (1000 * 60)) / 1000);
                timeRemaining.innerText = mins + " min " + secs + " sec";
                if (score === 52) {
                    matchNot.innerText = "You win, restart to play again!";
                    matchNot.style.color = "green";
                    input.style.display = "none";
                    clearInterval(timer);
                }
            } else {
                matchNot.innerText = "Time is up, restart the game to play again!";
                matchNot.style.color = "red";
                input.style.display = "none";
                clearInterval(timer);
            }
        }, 1000);
    }

    document.onkeypress = () => {
        if (event.which === 13) {
            number += 1;
            if (number === 1) {
                initiateTimerAndSetWinConditions();
                findState();
            } else {
                findState();
            }
        }
    }

    restart.onclick = () => {
        location.reload();
    }
}

window.onload = gameStartUp;
