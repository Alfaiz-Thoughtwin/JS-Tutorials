// Arrays & Objects :
console.log("Tut_07 - Arrays & Objects");

let marks = [34, 23, 24, 93, 73, 25];
const fruits = ['orange', 'apple', 'pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23, 123, 21, 'Orange');

// console.log("marks", marks);
// console.log("fruits", fruits);
// console.log("mixed", mixed);
// console.log("arr", arr);

// console.log(arr);
// arr[0] = "Alfaiz";
// console.log(arr);


// let value = marks.indexOf(73);
// console.log(value);


// Mutating or Modifying arrays :

/*
array.push(value) -> array ke last me add kr deta hy value.
array.unshift(value) -> array ke last me add kr deta hy value.
array.pop() -> array ke end me se ek element ko nikal lo.
array.shift() -> array ke starting me se element ko nikal ta hy.
array.splice(1,2) -> array me se 'index 1' se '2 elements' ko hata dega.
array.reverse() -> array ke elements ko reverse kr dega.
array.concat(array2) -> two arrays ko merge kr dega.
*/

// marks.push(3234);
// marks.unshift(1008);
// marks.pop();
// marks.shift();
// marks.splice(1,2);
// marks.reverse();

marks_2 = [1, 2, 3];
// marks = marks.concat(marks_2);
// console.log(marks);



let myObj = {
    name : "Alfaiz",
    'last name' : "Khan",
    channel : "Code With Harry",
    isActive : true,
    marks : [1, 5, 3, 6]
}

// console.log(myObj);
// console.log(myObj.marks);
// console.log(myObj['last name']);
// console.table(myObj);