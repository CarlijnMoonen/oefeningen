let persoon = {
    Naam: "Moonen",
    Voornaam: "Carlijn",
    Geboortedatum: "01-01-2001",
    Telefoonnummer: "047123567",
    Mailadres: "test@info.be",
    Lengte: "1.60m",
    Gewicht: "53",
    Leeftijd: "22",
    Huidskleur: "blank",
    Oogkleur: "groen"
};

console.log(persoon);

function tabelVullen(){
    let table = document.getElementById('gegevensTabel');

    for (let item in persoon){
        let row = table.insertRow();
        let cel1 = row.insertCell(0);
        let cel2 = row.insertCell(1);

        cel1.innerText = item;
        cel2.innerText = persoon[item];
    }
}

tabelVullen();

document.getElementById('zinAangevuld').innerText = "Mijn naam is: " + persoon.Voornaam + " en mijn achternaam is: " + persoon.Naam + "." +
    " Ik ben geboren op: " + persoon.Geboortedatum + "." + "\n" +
    " Mijn telefoonnummer is: " + persoon.Telefoonnummer + " en mijn mailadres is: " + persoon.Mailadres + "." + "\n" +
    " Ik ben " + persoon.Lengte + " lang en ik weeg " + persoon.Gewicht + "kg." + " Ik ben " + persoon.Leeftijd + " jaar oud." +
    " Mijn huidskleur is " + persoon.Huidskleur + " en ik heb " + persoon.Oogkleur + "e ogen.";