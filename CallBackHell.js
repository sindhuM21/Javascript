"use strict";

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getCountryData(country){
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
    request.send();

    request.addEventListener("load", function(){
        const [, response1] = JSON.parse(request.responseText);
        console.log("response1111111111111111111", response1);

        const [neighbour] = response1.borders;
        const request2 = new XMLHttpRequest();
        request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
        request2.send();
        
        request2.addEventListener("load", function(){
            const response2 = JSON.parse(request2.responseText);
            console.log("response22222222222", response2); 
        })
    });
}

getCountryData("india");

setTimeout(() => {
    console.log("1st timeout");
    setTimeout(() => {
        console.log("2nd set time out");
        setTimeout(() => {
            console.log("3rd set timeout")
        }, 1000)
    }, 1000)
}, 1000)