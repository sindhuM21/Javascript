function employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    let montlyBonus = 10000;

    finalSalary = baseSalary + this.montlyBonus;

    let calculateFinalSalary = function(){
        let finalSalary = this.baseSalary + this.montlyBonus;
        console.log(`Final salary is ${finalSalary}`);
    }
    this.getEmployeeDetails = function() {
        console.log(`Employee name is ${this.name} and age is ${this.age}`);
    }

}

let emp = new employee("John", 18, 45000);
emp.getEmployeeDetails();
emp.calculateFinalSalary();