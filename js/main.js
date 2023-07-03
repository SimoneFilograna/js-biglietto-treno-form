const firstName = prompt ("Inserisci qui il tuo nome")
const lastName = prompt ("inserisci qui il tuo cognome")
const kmRoute = parseInt( prompt ("Quanti km devi percorrere?"));
const age = parseInt( prompt ("Quanti anni hai?"));

//price in decimal conversion
const price = (kmRoute * 0.21);
const priceResult = price.toFixed(2);


// offerta minori
const minOffer = (price - (price * 0.20));
const minResult = minOffer.toFixed(2);

//min decimal
console.log("prezzo scontato 2 decimali");
console.log(minResult);


//offerta pensionati
const maxOffer = (price - (price * 0.40));
const maxResult = maxOffer.toFixed(2);


console.log(kmRoute, age);
console.log("prezzo");
console.log(price);
console.log("offerta minima");
console.log(minOffer);
console.log("offeta massima");
console.log(maxOffer);


document.getElementById("Name").innerHTML = firstName;
document.getElementById("Surname").innerHTML = lastName;
document.getElementById("Age").innerHTML = age;
document.getElementById("road-km").innerHTML = kmRoute;

//total price

if (age < 18) {
    document.getElementById("ticket-price").innerHTML = (minResult + "€");   
}   else if (age >= 65) {
    document.getElementById("ticket-price").innerHTML = (maxResult + "€");
}   else {
    document.getElementById("ticket-price").innerHTML = (priceResult + "€");
}

//coupon

if (age < 18) {
    document.getElementById("coupon").innerHTML = ("20%");   
}   else if (age >= 65) {
    document.getElementById("coupon").innerHTML = ("40%");
}   else {
    document.getElementById("coupon").innerHTML = ("/");
}

