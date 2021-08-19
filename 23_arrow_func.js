console.log("Arrow Functions in JavaScript");

// const alfaiz = function (){
//     console.log("I am a Footballer");
// };
// alfaiz();


// const alfaiz = () => {
//     console.log("I am a Footballer (via Arrow Function)");
// };
// alfaiz();


// one liners do not require braces/retuen
// const greet = () => "Good Morning";
// console.log(greet());


// const greet = () => ({fName:"Alfaiz", lName:"Khan"});
// console.log(greet());


// single parentheses do not need parentheses
// but you will have to put parentheses if there are multiple parameters
const greet = name => "Good Morning " + name;
console.log(greet("Alfaiz"));