console.log("Async/Await in JavaScript");

/*
async -> ek promise return krta hy.
*/

// async function alfaiz(){
//     console.log("Inside Function alfaiz()");
//     const response = await fetch("https://api.github.com/users");
//     console.log("Before Response");
//     const users = await response.json();
//     console.log("Users Resolved");
//     return users;
// };

// console.log("Before Calling alfaiz()");
// let a = alfaiz();
// console.log("After Calling alfaiz()");
// console.log(a);
// a.then(data => console.log(data))
// console.log("Last Line of This JS File");



async function demo() {
    console.log("Inside Function demo()");

    const response = await fetch("https://api.github.com/users");
    console.log("Before Response");
    const resData = await response.json();
    console.log("Response Data Resolved");
    return resData;
};

console.log("Before Calling demo()");
let b = demo();
console.log("After Calling demo()");
console.log(b);
b.then(data => console.log(data))
console.log("Last Line of The JS File");