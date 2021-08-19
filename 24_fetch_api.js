console.log("Fetch API in JavaScript");

// Button with id myBtn:
let myBtn = document.getElementById("myBtn");

// Div with id content:
let content = document.createElement("content");

// function getData() {
//     console.log("Started getData");
//     url = "dummy.txt";
//     fetch(url).then((response) => {
//         console.log("Inside First, Then");
//         return response.text();
//     }).then((data) => {
//         console.log("Inside Second, Then");
//         console.log(data);
//     })
// };

function getData() {
    console.log("Started getData");
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        console.log("Inside First, Then");
        return response.json();
    }).then((data) => {
        console.log("Inside Second, Then");
        console.log(data);
    })
};

function postData() {
    url = "https://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"Alfaiz223234","salary":"1230000","age":"23"}'
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response => response.json()).then(data => console.log(data))
};

// console.log("Before Running getData");
// getData();
// console.log("After Running getData");

postData();