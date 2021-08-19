function nameFunc() {
    let dt = document.getElementById('name').value;
    document.getElementById('n_name').innerHTML = "Name : "+dt;
}

function ageFunc() {
    let dt = document.getElementById('age').value;
    document.getElementById('n_age').innerHTML = "Age : "+dt;
}

function cityFunc() {
    let dt = document.getElementById('city').value;
    document.getElementById('n_city').innerHTML = "City : "+dt;
}

function emailFunc() {
    let dt = document.getElementById('email').value;
    document.getElementById('n_email').innerHTML = "Email : "+dt;
}


let arr = [
    {name: "xyz", salary: 12345},
    {name: "abc", salary: 3422},
    {name: "bca", salary: 434},
    {name: "xyz", salary: 5433},
    {name: "abc", salary: 3422}
];

console.log("Given Array : ",arr);

let salary = [];
let arr1 = [];
let sal_1200 = [];

for(i of arr){
    if(!(salary.includes(i.salary))){
        salary.push(i.salary);
        arr1.push(i);
    }
    salary = salary.sort((a,b)=>a-b)
}

arr1 = arr1.sort(({salary:a}, {salary:b})=> a-b)
console.log("Unique & Sorted : ",arr1);

for (j of arr1) {
    if(j.salary > 1200){
        sal_1200.push(j)
    }
}

console.log("Salary (1200) : ", sal_1200);