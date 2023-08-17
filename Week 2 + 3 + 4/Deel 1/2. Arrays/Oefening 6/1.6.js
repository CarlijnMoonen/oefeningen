let hondenRassen = ["Teckel", "Shiba Inu", "Akita Inu", "Wolfshond", "Aussie", "Dalmatiër", "Deense Dog",
    "Catahoula Leopard Dog", "Border Collie", "Boerenfox", "Mechelse Herder", "Duitse Herder", "Dobberman",
    "Rottweiler", "Duitse Staande"];

let verwijderEersteArray = hondenRassen.shift();
let verwijderLaatsteArray = hondenRassen.pop();

console.log("De bijgewerkte hondenrassen in de array zijn: " + hondenRassen.join(", "));