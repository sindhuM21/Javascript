"use strict";

const jonas = {
    firstName: "Jonas",
    lastName: "Jacob",
    birthYear: 2007,
    dob: "21-09-2002",
    job: "SE",
    calAge: function(){
        console.log("this of calAge functionnnnnnnnnnnnnnnnnnnnnnnn", this);
        console.log("this of jonas.calage", this)
        this.age =  2020 - this.birthYear;
        let localThis = this;
        const isMellenial = function(){
            console.log("this of ismellinealllllllllllllll", this);
            console.log(localThis.age >= 30 ? "mellinial" : "not mellineal");
        }
        isMellenial();
    const getDateOfBirth = () => {
        console.log(`${this.firstName} date of birth is ${this.dob}` );
    }
    getDateOfBirth();
    return this.age;
    },
    calArrowReturnAge: () => 2020 - this.birthYear
}
console.log("global this",this);
console.log("this of jonas", jonas.this);

const calAge = function(birthYear){
    console.log("this of calAge", this);  //In strict mode this of calAge is undefined otherwise it is global object.
    return 2020 - birthYear; 
}

calAge(2002);

function decalreCalAge(birthYear){
    console.log("this of decalreCalAge", this);
    return 2020 - birthYear;
}

decalreCalAge(2001);

const arrowCalAge = birthYear => {
    console.log("this of arrow cal age", this); //this for arrow function is lexical this keyword, means it inherits the parental this keyword.
    return 2020 - birthYear;
} 

arrowCalAge(2008);

console.log("jonas cal age",jonas.calAge());

console.log("calArrowReturnAge", jonas.calArrowReturnAge());
var a = 8;
var b = 3;
const sidhi = {
    firstName: "sidhi",
    lastName: "m",
    birthYear: 2001,
    dob: "12-2-2008",
    a: 1,
    b: 2,
    calSum: () => {
        console.log("this of call summmmmmm", this);
        //let a = 8;
        //let b = 3;
        return this.a + this.b;
    },
    calSumFuncDef: function(){
        return this.a + this.b;

    },
    calSumFuncExp: function(){
        return this.a + this.b;

    }
}
console.log("cal sum expppppppppppppp",sidhi.calSumFuncExp());
console.log("cal summmmmmmmmmmmmmmmmmmmmmm",sidhi.calSum());
console.log("cal sum def ",sidhi.calSumFuncDef());
sidhi.calculateAge = jonas.calAge;

sidhi.calculateAge(2005);
console.log("sidhi ageeeeeeeeeeeeeeeeeeeee", sidhi.calculateAge());

console.log("out side the objectttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt");

function calculateDifferenceDecalre(a, b){
    console.log("this of calculateDifferenceDecalre", this);
    return a - b;
}
const calculateDifferenceExpression = function(a, b){
    console.log("this of calculateDifferenceExpression", this);
    return a - b;
}
const calculateDifferenceArrow = (a, b) => {
    console.log("this of calculateDifferenceArrow", this);
    return a - b;
}

console.log("calculateDifferenceDecalre", calculateDifferenceDecalre(2, 6));
console.log("calculateDifferenceExpression", calculateDifferenceExpression(5, 8));
console.log("calculateDifferenceArrow", calculateDifferenceArrow(1, 6));
