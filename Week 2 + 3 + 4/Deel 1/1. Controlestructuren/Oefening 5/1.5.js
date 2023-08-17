function controleerGetal(){
    let vraagRandomGetal = prompt("Geef een random getal.")
    let randomGetal = 50;

    if (vraagRandomGetal < randomGetal){
        document.getElementById('antwoord').textContent = "Te laag!";
    }
    else if (vraagRandomGetal == randomGetal){
        document.getElementById('antwoord').textContent = "Proficiat! Je hebt goed gegokt.";
    }
    else if (vraagRandomGetal > randomGetal){
        document.getElementById('antwoord').textContent = "Te hoog!";
    }

    document.getElementById('ingegevenGetal').textContent = "Het ingegeven random getal was: " + vraagRandomGetal;
}

controleerGetal();