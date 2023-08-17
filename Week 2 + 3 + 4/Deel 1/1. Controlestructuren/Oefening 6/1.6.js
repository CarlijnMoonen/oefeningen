function controleerSportVoorkeur(){
    let sportVoorkeur = prompt("Sport je graag?");
    let motivatie;

    switch (sportVoorkeur){
        case "ja":
            motivatie = "Just do it!";
            break;
        case "nee":
            motivatie = "Jammer, blijft dan maar liggen!";
            break;
        default:
            motivatie = "Dat was niet duidelijk, antwoord je vanuit je luie zetel?";
    }

    document.getElementById('motivation').textContent = motivatie;
}
