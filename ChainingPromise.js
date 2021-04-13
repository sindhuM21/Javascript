let fetch = require("node-fetch");

const getCountry = function(country){
    fetch(`https://restcountries.eu/rest/v2/alpha/${country}`)
    .then(function(response){
        response.json();
        console.log(response);
    }).then(function(data){
        console.log("data", data);
    })
}

getCountry("portugal");