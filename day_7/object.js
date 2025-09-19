const student = {
    name: "Jyoti",
    course: "Btech",
    branch: "CSE",
    section:"B",
    year: 3,
    PhoneNumber: {
        phoneno1: 1234567890,
        phoneno2: 9876543210
    },
    Address:{
        houseNo: 123,
        street: "abx",
        city: "Delhi",
        state: "Delhi",
        country: "India"
    }
}
//accessing object properties
console.log(student.name);
console.log(student['name']);

let x = 'name';
console.log(student[x]);

function modifyStudent(obj) {
    obj.name = "ABC";
}
modifyStudent(student);

console.log(student.name);
console.log(studnet[name]);