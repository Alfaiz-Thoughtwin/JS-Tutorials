// const hour = new Date().getHours();
// let greeting;
// if (hour < 18) {
//     greeting = "Good Day";
// }else {
//     greeting = "Good Evening";
// }
// document.getElementById('demo').innerHTML = greeting;



// let a = parseInt(prompt("Enter First Number : "));
// let b = parseInt(prompt("Enter Second Number : "));
// let choice = prompt("Enter Choice (+, -, *, /) : ");

// Switch Case :
// switch (choice) {
//     case "+":
//         document.getElementById('demo').innerHTML = `Addition Is : ${a+b}`;
//         break;
    
//     case "-":
//         document.getElementById('demo').innerHTML = `Substraction Is : ${a-b}`;
//         break;

//     case "*":
//         document.getElementById('demo').innerHTML = `Multiplication Is : ${a*b}`;
//         break;
    
//     case "/":
//         document.getElementById('demo').innerHTML = `Division Is : ${a/b}`;
//         break;
    
//     default:
//         document.getElementById('demo').innerHTML = `Invalid Choice !!!`;
//         break;
// }



// LOOPS :
// for (let index = 1; index <= 10; index++) {
//     console.log(index);
// }


// {
//     let i = 1;
//     for (i; i<=10; i++){
//         console.log(i)
//     };
// };


// {
//     let i = 10;
//     for (let j=1; j<=i; j++){
//         if (j==5){
//             console.log(j)
//             break;
//         };
//     };
// };


// Factorial :
// {
//     let n = parseInt(prompt("Enter Number For Factorial : "));
//     let s = 1;
//     for (let i=1; i<=n; i++) {
//         s = s*i;
//     };
//     console.log(`Factorial of ${n} is : ${s}`);
// };


// Number Series Print :
// {
//     let startVar = parseInt(prompt("Enter Number For Start of Series : "))
//     let endVar = parseInt(prompt("Enter Number For End of Series : "))
//     for (let i=startVar; i<=endVar; i++) {
//         console.log(i);
//     };
// };


// Even & Odd :
// {
//     let num = parseInt(prompt("Enter Number To Check Even/Odd : "));

//     if(num%2==0) {
//         document.getElementById('demo').innerHTML = `${num} is even`;
//     }else{
//         document.getElementById('demo').innerHTML = `${num} is odd`;
//     }
// };


// Number Series (Even/Odd) :
// {
//     let startVar = parseInt(prompt("Enter Number For Start of Series : "))
//     let endVar = parseInt(prompt("Enter Number For End of Series : "))
//     for (let i=startVar; i<=endVar; i++) {
//         if (i%2==0) {
//             console.log(`${i} Even`);
//         }else{
//             console.log(`${i} Odd`);
//         }
//     }
// };


// Sum of Even/Odd in Given Series :
// {
//     let startVar = parseInt(prompt("Enter Number For Start of Series : "));
//     let endVar = parseInt(prompt("Enter Number For End of Series : "));
//     let sumOfEven = 0;
//     let sumOfOdd = 0;
//     for (let i=startVar; i<=endVar; i++) {
//         if (i%2==0) {
//             sumOfEven += i;
//         }else{
//             sumOfOdd += i;
//         }
//     }
//     console.log(`Sum Of Even Numbers (Given Series) : ${sumOfEven}`);
//     console.log(`Sum Of Odd Numbers (Given Series) : ${sumOfOdd}`);
// };