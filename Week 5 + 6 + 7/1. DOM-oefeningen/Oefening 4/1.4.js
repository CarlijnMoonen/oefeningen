document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    const label = document.createElement("label");
    label.textContent = "Geef een getal tussen 2 en 10:";
    label.setAttribute("for", "getal");
    label.setAttribute("id", "label");
    body.appendChild(label);

    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "getal");
    body.appendChild(input);

    const button = document.createElement("button");
    button.setAttribute("id", "buttonTeken");
    button.textContent = "Teken pyramide";
    body.appendChild(button);

    const br1 = document.createElement("br");
    body.appendChild(br1);

    const divPyramide = document.createElement("div");
    divPyramide.setAttribute("id", "divPyramide");
    body.appendChild(divPyramide);

    button.addEventListener("click", function (){
       const inputGetal= document.getElementById("getal");
       const hoogte = parseInt(inputGetal.value);

       if (isNaN(hoogte) || hoogte < 2 || hoogte > 10){
           divPyramide.innerText = "Ongeldige invoer.";
       }
       else {
           for (i = 1; i <= hoogte; i++){

               let rij = "";

               for (j = 1; j <= i; j++){
                   rij += " *";
               }

               const rijen = document.createElement("p");
               rijen.innerText = rij;
               divPyramide.appendChild(rijen);
           }
       }
    });
});