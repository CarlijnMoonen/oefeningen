function getHuidigeMaand() {
    let huidigeTijd = new Date();
    let maanden = huidigeTijd.getMonth();
    let maand;

    switch (maanden) {
        case 0:
            maand = "januari";
            break;
        case 1:
            maand = "februari";
            break;
        case 2:
            maand = "maart";
            break;
        case 3:
            maand = "april";
            break;
        case 4:
            maand = "mei";
            break;
        case 5:
            maand = "juni";
            break;
        case 6:
            maand = "juli";
            break;
        case 7:
            maand = "augustus";
            break;
        case 8:
            maand = "september";
            break;
        case 9:
            maand = "oktober";
            break;
        case 10:
            maand = "november";
            break;
        case 11:
            maand = "december";
            break;
    }

    let welkomMaand = "Hallo. De maand waarin we ons momenteel bevinden is: " + maand + ".";

    document.getElementById('welkomstBerichtMaand').textContent = welkomMaand;
}

getHuidigeMaand()