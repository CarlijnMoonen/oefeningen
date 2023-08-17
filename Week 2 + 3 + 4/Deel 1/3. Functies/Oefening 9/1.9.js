function grootsteGetal(){
    let ingevoerdeGetallen = [];

    while (true){
        let invoer = prompt("Geef een random getal in of typ 'stop':");

        if (invoer.toLowerCase() === 'stop'){
            break;
        }

        let getal = parseFloat(invoer);
        if (!isNaN(getal)){
            ingevoerdeGetallen.push(getal);
        }
    }

    let grootsteGetal = null;
    for (let i = 0; i < ingevoerdeGetallen.length; i++){
        let getal = ingevoerdeGetallen[i];
        if (grootsteGetal === null || getal > grootsteGetal){
            grootsteGetal = getal;
        }
    }

    if (grootsteGetal !== null){
        console.log(ingevoerdeGetallen);
        console.log("Het grootste ingevoerde getal is: " + grootsteGetal);
    }
    else {
        console.log("Geen geldige invoer");
    }
}

grootsteGetal();