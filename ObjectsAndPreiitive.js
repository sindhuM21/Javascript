const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 19
}
//const jessicaMarried = jessica;
jessicaMarried.lastName = "Davis"
console.log("jessica last name", jessica.lastName);
console.log("jessica after marriage last name", jessicaMarried.lastName);
console.log("jessica", jessica);
console.log("jessicaMarried", jessicaMarried);

const jessica2 = Object.assign({}, jessicaMarried);

console.log("jessica2", jessica2);
jessicaMarried.family = ["Alice", "Kevin"];
jessica2.lastName = "jac";
console.log("jessica2", jessica2.lastName);
console.log("jessica after marriage last name", jessicaMarried.lastName);
