let persoon = {
    Naam: "Moonen",
    Voornaam: "Carlijn",
    Geboortedatum: "01-01-2001",
    Telefoonnummer: "047123567",
    Mailadres: "test@info.be"
};

console.log("Mijn naam is: " + persoon.Voornaam + " en mijn achternaam is: " + persoon.Naam + "." +
    " Ik ben geboren op: " + persoon.Geboortedatum + "." +
    " Mijn telefoonnummer is: " + persoon.Telefoonnummer + " en mijn mailadres is: " + persoon.Mailadres + ".");

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