"use strict";
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birhYear = birthYear;
}

const matilda = new Person("matilda", 1997);
const hohn = new Person("john", 1998);

Person.prototype.calcAge = function(){
    console.log(2021 - birthYear);
}

console.log("person prototypeeeee", Person.prototype);

console.log(matilda);

console.log(matilda.__proto__);
console.log(matilda instanceof Person);
console.log(matilda.__proto__.__proto__);
