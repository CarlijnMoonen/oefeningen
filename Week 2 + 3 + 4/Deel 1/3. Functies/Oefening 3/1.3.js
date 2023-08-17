function isVijftig(){
    let getal1 = parseInt(prompt("Geef een getal tussen 0 en 100:"));
    let getal2 = parseInt(prompt("Geef nog een getal tussen 0 en 100"));

    if (getal1 === 50 || getal2 === 50 || getal1 + getal2 === 50){
        return "Hoera VIJFTIG";
    }
    else {
        return "Hoera geen VIJFTIG";
    }
}

document.getElementById('resultaat').innerText =  isVijftig();