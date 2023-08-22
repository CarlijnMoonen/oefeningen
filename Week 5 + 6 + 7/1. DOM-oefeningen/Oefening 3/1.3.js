document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    const labelGetal = document.createElement("label");
    labelGetal.textContent = "Geef een getal tussen 0 en 50:";
    labelGetal.setAttribute("for", "getal");
    labelGetal.setAttribute("id", "labelGetal");
    body.appendChild(labelGetal);

    const inputGetal = document.createElement("input");
    inputGetal.setAttribute("type", "number");
    inputGetal.setAttribute("id", "getal");
    body.appendChild(inputGetal);

    const br1 = document.createElement("br");
    body.appendChild(br1);

    const button = document.createElement("button");
    button.setAttribute("id", "buttonGenereer");
    button.textContent = "Genereer oneven getallen";
    body.appendChild(button);

    const resultaat = document.createElement("input");
    resultaat.setAttribute("type", "text");
    resultaat.setAttribute("id", "onevenGetallen");
    resultaat.setAttribute("readonly", true);
    body.appendChild(resultaat);

    let genereren = document.getElementById("buttonGenereer");

    genereren.addEventListener("click", function () {
        let ingegevenGetal = parseInt(document.getElementById("getal").value);

        if (!isNaN(ingegevenGetal) && ingegevenGetal >= 0 && ingegevenGetal <= 50 && Number.isInteger(ingegevenGetal)) {
            let onevenGetallen = "";
            let startNummer = 1;

            while (startNummer <= ingegevenGetal) {
                onevenGetallen += startNummer;

                if (startNummer + 2 <= ingegevenGetal) {
                    onevenGetallen += ", ";
                }

                startNummer += 2;
            }

            resultaat.value = onevenGetallen;
        }
        else{
            resultaat.value = "Ongeldige invoer";
        }
    });
});