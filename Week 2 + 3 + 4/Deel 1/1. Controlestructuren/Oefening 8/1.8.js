function getHuidigeTijd(){
    let huidigeTijd = new Date();
    let uren = huidigeTijd.getHours();
    let welkom;

    switch (true){
        case uren >= 7 && uren < 12:
            welkom = "Goedemorgen! Het is momenteel " + tijdFormat(huidigeTijd) + ".";
            break;
        case uren >= 12 && uren < 18:
            welkom = "Goede dag! Het is momenteel " + tijdFormat(huidigeTijd) + ".";
            break;
        default:
            welkom = "Goede avond! Het is momenteel " + tijdFormat(huidigeTijd) + ".";
    }

    document.getElementById('welkomstBericht2').textContent = welkom;
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