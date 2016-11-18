/**
 * Created by glenp on 09/11/2016.
 */

function Person(name) {
    this.name = name;
}

// ES5 workarounds to preserve this
// Person.prototype.sayNameTimed = function () {
//     var self = this;    // simulates lexical scoping via closure
//
//     setTimeout(function () {
//         console.log(`My name is ${self.name}`);
//     }, 1000);
// };

// Person.prototype.sayNameTimed = function () {
//     setTimeout(function () {
//         console.log(`My name is ${this.name}`);
//     }.bind(this), 1000);
// };

// ES6 arrow function
Person.prototype.sayNameTimed = function () {
    // binds lexically
    setTimeout(() => {
        console.log(`My name is ${this.name}`);
    }, 1000);
};

var p1 = new Person('Sean');
p1.sayNameTimed();