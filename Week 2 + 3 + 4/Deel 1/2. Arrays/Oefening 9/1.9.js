function toonDataHuidigeMaand() {
    let huidigeDatum = new Date();
    let huidigeMaand = huidigeDatum.getMonth();
    let aantalDagenPerMaand = [
        31, // januari
        28, // februari (niet-schrikkeljaar)
        31, // maart
        30, // april
        31, // mei
        30, // juni
        31, // juli
        31, // augustus
        30, // september
        31, // oktober
        30, // november
        31, // december
    ];

    let weekdagen = [
        "Maandag",
        "Dinsdag",
        "Woensdag",
        "Donderdag",
        "Vrijdag",
        "Zaterdag",
        "Zondag"
    ];

    let dagenArray = [];
    for (dag = 1; dag <= aantalDagenPerMaand[huidigeMaand]; dag++) {
        let dagDatum = new Date(huidigeDatum.getFullYear(), huidigeMaand, dag)
        let datum = weekdagen[dagDatum.getDay()].toString() + " " + dag.toString() + "/" + (huidigeMaand + 1).toString() + "/" + huidigeDatum.getFullYear();
        dagenArray.push(datum);
    }

    return dagenArray;
}

console.log("Dagen van deze maand: " + toonDataHuidigeMaand().join("\n"));