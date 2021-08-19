console.log("Assignment 10-08-2021 (String Assignment)");

{
    let str1 = "football is awesome again football is awesome so seriously football is really awesome sorry football is love";
    let str2 = "ball";

    function str_length_checker(str1, str2) {
        if (str1.length > str2.length) {
            return 1 + " String 1 is longer than String 2.";
        } else {
            return -1 + " String 1 is smaller than String 2.";
        }
    }

    function str_checker(str1, str2) {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        
        let present = str1.split(str2).length-1;
        return `${present} times ${str2} in string 1`


    }

    console.log("String 1 : " + str1);
    console.log("String 2 : " + str2);

    let temp_01 = str_length_checker(str1, str2);
    console.log(temp_01);

    let temp_02 = str_checker(str1, str2);
    console.log(temp_02);
};



{
    let myArr = ["hello", "Hello", "hello", "world", "World", "world", "bmw", "Bmw", "mercedes", "Mercedes"];
    let myArr_res = []
    
    let sortedMyArr = myArr.filter(function (x, i, a) {
        return a.indexOf(x) === i;
    });

    sortedMyArr.forEach(function(i){
        if (!(myArr_res.includes(i.toLowerCase()))){
            myArr_res.push(i);
        }
    })
    console.log(myArr_res.sort().reverse());
};


// {
//     let myArr_01 = [
//         { name: "xyz", salary: 12345 },
//         { name: "abc", salary: 3422 },
//         { name: "bca", salary: 434 },
//         { name: "xyz", salary: 5433 },
//         { name: "abc", salary: 3422 }
//     ];

//     // for ( let i in myArr_01) {
//     //     for (let j in myArr_01[i]) {
//     //         console.log(`${j} : ${myArr_01[i][j]}`);
//     //     }
//     // }

//     // let sortedMyArr_01 = myArr_01.filter(function(x,i,a){
//     //     return a.indexOf(x) === i;
//     // })
//     // for (let i in sortedMyArr_01) {
//     //     console.log(`${i} : ${sortedMyArr_01[i]}`)
//     // }

//     let newArr = [];

//     for (let i=0; i<myArr_01.length; i++) {
//         if (myArr_01[i] === newArr[i]) {
//             newArr.push(myArr_01[i])
//         }
//     }
//     console.log(newArr);
// };