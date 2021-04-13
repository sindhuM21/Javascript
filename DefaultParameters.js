"use strict";
const bookings = [];
const creaeBooking = function(
    flightNum = "LA34",
    numPassenger = 100,
    price = 43 * numPassenger){
    const booking = {
        flightNum,
        numPassenger,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

creaeBooking();


