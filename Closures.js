"use strict";

const secureBooking =  function(){
    let passenger = 0;
    return function(){
        passenger++;
        console.log(`flight is booked with ${passenger} passenger`);
    };
}

const book = secureBooking();
book();
book();

console.log("example 22222222222222222222222222222222222222222222222222222222222222222222222222222222222");

let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}

const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2)
    }
}

g();
f();
h();
f();

console.log("Example 33333333333333333333333333333333333333333333333333333333333333333333333333333");

const boardPassenger = function(n, wait){
    //const perGroup = n/3;
    setTimeout(function(){
        console.log(`now we are boarding all ${n} passengers`);
        console.log(`There are 3 groups each with ${perGroup} passenger`)
    }, wait * 1000)
    console.log(`will start boarding in ${wait} secods`);

}
const perGroup = 180;
boardPassenger(180, 3)

const hois = function(){
    console.log(`hoisvalue is ${hoisValue}`)
}

const hoisValue = 333;
hois();
