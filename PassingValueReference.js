const flight = "LH123";
const sidhi = {
    name: "Sidhi",
    passport: 3234343434
}

const checkIn = function(flightName, passenger){
    flightName = "IJ123"
    passenger.name = "Sidhi M"
    console.log("func flightname", flightName);
    console.log("passenger.name", passenger.name);
    if(passenger.passport == 3234343434){
        console.log("checked in")
    } else {
        console.log("Wrong passport");
    }
}

checkIn(flight, sidhi);

console.log("flighttttttttttttt", flight);
console.log("passenger.name", sidhi.name);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 100000000000000);
};

newPassport(sidhi);
checkIn(flight, sidhi);
