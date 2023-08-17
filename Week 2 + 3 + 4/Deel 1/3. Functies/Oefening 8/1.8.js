function telDeKlinkers(){
    let zin = prompt("Geef een random zin in:");
    let klinkers = "aeiouAEIOU";
    let aantalKlinkers = 0;

    for (i = 0; i < zin.length; i++){ //door elke ingevoerde zin loopen
        let letter = zin[i];

        if (klinkers.includes(letter)){ //controleren of een letter een klinker is
            aantalKlinkers++;
        }
    }

    alert("Het aantal klinkers van de ingevoerde zin is: " + aantalKlinkers);
}

telDeKlinkers();