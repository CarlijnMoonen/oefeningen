let bovengrens = 100;
let ondergrens = 1;
let som = 0;

for (number = ondergrens; number <= bovengrens; number++) {
    if (number % 3 === 0) {
        som += number;
    }

    console.log("De som van de getallen deelbaar door 3 is:" + som);
}