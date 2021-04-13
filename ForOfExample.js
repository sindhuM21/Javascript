//Arrays
const mobiles = ["oneplus", "iphone", "samsung", "lenovo", "nokia", "blackberries"];

//fetching current elements

for(const mobile of mobiles){
    console.log(mobile);
}

//fetching entries

for(const [mobileEnties] of mobiles.entries()){
    console.log(mobileEnties);
}

for(const [index, value] of mobiles.entries()){
    console.log(`index: ${index} ${value}`);
}

//Simple object

const employee = {
    name: "sidhi",
    empId: 4308,
    salry: 23234323,
    email: "sid@gmail.com"
}

//fetching both keys and value

for(const emp of Object.entries(employee)){
    console.log(emp)
}

for(const [key, value] of Object.entries(employee)){
    console.log(`key:- ${key} and value:- ${value}`);
}

for(const objKey of Object.keys(employee)){
    console.log(objKey);
}

for(const objValue of Object.values(employee)){
    console.log(objValue);
}

const empEntries = Object.entries(employee);
console.log("empEntriessssssssssssss", empEntries);

//const [prop, value] = Object.entries(employee);
//console.log(`prop: ${prop} value:- ${value}`);

const empProperties = Object.keys(employee);
console.log("empProperties", empProperties);

const empValues = Object.values(employee)
console.log("empValuesss", empValues);

//Complex objects

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

for(const day of Object.entries(restaurent.openingHours)){
    console.log("entriessss",day);
}

const restEntries = Object.entries(restaurent.openingHours);
console.log("restEntriessss", restEntries);

for(const [day, time] of Object.entries(restaurent.openingHours)){
    console.log(`day:- ${day} and time:- ${JSON.stringify(time)}`);
}

const restProps = Object.keys(restaurent)
console.log("restProperties", restProps);

const restValues = Object.values(restaurent);
console.log("restValues", restaurent);

for(const [day, {open, close}] of Object.entries(restaurent.openingHours)){
    console.log(`day:- ${day}, open at ${open} closes at ${close}`)
}

for(const keys of Object.keys(restaurent.openingHours)){
    console.log(keys)
}

for(const values of Object.values(restaurent.openingHours)){
    console.log(values)

}



