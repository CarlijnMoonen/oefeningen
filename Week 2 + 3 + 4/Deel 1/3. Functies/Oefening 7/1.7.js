function alleWoordenStartenMetHoofdletter(){
    let zin = "Deze oefeningen zijn héél leuk.";
    let woorden = zin.split(' ');
    let aangepasteWoorden = [];

    for (i = 0; i < woorden.length; i++){
        let woord = woorden[i];

        if (woord.length > 0){
            let aangepastWoord = woord.charAt(0).toUpperCase() + woord.slice(1);
            aangepasteWoorden.push(aangepastWoord);
        }
    }

    let aangepasteZin = aangepasteWoorden.join(' ');

    return aangepasteZin;
}

document.getElementById('resultaatFunctie').innerText = alleWoordenStartenMetHoofdletter();