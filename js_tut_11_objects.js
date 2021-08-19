// Objects in JavaScript :
console.log("Objects in JavaScript");

{
    const car = {
        model : "Indica Vista",
        brand : "Tata Motors",
        color : "indigo",
        price : 461000
    };

    let myArr = [
        {name: "xyz", salary: 12345},
        {name: "abc", salary: 3422},
        {name: "bca", salary: 434},
        {name: "xyz", salary: 5433},
        {name: "abc", salary: 3422}
    ];

    // let myArr_02 = myArr.map(function_01);

    // function function_01(value, index, array) {
    //     return value;
    // }


    for (var i of myArr) {
        for (var key in i) {
            console.log(`${key} : ${i[key]}`);
        }
    }


    let sorted_myArr = myArr.filter(function (value, index, array) {
        return array.indexOf(value)===index;
    });

    console.log("Sorted/Unique : ",sorted_myArr);



    myArr.forEach((element, index, array) => {
        console.log(element.name);
    });
}