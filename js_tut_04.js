// Data Type : Primitive and Reference :
console.log("Tut_04 - Data Type : Primitive and Reference");

/*
Primitive Data Types : 
1. String
2. Number
3. Boolean
4. Null
5. undefined
6. symbol
*/

// string
let name = "Alfaiz";
console.log("My String Is : "+ name);
console.log("Data Type Is : "+ (typeof name));


// number
let num = 34;
console.log(num, typeof num);


// boolean
let isDriver = true;
console.log(isDriver, typeof isDriver);


// null
let nullVar = null;
console.log(nullVar, typeof nullVar);


// undefined
let undef = undefined;
console.log(undef, typeof undef);





/*
Reference Data Types : 
1. Arrays
2. Object Literals
3. Functions
4. Dates
*/

// Arrays
let myArr = [1, 2, 3, 4, 5, false, "string"];
console.log(myArr);
console.log("Data Type : "+typeof myArr);


// Object Literals
let stMarks = {
    harry:89,
    shubham:36,
    rohanDas:34
};
console.log(stMarks);
console.log("Data Type : "+typeof stMarks);


// Functions
function findName() {
    
};
console.log("Data Type : "+typeof findName);


// Dates
let date = new Date();
console.log(date);
console.log("Data Type : "+typeof date);