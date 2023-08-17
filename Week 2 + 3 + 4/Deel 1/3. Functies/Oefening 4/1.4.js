function startMetHallo() {
    let zin = prompt("Voer een zin in:");

    if (zin.startsWith('Hallo')){
        return zin;
    }
    else {
        let aangepasteZin = "Hallo, " + zin.charAt(0).toLowerCase() + zin.slice(1);
        return aangepasteZin;
    }
}

console.log(startMetHallo());