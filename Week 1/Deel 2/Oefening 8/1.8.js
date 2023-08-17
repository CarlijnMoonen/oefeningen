let eersteGetal = parseInt(prompt("Geef het eerste gehele getal."));
let tweedeGetal = parseInt(prompt("Geef het tweede gehele getal."));

let vermenigvuldiging = eersteGetal * tweedeGetal;
let optelsom = eersteGetal + tweedeGetal;
let aftreksom = eersteGetal - tweedeGetal;
let gedeeld = eersteGetal / tweedeGetal;

document.getElementById('uitkomsten').innerText = "Vermeningvuldiging: " + vermenigvuldiging + "\n" +
    "Optellen: " + optelsom + "\n" + "Aftrekken: " + aftreksom + "\n" + "Delen: " + gedeeld + "\n";