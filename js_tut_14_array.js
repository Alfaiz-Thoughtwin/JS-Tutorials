// toString() : function()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById('to_String_array').innerHTML = fruits.toString();

// join() :
document.getElementById('join_array').innerHTML = fruits.join("*");

// pop() :
document.getElementById('pop_array').innerHTML = fruits.pop();
document.getElementById('pop_array').innerHTML = fruits;

// shift() :
document.getElementById('shift_array').innerHTML = fruits.shift();
document.getElementById('shift_array').innerHTML = fruits;


// push() :
function pushFunc(){
    document.getElementById('push_array').innerHTML = fruits.push("Kiwi");
    document.getElementById('push_array2').innerHTML = fruits;
}