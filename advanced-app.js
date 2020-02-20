const gameStartUp = () => {
    let time = 0;
    let score = 0;
    const submit = document.getElementById('submit');
    const input = document.getElementById('inputCountry');
    const matchNot = document.getElementById('matchNot');
    const scoreDisplay = document.getElementById('score');
    const namedStates = [];

    import stateData from "states.js";

    const getKeyByValue = (object, value) => 
    Object.keys(object).find(key => object[key] === value);

    const result = getKeyByValue(states,"a");
    // if it doesn't find a state it will return undefined

    console.log(result);

    let colourIn = document.getElementById(result);
    colourIn.style.fill = 'green';

    const findCountry = () => {
        submit.onclick = () => {
            let stateNamed = (input.value).toLowerCase();

            const result = getKeyByValue(states,stateNamed);

            if(namedStates,includes(stateNamed)) {
                matchNot.innerText = "You've already said this!";
                matchNot.style.color = "black";
            } else if (result = undefined){
                matchNot.innerText = 
            }
        }
    }

}

window.onload = gameStartUp;
