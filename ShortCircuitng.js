console.log(false || 0);

console.log("" && 43 && 0);

const restaurent = {
    name: "classico italiano",
    location: "via angelo Tavanti, Freenze, Itali",
    categories: ["Itallian", "pizeria", "vegiterian", "Organic"],
    startMenu: ["Focassio", "BrushCheta", "Garlic Bread", "Caprese salad"],
    MainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        }
    },
    order: function (starterIndex, mainIndex) {
        return [this.startMenu[starterIndex], this.MainMenu[mainIndex]];
    },
    orderDelivery: function (starterIndex = 1, mainIndex = 2, time, address) {
        console.log("startIndexxxx", starterIndex);
        console.log("mainIndexxxx", mainIndex);
        console.log("timeeee", time);
        console.log("addresssss", address);
    }
};

restaurent.numGuests = 0;


const guest1 = restaurent.numGuests ? restaurent.numGuests : 10;
console.log("guest1", guest1);

restaurent.numGuests = 23;

const guest2 = restaurent.numGuests || 10
console.log("numGuest2 ", guest2);

const ordered = restaurent.order && restaurent.order(2, 0);
console.log("ordered", ordered);


