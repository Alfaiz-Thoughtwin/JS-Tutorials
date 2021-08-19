const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
const numbers = [45, 4, 9, 16, 25];
const myObj = {
    name : "Alfaiz",
    age : 23,
    role : "React.JS Developer",
    company : "Thoughtwin IT Solutions Pvt Ltd INDORE (MP)",
    homeTown : "Ujjain"
};


// let temp = "";


// for (let i = 0; i < cars.length; i++) {
//     temp += cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = temp;


// for (iterator of cars) {
//     console.log(iterator);
//     // document.getElementById("demo").innerHTML = iterator;
// }


// for (key in myObj) {
//     // console.log(key, myObj[key]);
//     console.log(`${key} : ${myObj[key]}`);
// }


// var dt = "";
// cars.forEach(function (element, index, array) {
//         console.log(`[${index}] : ${element} : fullArray : ${array}`);
//         dt += `[${index}] : ${element} : fullArray : ${array}<br>`;
// });
// document.getElementById('demo').innerHTML = dt;


// for (let x in numbers) {
//     console.log(`[${x}] : ${numbers[x]}`);
// }


function displayTime(){
    document.getElementById('date_time').innerHTML = Date();
}



// Factorial Program :
// {
//     let num = parseInt(prompt("Enter Number for Factorial : "));
//     let fac = 1;
//     for (let i=1; i<=num; i++) {
//         fac = fac * i;
//     }
//     console.log(`Factorial is : ${fac}`);
// }


// Natural Number Series :
// {
//     let start_num = parseInt(prompt("Enter Number for Start Series : "));
//     let end_num = parseInt(prompt("Enter Number for End Series : "));
//     for (let i=start_num; i<=end_num; i++){
//         console.log(i);
//     }
// }


// Number Series For Even & Odd :
// {
// let start_num = parseInt(prompt("Enter Number for Start Series (Even/Odd) : "));
// let end_num = parseInt(prompt("Enter Number for End Series (Even/Odd) : "));
// let even_arr = [];
// let odd_arr = [];
// for (let i=start_num; i<=end_num; i++){
//     if(i%2==0){
//         // console.log(`Even : ${i}`);
//         even_arr.push(i);
//     }else{
//         // console.log(`Odd : ${i}`);
//         odd_arr.push(i);
//     }
// }
// console.log(`Even Numbers : ${even_arr}`);
// console.log(`Odd Numbers : ${odd_arr}`);
// }


// Prime Number : 
// {
//     let num = parseInt(prompt("Enter Number For Check Prime Number : "));
//     let check = 0;

//     if (num == 0 || num == 1) {
//         console.log(`${num} isn't prime number`);
//     }

//     for (let i=2; i<num; i++){
//         if (num%i==0){
//             check++;
//             break;
//         }
//     }

//     if (check==0){
//         console.log(`${num} is a prime number`);
//     }else{
//         console.log(`${num} isn't prime number`);
//     }
// }
