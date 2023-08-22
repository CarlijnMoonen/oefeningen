document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;


    let fontSelector = document.createElement("select");
    fontSelector.className = "selectieboxen";
    fontSelector.setAttribute("id", "fontSelector");
    let fontOpties = ["Arial", "Times", "Courier", "Georgia", "Sans-Serif", "Serif", "Verdana"];
    fontOpties.forEach(function (font) {
        let optiesF = document.createElement("option");
        optiesF.value = font;
        optiesF.textContent = font;
        fontSelector.appendChild(optiesF);
    });
    body.appendChild(fontSelector);

    let sizeSelector = document.createElement("select");
    sizeSelector.className = "selectieboxen";
    sizeSelector.setAttribute("id", "sizeSelector");
    let sizeOptions = ["8pt", "10pt", "12pt", "16pt", "20pt", "24pt", "28pt"];
    sizeOptions.forEach(function (size) {
        let optiesS = document.createElement("option");
        optiesS.value = size;
        optiesS.textContent = size;
        sizeSelector.appendChild(optiesS);
    });
    body.appendChild(sizeSelector);

    let voorbeeldTekst = document.createElement("p");
    voorbeeldTekst.setAttribute("id", "voorbeeldTekst");
    voorbeeldTekst.textContent = "Voorbeeld tekst om het lettertype te illustreren";
    body.appendChild(voorbeeldTekst);

    fontSelector.addEventListener("change", updateTekst);
    sizeSelector.addEventListener("change", updateTekst);
});

function updateTekst(){
    let geselecteerdFont = document.getElementById("fontSelector").value;
    let geselecteerdSize = document.getElementById("sizeSelector").value;

    let aangepasteTekst = document.getElementById("voorbeeldTekst");
    aangepasteTekst.style.fontFamily = geselecteerdFont;
    aangepasteTekst.style.fontSize = geselecteerdSize;
}