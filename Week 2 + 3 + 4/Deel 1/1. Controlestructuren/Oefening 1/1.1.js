function controleerLeeftijd(){
    let geboorteJaar = document.getElementById("birthYear").innerText;
    let huidigJaar = new Date().getFullYear();
    let leeftijd = huidigJaar - geboorteJaar;

    if (leeftijd > 20){
        alert("Je bent oud genoeg om de informatie op deze webpagina te bekijken.");
    }
    else{
        alert("Je bent te jong om de informatie op deze webpagina te bekijken.");
    }
}