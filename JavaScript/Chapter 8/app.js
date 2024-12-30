//Prototypes in JS
const student = {
    fullName: "Manish",
    marks: 91.2,
    printMarks: function() {
        console.log("marks =", this.marks)
    },
};


const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};

karanArjun.__proto__ = employee;

//Classes in JS

class TATACar {
    constructor(brand) {
        this.brand = brand;
        this.milage = 10;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    // setBrand(brand) {
    //     this.brand = brand;
    // }
};

let curvv = new TATACar("curvv", 10);
// curvv.setBrand("curvv");

let nexon = new TATACar("nexon", 12);
// nexon.setBrand("nexon");

//Inheritance in JS

// class Parent {
//     hello() {
//         console.log("hello");
//     }
// };
 
// class Child extends Parent  {}

// let obj = new Child();

class Person {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }

    // sleep() {
    //     console.log("sleep");
    // }

    // work() {
    //     console.log("do nothing");
    // }
}

class Engineer extends Person {
    constructor(name) {
        super(name);
        // this.branch = branch
    }
    work() {
        super.eat();
        console.log("solve problems, build something");
    }
}

class Doctor extends Person {
    work() {
        console.log("treat patients");  
    }
}

let engObj = new Engineer ("manish");

//Ler's Practice

let DATA = "secret information";

class User {
    constructor (name, email) {
        this.name = name;
        this.email= email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

class Admin extends User {
    constructor (name, email) {
        super(name, email);
    }
    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("manish", "manish@email.com");
let student2 = new User("prince", "prince@email.com");

let admin1 = new Admin("admin1", "admin1@college.com");

//Error Handling;

let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
try {
    console.log("a + b = ", a + c);
} catch (err) {
    console.log(err);
}
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);


