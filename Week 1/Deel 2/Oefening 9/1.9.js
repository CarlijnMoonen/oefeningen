// function rekenen() {
//
//     let eersteCijfer = parseFloat(document.getElementById('eersteCijfer').valueOf().innerText);
//     let tweedeCijfer = parseFloat(document.getElementById('tweedeCijfer').valueOf().innerText);
//
//     if (isNaN(eersteCijfer) || isNaN(tweedeCijfer)) {
//         alert("Voer een geldig cijfer in.");
//         return;
//     }
//
//     let vermenigvuldig = eersteCijfer * tweedeCijfer;
//     let optellen = eersteCijfer + tweedeCijfer;
//     let aftrekken = eersteCijfer - tweedeCijfer;
//     let delen = eersteCijfer / tweedeCijfer;
//
//     let resultatenWeergeven = document.getElementById('resultaten');
//     resultatenWeergeven.innerText = "Vermeningvuldiging: " + vermenigvuldig + "\n" +
//         "Optellen: " + optellen + "\n" + "Aftrekken: " + aftrekken + "\n" + "Delen: " + delen + "\n";
// }

let eersteCijfer = parseFloat(prompt("Geef het eerste getal."));
let tweedeCijfer = parseFloat(prompt("Geef het tweede getal."));

let vermenigvuldigen = eersteCijfer * tweedeCijfer;
let optellen = eersteCijfer + tweedeCijfer;
let aftrekken = eersteCijfer - tweedeCijfer;
let delen = eersteCijfer / tweedeCijfer;

document.getElementById('resultaten').innerText = "Vermeningvuldiging: " + vermenigvuldigen + "\n" +
    "Optellen: " + optellen + "\n" + "Aftrekken: " + aftrekken + "\n" + "Delen: " + delen + "\n";
