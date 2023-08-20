let persoon = {
    voornaam: "Carlijn",
    achternaam: "Moonen",
    geboortedatum: new Date("1993-03-09"),

    berekenLeeftijd: function(){
        let huidigeDatum = new Date();
        let geboorteJaar = this.geboortedatum.getFullYear();
        let huidigJaar = huidigeDatum.getFullYear();
        let leeftijd = huidigJaar - geboorteJaar;

        return leeftijd;
    },

    print: function(){
        let leeftijd = this.berekenLeeftijd();
        console.log("Voornaam: " + this.voornaam + " Achternaam: " + this.achternaam + " leeftijd: " + this.geboortedatum.getFullYear());
    }
};

persoon.print();

