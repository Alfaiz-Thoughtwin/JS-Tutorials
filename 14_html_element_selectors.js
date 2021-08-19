console.log("HTML Element Selectors In JavaScript");
/*
1. Single Element Selector
2. Multi Element Selector
*/

// 1. Single Element Selector :
// let element = document.getElementById('myFirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element = element.style.color = "red";
// element = element.innerText = "Football is Awesome";
// element = element.innerHTML = "<b>Football is Awesome</b>";
// console.log(element);


// let sel = document.querySelector('#myFirst');
// sel = document.querySelector('.child');
// sel = document.querySelector('div');
// sel.style.color = "green";
// console.log(sel);


// 2. Multi Element Selectors :
let elems = document.getElementsByClassName('child');
// elems = document.getElementsByClassName('childParent');
// console.log(elems[0].getElementsByClassName('child'));

elems = document.getElementsByTagName('div');

// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color = "blue";
// });

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//     element.style.color = "blue";    
// }

console.log(elems);