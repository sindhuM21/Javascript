"use strict";

function details(){
    var name = "sindhu";
    let age = 16;
    const dob = "3-3-2020";
    let count = 0;
    if(count == 0){
        let letCounted = true;
        var varCounted = true;
        const constCount = true;
        function insideIF(){
            console.log("yes ir is count is equal to zero");
        }
        insideIF()
    }
    //insideIF(); //Error: insideIF is not defind, (in strict mode)
    //console.log("letCounted", letCounted);   //Error: counted is not defined
    console.log("varCounted", varCounted);
    //console.log("constCount", constCount);   //Error: constCount is not defined
}

details();

const restaurent = {
    name: "classico italiano",
    location: "via angelo Tavanti, Freenze, Itali",
    categories: ["Itallian", "pizeria", "vegiterian", "Organic"],
    startMenu: ["Focassio", "BrushCheta", "Garlic Bread", "Caprese salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    // Es6 feature
    // openingHours,
    order: function (starterIndex, mainIndex) {
        return [this.startMenu[starterIndex], this.MainMenu[mainIndex]];
    },
    orderDelivery: function (starterIndex = 1, mainIndex = 2, time, address) {
        console.log("startIndexxxx", starterIndex);
        console.log("mainIndexxxx", mainIndex);
        console.log("timeeee", time);
        console.log("addresssss", address);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
    },

    // Es6 feature
    orderPizza (mainIngrediant, ...otherIngrediant) {
        console.log("mainIngrediant", mainIngrediant);
        console.log("otherIngrediant", otherIngrediant);
    }
};


