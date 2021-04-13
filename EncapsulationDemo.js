class Student {
    constructor(){
        let name, marks;
        let hobbies = [];
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;

    }
    setHobbies(hobbies){
        this.hobbies += hobbies;

    }
    getHobbies(){
        return this.hobbies;
    }
    getMarks(){
        return this.marks;
    }
    setMarks(marks){
        this.marks = marks
    }
}

const stu = new Student();

stu.setName("Sidhi");
stu.setMarks(98);
stu.setHobbies("swim");
stu.setHobbies("paint");
console.log(stu.getName(), stu.getMarks());

console.log(stu.getHobbies());