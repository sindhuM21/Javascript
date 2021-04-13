const personProto = {
    calAge(){
        console.log(2021 - this.birthYear);
    },

   init(firstName, lastName){
       firstName = this.firstName
       lastName  =this.lastName;

   }
}

const jonas = Object.create(personProto);

jonas.birthYear = 2019;
jonas.calAge();
jonas.init("jonas", "scand")

console.log(jonas.__proto__ === personProto);

console.log(jonas);