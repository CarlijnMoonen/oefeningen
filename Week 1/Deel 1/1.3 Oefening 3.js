let userInput = prompt("Geef een getal tussen 1 en 5");
let userNumber = parseInt(userInput);

if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 5) {
    console.log("User entered: " + userNumber);
} else {
    console.log("Invalid input. Please enter a number between 1 and 5.");
}