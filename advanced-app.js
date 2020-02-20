const gameStartUp = () => {
    let time = 0;
    let score = 0;
    const submit = document.getElementById('submit');
    const input = document.getElementById('inputCountry');
    const matchNot = document.getElementById('matchNot');
    const scoreDisplay = document.getElementById('score');
    const namedStates = [];

    const states = {
        MA: "massachusetts",
        MN: "minnesota",
        MT: "montana",
        ND: "north dakota",
        HI: "hawaii",
        ID: "idaho",
        WA: "washington",
        AZ: "arizona",
        CA: "california",
        CO: "colorado",
        NV: "nevada",
        NM: "new mexico",
        OR: "oregon",
        UT: "utah",
        WY: "wyoming",
        AR: "arkansas",
        IA: "iowa",
        KS: "kansas",
        MO: "missouri",
        NE: "nebraska",
        OK: "oklahoma",
        SD: "south dakota",
        LA: "louisiana",
        TX: "texas",
        CT: "connecticut",
        NH: "new hampshire",
        RI: "rhode island",
        VT: "vermont",
        AL: "alabama",
        FL: "florida",
        GA: "georgia",
        MS: "mississippi",
        SC: "south carolina",
        IL: "illinois",
        IN: "indiana",
        KY: "kentucky",
        NC: "north carolina",
        OH: "ohio",
        TN: "tennessee",
        VA: "virginia",
        WI: "wisconsin",
        WV: "west virginia",
        DE: "delware",
        DC: "district of columbia",
        MD: "maryland",
        NJ: "new jersey",
        NY: "new york",
        PA: "pennsylvania",
        ME: "maine",
        MI: "michigan",
        AK: "alaska"
    }

    const getKeyByValue = (object, value) => 
    Object.keys(object).find(key => object[key] === value);

    const result = getKeyByValue(states,"a");

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
