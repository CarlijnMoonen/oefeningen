document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    //eerste rij
    const labelGeefDag = document.createElement("label");
    labelGeefDag.className = "label";
    labelGeefDag.textContent = "Geef een dag in:";
    labelGeefDag.setAttribute("for", "inputDag");
    labelGeefDag.setAttribute("id", "labelGeefDag");
    body.appendChild(labelGeefDag);

    const inputDag = document.createElement("input");
    inputDag.className = "inputveld";
    inputDag.setAttribute("type", "text");
    inputDag.setAttribute("id", "inputDag");
    body.appendChild(inputDag);

    const br1 = document.createElement("br");
    body.appendChild(br1);

    //button
    const buttonGeneerTekst = document.createElement("button");
    buttonGeneerTekst.setAttribute("id", "buttonGeneerTekst");
    buttonGeneerTekst.textContent = "Genereer tekst";
    body.appendChild(buttonGeneerTekst);

    const inputResultaat = document.createElement("input");
    inputResultaat.setAttribute("type", "text");
    inputResultaat.setAttribute("id", "inputResultaat");
    inputResultaat.setAttribute("readonly", true);
    body.appendChild(inputResultaat);

    buttonGeneerTekst.addEventListener("click", function () {
        let dag = document.getElementById("inputDag").value;
        let resultaat = document.getElementById("inputResultaat");

        let dagNaam = "";

        if (!isNaN(dag)) {
            inputResultaat.value = "Cijfers niet toegestaan!";
            return;
        }

        switch (dag.toLowerCase()) {
            case "maandag":
                dagNaam = "Dit is de eerste dag van de week"
                break;
            case "dinsdag":
                dagNaam = "Dit is de tweede dag van de week"
                break;
            case "woensdag":
                dagNaam = "Dit is de derde dag van de week"
                break;
            case "donderdag":
                dagNaam = "Dit is de vierde dag van de week"
                break;
            case "vrijdag":
                dagNaam = "Dit is de vijfde dag van de week"
                break;
            case "zaterdag":
                dagNaam = "Dit is de zesde dag van de week"
                break;
            case "zondag":
                dagNaam = "Dit is de zevende dag van de week"
                break;
            default:
                dagNaam = "Is de niet-bestaande dag van de week";
        }

        inputResultaat.value = dagNaam;
    });
});