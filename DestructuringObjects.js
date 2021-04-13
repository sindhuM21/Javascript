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

const {name, openingHours, categories} = restaurent;
console.log("name", name);
console.log("openingHours", openingHours);
console.log("categories", categories);

//destructuring when we gave different property name

const {name: restaurentName, openingHours: hours, categories: tags} = restaurent; 
console.log("restaurentName", restaurentName);
console.log("hours", hours);
console.log("tags", tags);

//setting default values

const {menu = [], starter = []} = restaurent;
console.log("menu", menu);
console.log("starter", starter);

//mutating variables

let a = 111;
let b = 999;
const obj = {
    a: 23,
    b: 7,
    c: 14
};
({a, b} = obj); // {a, b} = obj; gives an error, because whenever we starts the code with {},
              // javascript expect the code block, we cannot assign anything to code block.
console.log("aaaaa bbb", a, b);

//Nested objects

const {fri: {open:o, close: c}} = openingHours;
console.log("friday", o, c);