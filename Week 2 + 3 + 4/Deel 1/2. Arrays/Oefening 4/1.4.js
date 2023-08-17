let hondenRassen = ["Dalmatiër", "Deense Dog", "Catahoula Leopard Dog", "Border Collie", "Boerenfox",
    "Mechelse Herder", "Duitse Herder", "Dobberman", "Rottweiler", "Duitse Staande"];

let nummer = parseInt(prompt("Geef een random nummer tussen 1 en 10:"));

if (nummer >= 1 && nummer <= 10){
    let gekozenRas = hondenRassen[nummer - 1];
    document.getElementById('hondenras').innerText = "Je hebt gekozen voor het ras: " + gekozenRas;
}
else{
    document.getElementById('hondenras').innerText = "Sorry, katten zijn niet toegestaan";
}