console.log("JavaScript | Numbers & Number Methods :");


let x = 123;
x = x.toString()
console.log(x);


let y = 9.656;
y = y.toFixed();
console.log(y);


console.log(Number(true));          // returns 1);
console.log(Number(false));         // returns 0);
console.log(Number("10"));          // returns 10);
console.log(Number("  10"));        // returns 10);
console.log(Number("10  "));        // returns 10);
console.log(Number(" 10  "));       // returns 10);
console.log(Number("10.33"));       // returns 10.33);
console.log(Number("10,33"));       // returns NaN);
console.log(Number("10 33"));       // returns NaN);
console.log(Number("John"));        // returns NaN);


let cars = ['BMW', 'Audi', 'Mercedes', 'Lamborghini', 'Ferrari'];
console.log(cars);
// cars[1] = "AUDI_01";
// console.log(cars);

let z = cars[0];
console.log(z);
console.log(`Array Length : ${cars.length}`);
console.log(`Array Sort : ${cars.sort()}`);
console.log(`Array Sort (Reverse) : ${cars.sort().reverse()}`);

let uL = "<ul>";
for (let i = 0; i < cars.length; i++) {
    uL += "<li>" + cars[i] + "</li>";
}
uL += "</ul>";
document.getElementById('p_array').innerHTML = uL;

// Adding array element :
cars.push("Jaguar");
console.log(cars);

// How To check Array Type :
console.log(`Type Check of Array : ${Array.isArray(cars)}`);


let person = {
    firstName : "Alfaiz",
    lastName : "Khan",
    age : 23
};

console.log(person);
console.log(person.firstName);

for (key in person){
    console.log(`${key} : ${person[key]}`);
}
