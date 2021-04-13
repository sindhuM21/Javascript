const mySet = new Set(["sidhi", 1, false, "yes", "hi"]);
const emp = {
    firstName: "sidhi",
    lastName: "mallik"
}
mySet.add(emp);
console.log("mySet",mySet);

console.log(mySet.has("sidhi"));

mySet.delete("hi");
//mySet.clear(mySet);
console.log(mySet)

const mySetSize = mySet.size;
console.log(mySetSize);

//Iterating the sets

for(const item of mySet){
    console.log("mySet item",item);
}

for(const mySetKeys of mySet.keys()){
    console.log("mySet keys", mySetKeys);
}

for(const mySetValues of mySet.values()){
    console.log("mySetvalues", mySetValues);
}

for(const mySetEntries of mySet.entries()){
    console.log("mySeEntries", mySetEntries);
}

 //Removing duplicates from an array

 const colours = ["red", "white", "pink", "green", "pink", "white"]

 const coloursUnique = [...new Set(colours)];
 console.log("coloursUnique", coloursUnique);