// Variables : let, const and var :
console.log("Tut_03 - Variables : let, const and var");

var name = "Alfaiz";
var channel;
var marks = 3454;
// channel = "Code With Harry";
console.log(name, channel, marks)


/*
Rules for creating JavaScript Variables :
1. cannot start with numbers
2. can start with letter, numbers, _ or $
3. are case-sensitive
*/


var city = "London";
console.log(city);


const ownersName = "ownersName Is Not Changeble";
// ownersName = "Alfaiz";       // cannot do this (error)
console.log(ownersName);


{
    let city = "New York";      // agr let variable nhi hua toh majburan global var hi lena padhega block-scope me bhi.
    city = "Cape Town"
    console.log(city);
}

console.log(city)       // London


