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

const days = ["mon", "tue", "wed", "thu", "fri", "sat"];

for(const day of days){
    const open = restaurent.openingHours[day]?.open ?? "closed";
    console.log(`On the day ${day} restaurent is open at ${open}`);

}

//Methods

console.log(restaurent?.order?.(0, 1) ?? "The order() is not allowed");
console.log(restaurent?.payBill?.() ?? "The payBill() i no allowed")

//Arrays

const users = [{
    name: 0,
    email: "sin@gmail.com"
}]

console.log(users[0]?.name ?? "The users array is an empty");
console.log(users[1]?.name ?? "The user 1 is not exists");