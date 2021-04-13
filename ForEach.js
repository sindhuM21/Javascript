const movements = [400, 833, -433, 922, 789, 322, 4322, 432, 4343, -42323, -232];

movements.forEach(function(movement, index){
    console.log("index:-",index, "item", movement);

})

//ForEach methods for sets and maps

const currencies = new Map([
    ["USD", "United States Dollers"],
    ["EUR", "Euro"],
    ["GBP", "Pound Sterling"]])

currencies.forEach(function(currency, index){
    console.log(`${index}: ${currency}`);
})

//forEach for sets

const curencySets = new Set(["USD", "EUR", "GBP", "USD"])

curencySets.forEach(function(curSet, index, items){
    console.log(`currency sets ${index}:- ${curSet}`)

})
