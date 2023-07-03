
const fullName = document.getElementById("fullname");
const kmRoute = document.getElementById("km-route");
const age = document.getElementById("age-number");
const btnCalc = document.getElementById("btn-check");

console.log(fullName.value);
console.log(kmRoute.value);
console.log(age.value);


btnCalc.addEventListener("click", function(){
    const ageCheck = age.value
    const kmLong = kmRoute.value

    //price in decimal conversion
    const price = (kmLong * 0.21);
    const priceResult = price.toFixed(2);

    // offerta minori
    const minOffer = (price - (price * 0.20));
    const minResult = minOffer.toFixed(2);

    //offerta pensionati
    const maxOffer = (price - (price * 0.40));
    const maxResult = maxOffer.toFixed(2);


    if (ageCheck < 18) {
        console.log(minResult)
    } else if (ageCheck >= 65) {
        console.log(maxResult)
    } else {
        console.log(priceResult)
    }
    
})









//total price

// if (age < 18) {
//     document.getElementById("ticket-price").innerHTML = (minResult + "€");   
// }   else if (age >= 65) {
//     document.getElementById("ticket-price").innerHTML = (maxResult + "€");
// }   else {
//     document.getElementById("ticket-price").innerHTML = (priceResult + "€");
// }

