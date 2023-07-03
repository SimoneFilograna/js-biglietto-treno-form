// const firstName = prompt ("Inserisci qui il tuo nome")
// const lastName = prompt ("inserisci qui il tuo cognome")
// const kmRoute = parseInt( prompt ("Quanti km devi percorrere?"));
// const age = parseInt( prompt ("Quanti anni hai?"));
const fullName = document.getElementById("fullname");
const kmRoute = document.getElementById("km-route");
const age = document.getElementById("age-number");
const btnCalc = document.getElementById("btn-check");

console.log(fullName.value);
console.log(kmRoute.value);
console.log(age.value);

//price in decimal conversion
const price = (parseInt(kmRoute.value) * 0.21);
const priceResult = price.toFixed(2);

//test calcolo con nuove variabili
console.log(price)

// offerta minori
const minOffer = (price - (price * 0.20));
const minResult = minOffer.toFixed(2);

console.log(minResult);

// //min decimal
// console.log("prezzo scontato 2 decimali");
// console.log(minResult);

//offerta pensionati
const maxOffer = (price - (price * 0.40));
const maxResult = maxOffer.toFixed(2);

console.log(maxResult);









//total price

// if (age < 18) {
//     document.getElementById("ticket-price").innerHTML = (minResult + "€");   
// }   else if (age >= 65) {
//     document.getElementById("ticket-price").innerHTML = (maxResult + "€");
// }   else {
//     document.getElementById("ticket-price").innerHTML = (priceResult + "€");
// }

