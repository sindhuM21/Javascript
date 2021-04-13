let fetch = require("node-fetch");

/*function getCountryData(country){
    fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(jsonData){
        console.log(jsonData);
    })

} */

function getCountryData(country){
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function(response){
        console.log("response1111111111111111111111", response);
        return response.json();
    }, function(err){
        return console.log("errrrrr", err);
    }).then(function(response){
        const [, jsonData] = response;
        console.log("jsonDataaaaaaaaaaaaa", jsonData);

        const [neighbour] = jsonData.borders;
        return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
    }).then(function(respose2){
        return respose2.json();
    }).then(function(jsonData2){
        console.log("jsonData222222222", jsonData2)

    })
}

getCountryData("india")