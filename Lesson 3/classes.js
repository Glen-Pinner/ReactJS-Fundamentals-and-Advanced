/**
 * Created by glenp on 10/11/2016.
 */

class Creature {
    constructor(name) {
        this.name = name;
    }

    // methods created on prototype
    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

class Person extends Creature {
    constructor(name, job) {
        super(name);
        this.job = job;
    }
}

class Dog extends Creature {

}

var p1 = new Person('Chuck', 'barber');
console.log(p1.name);
console.log(p1.job);
console.log(p1.sayName === Creature.prototype.sayName);
p1.sayName();

// console.log(p1.__proto__ === Person.prototype);
// console.log(p1.sayName === Person.prototype.sayName);

var sayName = p1.sayName.bind(p1);
sayName();