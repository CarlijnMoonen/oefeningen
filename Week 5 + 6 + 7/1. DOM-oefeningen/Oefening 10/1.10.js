function clearPlaceholder(input) {
    if (input.value === input.defaultValue) { //defaultvalue = oorspronkelijke initiële waarde
        input.value = "";
    }
    input.style.color = "red";
    input.style.backgroundColor = "";
}

function resetPlaceholder(input) {
    if (input.value === "") {
        input.value = input.defaultValue;
        input.style.color = "black";
        input.style.backgroundColor = "lightgray";
    } else {
        input.style.color = "black";
        input.style.backgroundColor = "lightgray";
    }
}

function verzenden() {
    const voornaam = document.getElementById("voornaam").value;
    const naam = document.getElementById("naam").value;
    const adres = document.getElementById("adres").value;

    alert("Bedankt om het formulier te verzenden");
    alert("Verzonden: " + "\n" + "Voornaam: " + voornaam + "\n" + "Naam: " + naam + "\n" + "Adres: " + adres);
}

function wissen() {
    const voornaamInput = document.getElementById("voornaam");
    const naamInput = document.getElementById("naam");
    const adresInput = document.getElementById("adres");

    voornaamInput.value = voornaamInput.defaultValue;
    naamInput.value = naamInput.defaultValue;
    adresInput.value = adresInput.defaultValue;

    voornaamInput.style.backgroundColor = "";
    naamInput.style.backgroundColor = "";
    adresInput.style.backgroundColor = "";

    alert("Alle gegevens werden gewist");
}