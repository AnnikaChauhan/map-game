const gameStartUp = () => {
    const stateArray = document.querySelectorAll('path');
    let time = 0;
    let score = 0;
    const submit = document.getElementById('submit');
    const input = document.getElementById('inputCountry');
    const matchNot = document.getElementById('matchNot');
    const scoreDisplay = document.getElementById('score');
    const namedStates = [];

    //console.log(stateArray);
    // do an object with the states and their respective country code and then you have to find the ID with that country code and change the colour of that
    const states = [
        "massachusetts",
        "minnesota",
        "montana",
        "north dakota",
        "hawaii",
        "idaho",
        "washington",
        "arizona",
        "california",
        "colorado",
        "nevada",
        "new mexico",
        "oregon",
        "utah",
        "wyoming",
        "arkansas",
        "iowa",
        "kansas",
        "missouri",
        "nebraska",
        "oklahoma",
        "south dakota",
        "louisiana",
        "texas",
        "connecticut",
        "new hampshire",
        "rhode island",
        "vermont",
        "alabama",
        "florida",
        "georgia",
        "mississippi",
        "south carolina",
        "illinois",
        "indiana",
        "kentucky",
        "north carolina",
        "ohio",
        "tennessee",
        "virginia",
        "wisconsin",
        "west virginia",
        "delware",
        "district of columbia",
        "maryland",
        "new jersey",
        "new york",
        "pennsylvania",
        "maine",
        "michigan",
        "alaska"
    ];

    //console.log(states.length);

    /*
    setInterval(() => {
        time +=1;
        if(time < 100){
            console.log(time);
        } else {
            alert('times up');
            time = 0;
        }
    }, 100);
    */

    const findCountry = () => {
        submit.onclick = () => {
            let stateNamed = (input.value).toLowerCase();
            if(namedStates.includes(stateNamed)){
                matchNot.innerText = "You've already said this!"
                matchNot.style.color = "black";
            } else if(states.includes(stateNamed)){
                score +=1;
                console.log(score);
                console.log('match!!');
                stateArray[states.indexOf((stateNamed))].style.fill = 'green';
                matchNot.innerText = "It's a match!";
                matchNot.style.color = 'green';
                namedStates.push(stateNamed);
            } else {
                matchNot.innerText = `${stateNamed} - not a state`;
                matchNot.style.color = 'red';
            }

            console.log(namedStates);
            scoreDisplay.innerText = score;
        }
    }


    findCountry();

    const reset = () => {
        
    }

}

window.onload = gameStartUp;