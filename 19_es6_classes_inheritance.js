console.log("Title : ES6 Classes and Inheritance");

/*
1. Class -> class ek blueprint hota hy, ek template hota hy.

class Employee {
    this.name = 
    this.experience = 
    this.division = 
}

2. Constructor -> constructor woh function hota hy, jo ki tab run hota hy jb class ka object bn rha hy. 

3. static method -> bina class ka object banaye use kr sktey hy

4. super() -> pichli class ka constructor
*/

class Employee {
    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan() {
        return `I Am ${this.name} and this company is the best.`;
    }

    joiningYear() {
        return 2020-this.experience;
    }

    static add(a, b) {
        return a+b;
    }
};

// let emp_obj = new Employee("Alfaiz", 8, "Coding");
// console.log(emp_obj);


// class inheritance :
class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, givenLanguage, givenGithub) {
        super(givenName, givenExperience, givenDivision);
        this.language = givenLanguage;
        this.github = givenGithub;
    }

    favoriteLanguages() {
        if (this.language === "Python" || this.language === "python") {
            return `${this.name}'s favorite language is 'Python'`;
        }
        else {
            return `${this.name}'s favorite language is 'JavaScript'`;
        }
    }

    static multiply(a,b) {
        return a*b;
    }
};

// let pro_obj = new Programmer("Alfaiz Khan", 8, "Developer", "React.js & Python (Django)", "alfaiz898");
// console.log(pro_obj);
// console.log(Programmer.multiply(2,3));