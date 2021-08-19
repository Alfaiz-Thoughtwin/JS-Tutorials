console.log("Callback Functions in JavaScript");

/*
callback -> function inside a function
*/

const students = [
    {name:"Alfaiz", subject:"JavaScript"},
    {name:"SkillF", subject:"Python"}
]

function enrollStudent(student, callback) {
    setTimeout(() => {
        students.push(student);
        console.log(`Student:${student.name} Has Been Enrolled`);
        callback();
    }, 3000);
}

function getStudents(params) {
    setTimeout(() => {
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students Have Been Fetched");
    }, 1000);
}

let newStudent = {name:"Rohan", subject:"C#"};
enrollStudent(newStudent, getStudents);
// getStudents();