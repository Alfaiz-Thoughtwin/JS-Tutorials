console.log("Error Handling & Try Catch in JavaScript");

// Pretend this is comming from a server as response from
let a = "Alfaiz Khan";
a = undefined;

if (a != undefined) {
    throw new Error("This Is Not undefined");
}
else{
    console.log("This Is undefined");
}

try {
    console.log("We Are Inside Try Block");
    function_01();
} catch (error) {
    console.log("Error : ",error);
} finally {
    console.log("Finally Will Always Execute");
}