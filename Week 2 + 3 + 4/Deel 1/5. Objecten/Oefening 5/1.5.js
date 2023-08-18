let klanten = [
    {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
    {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
    {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
    {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
    {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'},
];

//eerste oefening
function filterInwonersGenk(klantenArray) {
    return klantenArray.filter(klant => klant.stad === "Genk");
}

let inwonersGenk = filterInwonersGenk(klanten);
console.log(inwonersGenk);



//tweede oefening
function lettersFamilienamenTellen(klantenArray) {
    let aantalLetters = 0;

    klantenArray.forEach(klant => {
        aantalLetters += klant.naam.length;
    });

    return aantalLetters;
}

let totaalAantalLetters = lettersFamilienamenTellen(klanten);
console.log("Het aantal letters in de familienamen is: " + totaalAantalLetters);



//derde oefening
function pasStadAan(klantenArray) {

    for (i = 0; i < klantenArray.length; i++){
        let aantalAntwerpen = i + 1;
        let antwerpString = "Antwerpen-".repeat(aantalAntwerpen).slice(0, -1);
        klantenArray[i].stad = antwerpString;
    }
    return klantenArray;
}

let aangepastAntwerpen = pasStadAan([...klanten]);
console.log(aangepastAntwerpen);



//vierde oefening
function voornamenString(klantenArray){
    let voornamen = '';

    for (i = 0; i< klantenArray.length; i++){
            voornamen += klantenArray[i].voornaam;

        if (i === klantenArray.length - 1 && voornamen.length % 2 === 0){
            voornamen = voornamen.slice(0, -klantenArray[i].voornaam.length) + klantenArray[i].voornaam.toUpperCase();
        }

        console.log(voornamen);
    }
}

voornamenString(klanten);



//vijfde oefening
function gegevensTonen(klantenArray){
    let klantDiv = document.getElementById('klantenGegevens');

    klantenArray.forEach(klant => {
       let klantenInfo = document.createElement('p');
       klantenInfo.innerText = "Voornaam: " + klant.voornaam + ". Achternaam: " + klant.naam + ". Stad: " + klant.stad;
       klantDiv.appendChild(klantenInfo);
    });
}

gegevensTonen(klanten);