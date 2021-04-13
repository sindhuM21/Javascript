//class declaration can be used ex:- const personCal = { }
class personCl {
    constructor(fullName, birthYear, from){
        this.fullName = fullName;
        this.birthYear = birthYear;

    }
    calAge(){
        console.log(2021 - this.birthYear);
    }

    greet(){
        console.log(`welcome ${this.firstName}`);
    }

    get age(){
        return 2021 - this.birthYear;
    }

    set fullName(name){
        if(name.includes(" ")) this._fullName = name;
        else console.log("name is not full");
    }

    get fullName(){
        return this._fullName;
    }
}

personCl.prototype.place = function(){
    console.log(`She is from ${this.place}`);

}

const jessica = new personCl("jessica Devis", 1998, "Shivamogga");;
const walter = new personCl("Walter", 1990, "mangalore")
const jonas = new personCl("jonas", 1988, "Tirthahalli");

console.log("walterrrrr", walter);

console.log("jesicca proto",jessica.__proto__);
console.log("jesica jesica", jessica.__proto__.__proto__);
console.log("jesica jesica jesica", jessica.__proto__.__proto__.__proto__);

jessica.calAge();

console.log(jessica.age);

console.log(jessica._fullName);