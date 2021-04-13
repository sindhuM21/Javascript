"use strict";
console.log("nameeeee", name);
var name = "sindhu";

//console.log("letNameeeeeeeeee", letName); //Error: Cannot access 'letName' before initialization
let letName = "let name sindhu"; 

//console.log("constNameeeeeeee", constName); // Error: Cannot access 'constName' before initialization
const constName = "const name indhu";

const addFuctionDeclaraion = addFuncDeclaration(2, 5);
console.log(addFuctionDeclaraion);
function addFuncDeclaration(a, b) {
    return a + b;
}

//console.log("addFuncExpressionnnnnnn", addVarFuncExpression(3, 7)) //Error: add is not defined
var addVarFuncExpression = function(a, b){
    return a + b;
}

//console.log("addLetFuncExpresion", addLetFuncExpresion); //Error: Cannot access 'addLetFuncExpresion' before initialization
let addLetFuncExpresion = function(a, b){
    return a + b;
}

//console.log("addConstFuncExpression", addConstFuncExpression); //Error: Cannot access 'addConstFuncExpression' before initialization
const addConstFuncExpression = function(a, b) {
    return a + b;
}

//console.log("addVarArrowFunction", addVarArrowFunction); //udefined;
//console.log("addVarArrowFunction function calling", addVarArrowFunction(2, 6)); //Error: addVarArrowFunction is not a function
var addVarArrowFunction = function(a, b){
    return  a + b;
}

//console.log("addLetArrowFunction", addLetArrowFunction()); //Error: Cannot access 'addLetArrowFunction' before initialization
let addLetArrowFunction = function(a, b){
    return a + b;

}

//console.log("addConstFunction", addConstFunction()); //Cannot access 'addConstFunction' before initialization
const addConstFunction  = function(a, b){
    return a + b;

}