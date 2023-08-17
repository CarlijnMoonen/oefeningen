function sportenJaOfNee(keuze){
    let motivatie;

    if (keuze === 'ja'){
        motivatie = "Just do it!";
    }
    else if(keuze === 'nee'){
        motivatie = "Jammer, blijf dan maar liggen";
    }

    document.getElementById('antwoord').textContent = motivatie;
}

//alternatief:
function checkSportPreference() {
    let sportPreference = prompt("Sport je graag? (ja/nee)").toLowerCase();

    if (sportPreference === "ja") {
        document.getElementById("motivation").textContent = "Just do it!";
    } else if (sportPreference === "nee") {
        document.getElementById("motivation").textContent = "Jammer, blijf dan maar liggen.";
    } else {
        document.getElementById("motivation").textContent = "Ongeldig antwoord. Voer 'ja' of 'nee' in.";
    }
}