const fruits = ["apple", "ornage", "banana"];
const [healthyFruit, favtFruit, mornFruit] = fruits;
console.log(healthyFruit, favtFruit, mornFruit);

const num = [1, 5, [4, 6, 7]];
const [num1, num2, [num3, num4, num5]] = num;
console.log(num1, num2, num3, num4, num5);

const restaurent = {
    name: "classico italiano",
    location: "via angelo Tavanti, Freenze, Itali",
    categories: ["Itallian", "pizeria", "vegiterian", "Organic"],
    startMenu: ["Focassio", "BrushCheta", "Garlic Bread", "Caprese salad"],
    MainMenu: ["Pizza", "Pasta", "Risotto"],
    order: function (starterIndex, mainIndex) {
        return [this.startMenu[starterIndex], this.MainMenu[mainIndex]];
    }
};

let [main, , secondary] = restaurent.categories;
console.log("main", main);
console.log("secondary", secondary);

//switching variables

[secondary, main] = [main, secondary];
console.log("main1", main);
console.log("secondary2", secondary);

console.log(restaurent.order(2, 0));
const [starter, mainCourse] = restaurent.order(2, 0);
console.log("starter", starter);
console.log("mainCourse", mainCourse);

//default values

const [a=1, b=1, c=1] = [2, 4];
console.log(a, b, c);

const [s, t, r] = "sid";
console.log("s", s);
console.log("t", t);

//nested arrays
const nested = [2, 4, [5, 6]];
const [i, j, [k, l]] = nested;

console.log(i, j, k, l);