const student = {
    name: "Jyoti",
    course: "Btech",
    branch: "CSE",
    section: "B",
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
const student2 = {
    name: "jsdsnf",
    course: "Btech",
    branch: "jdn",
    section: "A",
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
console.log("Before modification student", student.section);
console.log("Before modification student", student.Address.city);
const newStudnet = Object.assign({}, student);
console.log(newStudnet);

newStudnet.section = "A";
newStudnet.Address.city = "Noida";
console.log("After modification student", student.section);
console.log("After modification student", student.Address.city);