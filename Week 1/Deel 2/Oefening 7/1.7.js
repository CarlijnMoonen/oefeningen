let eersteCijfer = parseInt(prompt("Geef het eerste cijfer in."));
let tweedeCijfer = parseInt(prompt("Geef het tweede cijfer in."));

let totaal = eersteCijfer * tweedeCijfer;

document.getElementById('resultaatBerekening').innerText = "De uikomst van de vermenigvuldiging is: " + totaal;