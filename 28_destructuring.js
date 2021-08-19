console.log("JavaScript Destructuring");
/*
Destructuring -> ...

Example :-
[a, b, c, ...d,] = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(a) -->  1
console.log(b) -->  2
console.log(c) -->  3
console.log(d) -->  [4,5,6,7,8,9,10,11,12,13]
*/


let a,b,c,d;
// [a,b] = [34,564];
// console.log(a, b)


// [a, b, c, ...d] = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// ({a, b, c, ...d} = {a:34, b:345, c:67, d:45, e:34})
// console.log(a, b, c, d)


// Array Destructuring :
const fruits = ["Mangoes", "Grapes", "Kiwi"];
[a, b, c] = fruits;
console.log(a, b, c)


// Object Destructuring:
const laptop = {
    model : "HP Pavilion",
    age : "23 Days",
    gender : "Male",
    net : 1233,
    start : function(){console.log("start() is Started")}
};

const {model, age, gender, net, start} = laptop;
console.log(model, age, gender, net, start);