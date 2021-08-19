console.log("Rest Parameters in JavaScript");


// function sum(...inputs) {
//     console.log("Input Arguments : ", ...inputs);
//     let total = 0;
//     for (let i of inputs) {
//         total += i;
//     }
//     console.log("Total : ", total);
// }

// sum(1,2,3,4,5,6,7,8,9,10);


function fun(a, b, ...c) {
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Edan'));
}

fun('Ronaldo', 'Neymar', 'Pele', 'Messi', 'Edan');