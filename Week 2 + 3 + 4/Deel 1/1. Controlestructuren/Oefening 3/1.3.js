function getHuidigeTijd(){
    let huidigeTijd = new Date();
    let uren = huidigeTijd.getHours();
    let minuten = huidigeTijd.getMinutes();
    let dagdeel = uren < 12 ? "voormiddag" : "namiddag";

    if (minuten < 10) {
        minuten = "0" + minuten;
    }

    let timeString = uren + ":" + minuten;
    let welkom = "Hallo! " + "Het is momenteel " + dagdeel + "en het tijdstip is " + timeString + "uur.";

    document.getElementById('welkomstBericht').textContent = welkom;
}

getHuidigeTijd();