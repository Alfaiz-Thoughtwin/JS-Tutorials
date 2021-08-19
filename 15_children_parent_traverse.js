console.log("Children, Parent & Traversing the DOM | JavaScript");

let cont = document.querySelector('.no');
cont = document.querySelector('.childParent');

console.log("childNodes : ", cont.childNodes);    // deals with elements, new line , comments etc
console.log("children", cont.children);     // only deals with elements

/*
Node Types :
1. element
2. attribute
3. text node
4. comment
5. document
6. docType
*/

let nodeName = cont.childNodes[0].nodeName;
console.log("nodeName : ", nodeName);

let nodeType = cont.childNodes[0].nodeType;
console.log("nodeType : ", nodeType);

let container = document.querySelector('.childParent');
console.log(container.children[0].children[0].children);

// let demo_li = container.children[0].children[0].children;

// Array.from(demo_li).forEach(element => {
//     console.log(element);
// });


console.log("firstChild (div.childParent) : ", container.firstChild);
console.log("firstElementChild (div.childParent) : ", container.firstElementChild);

console.log("lastChild (div.childParent) : ", container.lastChild);
console.log("lastElementChild (div.childParent) : ", container.lastElementChild);

console.log("Child Element Count (div.childParent) : ", container.childElementCount);

