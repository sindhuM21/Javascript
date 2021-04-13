"use strict";
const person = new Map();
person.set("Sidhi", {mail: "gmail.com", hobbies: "dancing"});
person.set("par", {mail: "gmail.com", hobbies: "dancing"});
person.set("ch", {mail: "gmail.com", hobbies: "dancing"});
person.set("neel", {mail: "gmail.com", hobbies: "dancing"});
person.set("sav", {mail: "gmail.com", hobbies: "dancing"});
console.log(person);

console.log(person.has("Sidhi"));

const mapItr = person.keys();
console.log("person1111",mapItr.next().value);
for(const person of mapItr){
    console.log("personnnn", person);

}
console.log("person2222",mapItr.next().value);



const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator1 = map1.keys();

console.log(iterator1.next().value);
// expected output: "0"

console.log(iterator1.next().value);
// expected output: 1


let name = "Sidhi";
console.log(name); 

let firstName = name;
console.log(firstName);

name = "malli";
console.log(name);

console.log(name);
console.log(firstName); 
console.log(name);

console.log("callllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll");


const lufthana = {
    airline: "Lufthana",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode} ${flightNum}, ${name}`});

    }
};

const euroWings = {
    airline: "EuroWings",
    iataCode: "EW",
    bookings: []
};

lufthana.book.call(euroWings, "1232", "euro");

var ccc = "Sidhi";
var ccc = "sindhu";

console.log("cccccccccccccccccccccccccc", ccc);


