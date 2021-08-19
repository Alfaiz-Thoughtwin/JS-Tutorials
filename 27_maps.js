console.log("Maps in JavaScript")

const myMap = new Map();

const key1 = 'myStr';
const key2 = {name:'Alfaiz'};
const key3 = function(){};

// Setting map values
myMap.set(key1, "This is a String")
myMap.set(key2, "This is a Blank Object")
myMap.set(key3, "This is am Empty Function")

console.log(myMap);

// Getting the values from a Maps
let value1 = myMap.get(key1);
console.log("Key1 : ",value1)

// Get the size of the Maps
console.log("Size of myMap : ", myMap.size)

// You can loop using for..of to get keys and values
for (let [key, value] of myMap){
    console.log(`key : ${key} | value : ${value}`);
};

// Get only keys
for (let key of myMap.keys()) {
    console.log("Key : ", key)
}

// Get only values
for (let value of myMap.values()) {
    console.log("value : ", value)
}

// You can loop through a map using for each loop
myMap.forEach((value, key)=>{
    console.log("Key is : ", key)
    console.log("Value is : ", value)
});

// Converting Map to Array:
let myArray = Array.from(myMap);
console.log("Map to array is : ", myArray);

// Converting Map.keys() to Array:
let myKeysArray = Array.from(myMap.keys());
console.log("Map.keys() to array is : ", myKeysArray);

// Converting Map.values() to Array:
let myValuesArray = Array.from(myMap.values());
console.log("Map.values() to array is : ", myValuesArray);