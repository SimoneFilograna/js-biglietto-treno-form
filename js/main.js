
const fullName = document.getElementById("fullname");
const kmRoute = document.getElementById("km-route");
const age = document.getElementById("age-number");
const btnCalc = document.getElementById("btn-check");

console.log(fullName.value);
console.log(kmRoute.value);
console.log(age.value);



btnCalc.addEventListener("click", function(){
    const nameTotal = fullName.value;
    const ageCheck = age.value;
    const kmLong = kmRoute.value;
    const ticketContainer = document.querySelector(".content-container");

    //price in decimal conversion
    const price = (kmLong * 0.21);
    const priceResult = price.toFixed(2);

    // offerta minori
    const minOffer = (price - (price * 0.20));
    const minResult = minOffer.toFixed(2);

    //offerta pensionati
    const maxOffer = (price - (price * 0.40));
    const maxResult = maxOffer.toFixed(2);

    ticketContainer.classList.remove("d-none");

    document.getElementById("ticket-name").innerHTML = nameTotal;

    if (ageCheck < 18) {
        document.getElementById("ticket-price").innerHTML = (minResult);
        document.getElementById("offer").innerHTML = "20%";
    } else if (ageCheck >= 65) {
        document.getElementById("ticket-price").innerHTML = (maxResult);
        document.getElementById("offer").innerHTML = "40%";

    } else {
        document.getElementById("ticket-price").innerHTML = (priceResult);
        document.getElementById("offer").innerHTML = "Biglietto ordinario";
    }

    document.getElementById("cab").innerHTML =  Math.floor((Math.random() * 10) + 1);

    document.getElementById("serial-number").innerHTML = (Math.random() * 100000).toFixed(0);


    
})









//total price

// if (age < 18) {
//     document.getElementById("ticket-price").innerHTML = (minResult + "€");   
// }   else if (age >= 65) {
//     document.getElementById("ticket-price").innerHTML = (maxResult + "€");
// }   else {
//     document.getElementById("ticket-price").innerHTML = (priceResult + "€");
// }

