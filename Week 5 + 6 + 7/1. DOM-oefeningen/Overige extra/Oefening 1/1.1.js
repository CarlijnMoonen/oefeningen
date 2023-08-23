document.addEventListener("DOMContentLoaded", function (){
   const body = document.body;

   const titel = document.createElement("h1");
   titel.textContent = "Sandy Bridge microarchitectuur";
   titel.setAttribute("id", "titel");
   body.appendChild(titel);

   const br1 = document.createElement("br");
   body.appendChild(br1);

   const onderTitel = document.createElement("p");
   onderTitel.textContent = "Beweeg over de logo's om de processor te zien";
   onderTitel.setAttribute("id", "onderTitel");
   body.appendChild(onderTitel);

   const br2 = document.createElement("br");
   body.appendChild(br2);

   let gekozenProcessor = document.createElement("label");
   gekozenProcessor.setAttribute("for", "imgDiv");
   gekozenProcessor.id = "gekozenProcessor";
   body.appendChild(gekozenProcessor);

   const br3 = document.createElement("br");
   body.appendChild(br3);

   let imgDiv = document.createElement("div");
   imgDiv.id = imgDiv;
   body.appendChild(imgDiv);

   let img1 = document.createElement("img");
   img1.className = "images";
   img1.src = "Images/core_i3_logo.gif"
   img1.alt = "core_i3_logo";
   imgDiv.appendChild(img1);

   let img2 = document.createElement("img");
   img1.className = "images";
   img1.src = "Images/core_i5_logo.gif"
   img1.alt = "core_i3_logo";
   imgDiv.appendChild(img2);

   let img3 = document.createElement("img");
   img1.className = "images";
   img1.src = "Images/core_i7_logo.gif"
   img1.alt = "core_i3_logo";
   imgDiv.appendChild(img3);
});