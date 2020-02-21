import stateData from "./states.js";
//console.log(stateData);

const gameStartUp = () => {
    let score = 0;
    const allStates = document.querySelectorAll('.states');
    const input = document.getElementById('inputCountry');
    const matchNot = document.getElementById('matchNot');
    const scoreDisplay = document.getElementById('score');
    const namedStates = [];

    const getKeyByValue = (object, value) => 
    Object.keys(object).find(key => object[key] === value);

    const findState = () => {
        let stateNamed = (input.value).toLowerCase();
        let result = getKeyByValue(stateData, stateNamed);
        if(namedStates.includes(stateNamed)) {
            matchNot.innerText = "You've already said this!";
            matchNot.style.color = "black";
        } else if (result === undefined){
            matchNot.innerText = `"${stateNamed}" is not a state!`;
            matchNot.style.color = "red";
        } else {
            matchNot.innerText = "It's a match!"
            matchNot.style.color = "green";
            score += 1;
            namedStates.push(stateNamed);
            let colorIn = document.getElementById(result);
            colorIn.style.fill = "green";
            stateNamed = "";
        }
        scoreDisplay.innerText = score;   
    }

    const determineWin = () => {
        //if score is 52 and time is less than the allotted time then win
        // else if the time gets to the end and score is less than 52 then lose, with the option to reset
        if(score === 5){
            matchNot.innerText = "You win!!";
            matchNot.innerHTML += "<button class='restart'>Restart</button>";
        }
    }

    const initiateTimer = () => {
        let timeNow = new Date().getTime;
        
    }

    document.onkeypress = () => {
        if(event.which === 13){
            //this should initiate the timer
            findState();
            //console.log(score);
            determineWin();
        }
    }

    


    const resetGame = () => {
        allStates.style.fill = "white";
        //also reset timer
    }

}

window.onload = gameStartUp;
