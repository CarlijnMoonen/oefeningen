function verwijderTeken() {
    let zin = prompt("Voer een random zin in.");
    let maxAantal = zin.length;
    let randomGetal = parseInt(prompt("Geef een getal tussen 0 en " + maxAantal));

    if (isNaN(randomGetal) || randomGetal < 0 || randomGetal > maxAantal) {
        console.error("Ongeldig getal, het getal moet tussen 0 en " + maxAantal + " liggen.");
        return;
    }

    let deel1 = zin.slice(0, randomGetal - 1);
    let deel2 = zin.slice(randomGetal);

    console.log("Het eerste deel van de zin is: " + "\"" + deel1 + "\"" +
        "\nHet tweede deel van de zin is: " + "\"" + deel2.slice(1) + "\"");
}

verwijderTeken();