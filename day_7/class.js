class student{
    consstructor(name, rollno, course, branch) {
        this.name = name;
        this.rollno = rollno;
        this.course = course;
        this.branch = branch;
    }
}
const student1 = new student("Jyoti", 1, "Btech", "CSE");
const student2 = new student("ABC", 2, "Btech", "IT");
console.log(student1);
console.log(student2);