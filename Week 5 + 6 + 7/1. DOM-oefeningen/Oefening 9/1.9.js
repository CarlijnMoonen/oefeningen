document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    //eerste rij
    const labelZin = document.createElement("label");
    labelZin.className = "labels9";
    labelZin.textContent = "Phrase:";
    labelZin.setAttribute("for", "inputZin");
    labelZin.setAttribute("id", "labelZin");
    body.appendChild(labelZin);

    const inputZin = document.createElement("input");
    inputZin.className = "inputvelden9";
    inputZin.setAttribute("type", "text");
    inputZin.setAttribute("id", "inputZin");
    body.appendChild(inputZin);

    const br1 = document.createElement("br");
    body.appendChild(br1);

    //tweede rij
    const labelFilter = document.createElement("label");
    labelFilter.className = "labels9";
    labelFilter.textContent = "Filter:";
    labelFilter.setAttribute("for", "inputFilter");
    labelFilter.setAttribute("id", "labelFilter");
    body.appendChild(labelFilter);

    const inputFilter = document.createElement("input");
    inputFilter.className = "inputvelden9";
    inputFilter.setAttribute("type", "text");
    inputFilter.setAttribute("id", "inputFilter");
    body.appendChild(inputFilter);

    const br2 = document.createElement("br");
    body.appendChild(br2);

    //button
    const buttonGo = document.createElement("button");
    buttonGo.setAttribute("id", "buttonGo");
    buttonGo.textContent = "GO!";
    body.appendChild(buttonGo);

    const br3 = document.createElement("br");
    body.appendChild(br3);

    //p

    const br4 = document.createElement("br");
    body.appendChild(br4);

    //label
    const labelGefilterd = document.createElement("label");
    labelGefilterd.setAttribute("for", "inputFilter");
    labelGefilterd.setAttribute("id", "labelGefilterd");
    body.appendChild(labelGefilterd);

    buttonGo.addEventListener("click", updateOutput);

    function updateOutput(){
        const inputTekst = inputZin.value;
        const filterTekst = inputFilter.value.toLowerCase();


    }
});