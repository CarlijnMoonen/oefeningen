document.addEventListener("DOMContentLoaded", function (){
    const body = document.body;

    const labelVoornaam = document.createElement('label');
    labelVoornaam.className = "labels";
    labelVoornaam.textContent = "Voornaam:";
    labelVoornaam.setAttribute("for", "voornaam");
    body.appendChild(labelVoornaam);

    const inputVoornaam = document.createElement('input');
    inputVoornaam.className = "inputvelden";
    inputVoornaam.setAttribute("type", "text");
    inputVoornaam.setAttribute("id", "voornaam");
    body.appendChild(inputVoornaam);

    const br1 = document.createElement("br");
    body.appendChild(br1);

    const labelAchternaam = document.createElement('label');
    labelAchternaam.className = "labels";
    labelAchternaam.textContent = "Achternaam:";
    labelAchternaam.setAttribute("for", "achternaam");
    body.appendChild(labelAchternaam);

    const inputAchternaam = document.createElement('input');
    inputAchternaam.className = "inputvelden";
    inputAchternaam.setAttribute("type", "text");
    inputAchternaam.setAttribute("id", "achternaam");
    body.appendChild(inputAchternaam);

    const br2 = document.createElement("br");
    body.appendChild(br2);

    const button = document.createElement('button');
    button.setAttribute("id", "genereer");
    button.textContent = "Genereer melding";
    body.appendChild(button);

    const inputWelkomstBericht = document.createElement('input');
    inputWelkomstBericht.setAttribute("type", "text");
    inputWelkomstBericht.setAttribute("id", "welkomstBericht");
    body.appendChild(inputWelkomstBericht);

    let genereerButton = document.getElementById("genereer");
    let resultaat = document.getElementById("welkomstBericht");

    genereerButton.addEventListener("click", function (){
       let voornaam = document.getElementById("voornaam").value;
       let achternaam = document.getElementById("achternaam").value;

       if (voornaam == "" || achternaam == ""){
           resultaat.value = "Vul alle velden in a.u.b";
       }
       else{
           resultaat.value = "Welkom, " + voornaam + " " + achternaam;
       }
    });
});