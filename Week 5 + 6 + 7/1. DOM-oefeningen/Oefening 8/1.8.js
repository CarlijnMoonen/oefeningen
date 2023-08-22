let opmaak1 = document.getElementById("knopOpmaak1");
let opmaak2 = document.getElementById("knopOpmaak2");

// const articleElement = document.querySelector("article");
// articleElement.setAttribute("id", "articleElement");
//
// let tekst = document.getElementById("articleElement");

let opmaak = document.getElementById("cssLink");

opmaak1.addEventListener("click", function (){
    opmaak.href = "opmaak1.css";
});

opmaak2.addEventListener("click", function (){
    opmaak.href = "opmaak2.css";
})