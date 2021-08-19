console.log("Local & Session Storage in JavaScript");

let impArray = ['adrak', 'pyaz', 'bhindi'];

localStorage.setItem('firstName', 'Alfaiz');
localStorage.setItem('lastName', 'Khan');
localStorage.setItem('Sabzi', JSON.stringify(impArray));

let local_fname = localStorage.getItem('firstName');
let local_lname = localStorage.getItem('lastName');
let local_impArray = localStorage.getItem('Sabzi');
console.log("Local Storage getitem('firstName') : ", local_fname);
console.log("Local Storage getitem('lastName') : ", local_lname);
console.log("Local Storage getitem('Sabzi') : ", JSON.parse(local_impArray));

// clear a particular key-value pair :
// localStorage.removeItem('lastName');









// localStorage.clear();    // clears the entire localStorage