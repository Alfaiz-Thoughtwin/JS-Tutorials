console.log("Object Literals, Constructors and Object Oriented JavaScript");

/*
1. Object (object ek unique entity hoti hy, jisme properties or methods hotey)
2. Constructors (new keyword constructor ki madat se object create krta hy;constructor ek template hoti hy, jiski madat se aap objects create kr sktey ho)
3. Encapsulation
4. Inheritance
*/

// Object Literal For Creating Objecs :
let car = {
    name : 'Maruti 800',
    topSpeed : 89,
    run : function () {
        console.log("car is running");
    }
};

console.log("Object Literal : ", car);


/*
we have already seen constructors like this :
new Date();
*/


// Creating A Constructor For Cars :
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} Is Running`);
    }
    this.analyze = function () {
        console.log(`${this.name} is slower by ${200 - this.topSpeed} Km/H than Mercedes`);
    }
};

car1 = new GeneralCar('Nissan', 180);
car2 = new GeneralCar('Maruti Alto', 80);
console.log(car1);
console.log(car2);