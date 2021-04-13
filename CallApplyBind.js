"use strict";
const lufthana = {
    airline: "Lufthana",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode} ${flightNum}, ${name}`});

    }
};
lufthana.book("1232", "sidhi");
console.log("lufthane", lufthana);

const euroWings = {
    airline: "EuroWings",
    iataCode: "EW",
    bookings: []
};

const book = lufthana.book;
book.call(euroWings, "343", "sindh");

console.log("euroWingssssssssssssssss", euroWings);
const flightData = [432, 'jonas']

book.apply(euroWings, flightData);

//bind method

console.log("bind methoddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");

const bookEW = book.bind(euroWings);
console.log("bookEw", bookEW);
bookEW(423232, "sindhi gundhi");

const bookLH = book.bind(lufthana, "7878");
bookLH(42434, "gundi pundi");

//Note: this keyword always points to the element on which that handler is attachd to



const addTax = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};

const calTax = addTax(0.23);
console.log("cal taxxxx", calTax(100));

//partial application

const addTax2 = (rate, value) => value + value * rate;

const calTax2 = addTax2.bind(null, 0.23);
console.log("call tax2222",calTax2(533));
