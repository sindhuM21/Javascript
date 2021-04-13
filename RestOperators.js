const mobiles1 = ["nokia", "samsung", "Karbon", "reliance"];
const [mb1, mb2, ...others] = mobiles1;
console.log("mobiles111", mobiles1);
console.log("mb1", mb1);
console.log("mb2", mb2);
console.log("others", others);

const udupi = {
    name: "Udupi grand",
    starter: ["gobi", "french fries", "paneer tikka"],
    mainCourse: ["roti", "parota", "veg biriyani"]
}

const [gobi, fries, ...otherMenu] = [...udupi.starter, ...udupi.mainCourse];
console.log("gobi", gobi);
console.log("fries", fries);
console.log("otherMenu", otherMenu);