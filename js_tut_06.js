// Strings : Properties, Methods & Template Literals :
console.log("Tut_06 - Strings : Properties, Methods & Template Literals");

const name = "Alfaiz";
const greeting = "Good Morning";
// console.log(name + " " + greeting);


let html;
html = "<h1> This Is Heading </h1>"+
        "<p> This Is Paragraph </p>";
html = html.concat('This', ' Str1');

console.log(html);

console.log("Length : " + html.length);

console.log("LowerCase : " + html.toLowerCase());

console.log("UpperCase : " + html.toUpperCase());

console.log(html);

console.log("html[0] : " + html[0]);

console.log("html[1] : " + html[1]);

console.log("html[2] : " + html[2]);

console.log("html[3] : " + html[3]);

console.log("Index of This : " + html.indexOf('This'));

console.log("Index of h1 : " + html.indexOf('h1'));

console.log("Index of < : " + html.indexOf('<'));

console.log("Last Index of < : " + html.lastIndexOf('<'));

console.log(html.charAt(4));

console.log(html.endsWith('Str1'));     // o/p -> true

console.log(html.includes('is'));       // Includes -> string me hy ya nahi.

console.log(html.substring(0, 4));

console.log(html.slice(-4));

// console.log(html.split(" "));

htmlArr = html.split(" ");

console.log(htmlArr);

console.log(html.replace('This', 'It'));

let fruit1 = "Orange";
let fruit2 = "Apple";
let myHtml = `
Hello ${name},
<h1> This Is Heading </h1>
<p> You Like ${fruit1} & ${fruit2}. </p>
`;

console.log(myHtml);
document.body.innerHTML = myHtml;