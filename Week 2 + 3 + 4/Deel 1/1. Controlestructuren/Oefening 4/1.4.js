function getHuidigeTijd(){
    let huidigeTijd = new Date();
    let uren = huidigeTijd.getHours();
    let welkom;

    if (uren >= 7 && uren < 12){
        welkom = "Goedemorgen! Het is momenteel " + tijdFormat(huidigeTijd) + ".";
    }
    else if (uren >= 12 && uren < 18){
        welkom = "Goede dag! Het is momenteel " + tijdFormat(huidigeTijd) + ".";
    }
    else{
        welkom = "Goede avond! Het is momenteel " + tijdFormat(huidigeTijd) + ".";
    }

    document.getElementById('welkomstBericht').textContent = welkom;
}

function tijdFormat(tijd){
    let uren = tijd.getHours();
    let minuten = tijd.getMinutes();

    if (minuten < 10) {
        minuten = "0" + minuten;
    }

    return uren + ':' + minuten;
}

getHuidigeTijd();