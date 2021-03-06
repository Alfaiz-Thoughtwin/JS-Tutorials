// Type Conversion & Coercion :
console.log("Tut_05 - Type Conversion & Coercion");

let myVar = String(34);
console.log(myVar, (typeof myVar));

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr = String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));

let i = 75;
console.log(i.toString(), (typeof i));

let stri = Number("3434");
stri = Number("34d34")
stri = Number(false)
stri = Number([1,2,3,4,5,6,7,8,9])
console.log(stri, (typeof stri));

let number = parseFloat('34.098')
console.log(number.toFixed(5), (typeof number));