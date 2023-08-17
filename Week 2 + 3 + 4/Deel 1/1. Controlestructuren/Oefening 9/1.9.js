function toonMaalTafels(){
    let invoerGetal = parseInt(prompt("Geef een getal tussen 0 en 10."));

    if (invoerGetal >= 1 && invoerGetal <= 10){
        document.getElementById('tafels').innerText = genereerMaalTafels(invoerGetal);
    }
    else{
        console.log("Niet mogelijk");
    }
}

function genereerMaalTafels(nummer){
    let tafel = "";
    for (cijfer = 1; cijfer <= 10; cijfer++){
        let uitkomst = nummer * cijfer;
        tafel += nummer + " x " + cijfer + " = " + uitkomst + "\n";
    }
    return tafel;
}

toonMaalTafels();