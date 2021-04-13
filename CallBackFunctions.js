const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();

};

const upperFirstWord = function(str){
    const[first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");

}

//Higher order function

const transformer = function(str, fn){
    console.log("original string", str);
    console.log("Transformed string", `${fn(str)}`);
}

transformer("JavaScript is the best", upperFirstWord);
transformer("JavaScript is the best", oneWord);

//clousers
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const heyGreet = greet("Hello");
heyGreet("Sidhi");
greet("Hello")("Sindhu M");

const greetArrow = greetingArrow => nameArrow => console.log(`${greetingArrow} ${nameArrow}`);


greetArrow("welcome")("Sindhu Mall")