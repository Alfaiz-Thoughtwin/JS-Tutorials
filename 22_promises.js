console.log("Promises Basics, Promise.then(), Promise.catch()");

/*
-> Promise : resolve, reject
-> function inside then is ran as - resolve()
-> function inside then is ran as - reject()
*/

const students = [
    {name:"Alfaiz", subject:"JavaScript"},
    {name:"SkillF", subject:"Python"}
]

function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Function : Your Promise has been resolved");
                resolve();
            }
            else{
                console.log("Function : Your Promise has been rejected");
                reject("Sorry Not Fulfilled");
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Alfaiz : Thanks For Resolving");
}).catch(function(error){
    console.log("Alfaiz : Very Bad Bro. Reason : "+ error);
})

function enrollStudent(student) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            students.push(student);
            console.log(`Student:${student.name} has been enrolled`);
            const error = false;
            if (!error) {
                resolve();
            }
            else{
                reject();
            }
        }, 4000);
    })
}

function getStudents() {
    setTimeout(() => {
        let str = "";
        students.forEach(function(student){
            str += "<li>"+ student.name +"</li>";
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been feteched");
    }, 1000);
}

let newStudent = {name:"Alfaiz_2", subject:"React.js"};

enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log("Some Error Occured");
})