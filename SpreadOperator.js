const mobiles1 = ["onPlus", "apple", "blackberry", "nokia"]
const mobiles2 = ["redmi", "oppo", "vivo"];
const mobiles = [...mobiles1, ...mobiles2];
console.log("mobilesssssss", mobiles);
const mobile3 = ["carbon", mobiles2[2]];
console.log("mobile3", mobile3);

const sidhi = "Sidhi";
const letters = [...sidhi];
console.log("letterssssssssss", letters);

function orderPasta(ing1, ing2, ing3){
    return `You ordered pasta with ${ing1}, ${ing2}, ${ing3}`;
}

const ingrediants = ["jalepeno", "olives", "white sauce"];
console.log(orderPasta("calling order pasta",...ingrediants));

//objects
//spread operators are used to create the shallow copy
const udupi = {
    name: "Udupi grand",
    starter: ["gobi", "french fries", "paneer tikka"],
    mainCourse: ["roti", "parota", "veg biriyani"]
}

const atithi = {foundedIn: "1945",...udupi, founder: "Madhav"}
console.log("udupi:", udupi);
console.log("atithi", atithi);

const mobile4 = ["karbon", "oppo", "vivo", ["nokia", "samsung"]];
const mobileNested = [...mobile4];
console.log("mobileNestead", mobileNested);
