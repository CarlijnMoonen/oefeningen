const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let mountainsOutput = document.getElementById('mountains');

//tabel structuur maken
const tabel = document.createElement("table");
const thead = document.createElement("thead");
const tr = document.createElement("tr");

//kolom headers
const headers = ["Name", "Height", "Place"];
headers.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    tr.appendChild(th);
});

thead.appendChild(tr);
tabel.appendChild(thead);

//tabel body met data
const tbody = document.createElement("tbody");
MOUNTAINS.forEach(mountain => {
    const trBody = document.createElement("tr");

    for (const key in mountain) {
        const td = document.createElement("td");
        td.textContent = mountain[key];

        //cellen met getallen rechts uitlijnen
        if (typeof mountain[key] === "number") {
            td.style.textAlign = "right";
        }

        trBody.appendChild(td);
    }

    tbody.appendChild(trBody);
});

tabel.appendChild(tbody);

//tabel naar output in html file
mountainsOutput.appendChild(tabel);