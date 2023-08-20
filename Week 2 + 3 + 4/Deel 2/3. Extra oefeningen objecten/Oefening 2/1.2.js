const account = {
    landcode: "BE",
    banknummer: "76",
    uniekNummer: "0012557909",
    saldo: 0,

    berekenControleGetal: function () {
        let rekeningnummer = this.uniekNummer;
        let nummeriekRekeningnummer = parseInt(rekeningnummer);
        let controlegetal = nummeriekRekeningnummer % 97;

        return controlegetal;
    },

    print: function () {
        let volledigRekeningnummer = this.landcode + " " + this.banknummer + " " + this.uniekNummer + " " + this.berekenControleGetal();
        console.log("Bankrekenignummer: " + volledigRekeningnummer);
    },

    geldStorten: function (bedrag){
        this.saldo += bedrag;
        console.log("Geld storten: €" + bedrag + " Huidig saldo: €" + this.saldo);
    },

    geldAfhalen: function (bedrag){
        if (this.saldo >= bedrag){
            this.saldo -= bedrag;
            console.log("Geld afhalen: €" + bedrag + " Huidig saldo: €" + this.saldo);
        }
        else{
            console.log("Onvoldoende saldo!")
        }
    }
};

account.print();
account.geldStorten(100);
account.geldAfhalen(20);