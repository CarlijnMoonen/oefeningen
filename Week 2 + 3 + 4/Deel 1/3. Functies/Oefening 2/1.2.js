function verschil(){
    let getal = parseFloat(prompt("Geef een getal:"));

    if (!isNaN(getal)){
        let uitkomst = getal - 100;

        console.log("De uitkomst is: " + uitkomst);
    }
    else{
        console.log("Voer een geldig getal in.");
    }
}

verschil();