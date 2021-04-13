const emp = new Map();
//emp["firstName"] = "sidhi"; //But that way of setting a property does not interact with the Map data 
                               //structure. It uses the feature of the generic object
                               //The value of 'bla' is not stored in the Map for queries. 
                               //Other operations on the data fail:
                               
console.log(emp);
//console.log(emp.has("firstName"))

emp.set("sidhi", {firstName: "sidhi", lastName: "mallik"});
emp.set("colours", ["white", "red", "blue"]);
emp.set("isActive", true);
emp.set("ding", "dong");
console.log(emp.has("sidhi"));
console.log(emp.delete("ding"));
//console.log(emp.clear());
console.log(emp);

console.log(emp.get("colours"));
console.log(emp.size);

//Iterating maos using for of

for(const [key, value] of emp){
    console.log(`key==>${key} value==>${value}`);
}

for(const empEntries of emp.entries()){  //entries returns an array of key and value
    console.log("empEntries=>", empEntries)
}

for(const [key, value] of emp.entries()){  //entries returns an array of key and value
    console.log(`key=>${key} value=>${value}`);
}

for(const empKeys of emp.keys()){
    console.log("empKeys", empKeys);
}

for(const empValues of emp.values()){
    console.log("empValues", empValues);
}

//Relation with Arrays object

let kvArray = [["key1", "value1"], ["key2", "value2"]];

// Use the regular Map constructor to transform a 2D key-value Array into a map
let kvMap = new Map(kvArray);
console.log(kvMap);

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(kvMap)) // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...kvMap])

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(kvMap.keys())) // ["key1", "key2"]

//clonning and merging maps

let original = new Map([
    [1, 'one']
  ])
  
  let clone = new Map(original)
  
  console.log(clone.get(1))       // one
  console.log(original === clone) // false (useful for shallow comparison)

  //Maps can be merged, maintaining key uniqueness:

  let first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ])
  
  let second = new Map([
    [1, 'uno'],
    [2, 'dos']
  ])
  
  // Merge two maps. The last repeated key wins.
  // Spread operator essentially converts a Map to an Array
  let merged = new Map([...first, ...second])
  
  console.log(merged.get(1)) // uno
  console.log(merged.get(2)) // dos
  console.log(merged.get(3)) // three

  //Maps can be merged with Arrays, too:

  let firstMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ])
  
  let secondMap = new Map([
    [1, 'uno'],
    [2, 'dos']
  ])
  
  // Merge maps with an array. The last repeated key wins.
  let mergedMap = new Map([...firstMap, ...secondMap, [1, 'eins']])
  
  console.log(mergedMap.get(1)) // eins
  console.log(mergedMap.get(2)) // dos
  console.log(mergedMap.get(3)) // three