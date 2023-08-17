let opleidingenDigital =
    ["Digitale vormgeving", "Internet of Things", "Programmeren", "Systeem- en Netwerkbeheer",
        "Multimedia- en Commmunicatietechnologie"];

let opleidingenString = opleidingenDigital.join("\n"); //samenvoegen + linebreak

document.getElementById('opleidingen').innerText = opleidingenString;
