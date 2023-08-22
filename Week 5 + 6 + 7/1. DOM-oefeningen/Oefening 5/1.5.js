document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    //eerste rij
    const labelEmail = document.createElement("label");
    labelEmail.className = "labels5";
    labelEmail.textContent = "Geef een geldig e-mail adres in:";
    labelEmail.setAttribute("for", "inputEmail");
    labelEmail.setAttribute("id", "labelEmail");
    body.appendChild(labelEmail);

    const inputEmail = document.createElement("input");
    inputEmail.className = "inputvelden5";
    inputEmail.setAttribute("type", "text");
    inputEmail.setAttribute("id", "inputEmail");
    body.appendChild(inputEmail);

    const labelControle = document.createElement("label");
    labelControle.className = "labels5";
    labelControle.setAttribute("for", "inputEmail");
    labelControle.setAttribute("id", "labelControle");
    body.appendChild(labelControle);

    const br1 = document.createElement("br");
    body.appendChild(br1);

    //tweede rij
    const labelNaam = document.createElement("label");
    labelNaam.className = "labels5";
    labelNaam.textContent = "Naam:";
    labelNaam.setAttribute("for", "inputNaam");
    labelNaam.setAttribute("id", "labelNaam");
    body.appendChild(labelNaam);

    const inputNaam = document.createElement("input");
    inputNaam.className = "inputvelden5";
    inputNaam.setAttribute("type", "text");
    inputNaam.setAttribute("id", "inputNaam");
    body.appendChild(inputNaam);

    const br2 = document.createElement("br");
    body.appendChild(br2);

    //derde rij
    const labelNaam2 = document.createElement("label");
    labelNaam2.className = "labels5";
    labelNaam2.textContent = "Naam2:";
    labelNaam2.setAttribute("for", "inputNaam2");
    labelNaam2.setAttribute("id", "labelNaam2");
    body.appendChild(labelNaam2);

    const inputNaam2 = document.createElement("input");
    inputNaam2.className = "inputvelden5";
    inputNaam2.setAttribute("type", "text");
    inputNaam2.setAttribute("id", "inputNaam2");
    body.appendChild(inputNaam2);

    const br3 = document.createElement("br");
    body.appendChild(br3);

    //vierde rij
    const labelSubdomein = document.createElement("label");
    labelSubdomein.className = "labels5";
    labelSubdomein.textContent = "Subdomein:";
    labelSubdomein.setAttribute("for", "inputSubdomein");
    labelSubdomein.setAttribute("id", "labelSubdomein");
    body.appendChild(labelSubdomein);

    const inputSubdomein = document.createElement("input");
    inputSubdomein.className = "inputvelden5";
    inputSubdomein.setAttribute("type", "text");
    inputSubdomein.setAttribute("id", "inputSubdomein");
    body.appendChild(inputSubdomein);

    const br4 = document.createElement("br");
    body.appendChild(br4);

    //vijfde rij
    const labelDomein = document.createElement("label");
    labelDomein.className = "labels5";
    labelDomein.textContent = "Domein:";
    labelDomein.setAttribute("for", "inputDomein");
    labelDomein.setAttribute("id", "labelDomein");
    body.appendChild(labelDomein);

    const inputDomein = document.createElement("input");
    inputDomein.className = "inputvelden5";
    inputDomein.setAttribute("type", "text");
    inputDomein.setAttribute("id", "inputDomein");
    body.appendChild(inputDomein);

    const br5 = document.createElement("br");
    body.appendChild(br5);

    //button
    const buttonSplits = document.createElement("button");
    buttonSplits.setAttribute("id", "buttonSplits");
    buttonSplits.textContent = "Splits op";
    body.appendChild(buttonSplits);


    buttonSplits.addEventListener("click", function () {
        let email = document.getElementById("inputEmail");
        let emailAdres = email.value;

        if (!emailAdres.includes("@")) {
            labelControle.innerText = "Ongeldige invoer! Mist een '@'";
            return;
        }

        let delen = emailAdres.split("@");
        let namenDeel = delen[0];
        let domeinenDeel = delen[1];

        namenDeel = namenDeel.split(".");
        if (namenDeel.length !== 2) { //controleren of het gedeelde uit 2 namen/onderdelen bestaat
            labelControle.innerText = "Ongeldige invoer!";
            return;
        }
        let naam = namenDeel[0];
        let naam2 = namenDeel[1];

        domeinenDeel = domeinenDeel.split(".");
        if (domeinenDeel.length !== 2) { //controleren of het gedeelde uit 2 namen/onderdelen bestaat
            labelControle.innerText = "Ongeldige invoer!";
            return;
        }
        let subdomein = domeinenDeel[0];
        let domein = domeinenDeel[1];

        inputNaam.value = naam;
        inputNaam2.value = naam2;
        inputSubdomein.value = subdomein;
        inputDomein.value = domein;
    });
});