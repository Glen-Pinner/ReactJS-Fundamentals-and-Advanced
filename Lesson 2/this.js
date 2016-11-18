/**
 * Created by glenp on 09/11/2016.
 */

'use strict';

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Prototype initially empty
// console.log(Person.prototype);

Person.prototype.sayName = function () {
    console.log('Hello, my name is ' + this.name);
};

var p1 = new Person('Adrienne', 24);
var p2 = new Person('Tim', 14);

// p1.sayName();
// p2.sayName();

var name = p1.name;
var sayName = p1.sayName;

// console.log(sayName);

sayName();