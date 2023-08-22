document.addEventListener("DOMContentLoaded", function (){
    let body = document.body;

    let input1 = document.createElement('input');
    input1.className = "inputVelden";
    input1.setAttribute("type", "number");
    input1.setAttribute("id", "num1");
    body.appendChild(input1);

    let labelX = document.createElement('label');
    labelX.textContent = "X";
    labelX.setAttribute("for", "num1");
    body.appendChild(labelX);

    let input2 = document.createElement('input');
    input2.className = "inputVelden";
    input2.setAttribute("type", "number");
    input2.setAttribute("id", "num2");
    body.appendChild(input2);

    let button = document.createElement('button');
    button.setAttribute("id", "calculate");
    button.textContent = "Bereken";
    body.appendChild(button);

    const br1 = document.createElement("br");
    body.appendChild(br1);

    let inputResultaat = document.createElement('input');
    inputResultaat.className = "resultaat";
    inputResultaat.setAttribute("type", "text");
    inputResultaat.setAttribute("id", "resultaat");
    body.appendChild(inputResultaat);

    let berekenButton = document.getElementById("calculate");
    let resultaatElement = document.getElementById("resultaat");

    berekenButton.addEventListener("click", function (){
       let num1 = parseFloat(document.getElementById('num1').value);
       let num2 = parseFloat(document.getElementById('num2').value);

       if (!isNaN(num1) && !isNaN(num2)){
           let product = num1 * num2;
           resultaatElement.value = "Het product van " + num1 + " en " + num2 + " is: " + product;
           console.log("Het product van " + num1 + " en " + num2 + " is: " + product);
       }
       else{
           resultaatElement.innerText = "U heeft geen geldige getallen ingegeven.";
       }
    });
});