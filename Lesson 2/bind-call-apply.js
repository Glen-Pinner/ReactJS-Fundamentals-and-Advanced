/**
 * Created by glenp on 09/11/2016.
 */

'use strict';

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function (x) {
    console.log('My name is ' + this.name);
    console.log(x);
};

var p1 = new Person('Joe', 18);
var p2 = new Person('Sam', 25);
p1.sayName();

var sayName = p1.sayName;

// Invoke sayName directly
// sayName();  // Doesn't work, no this

// Using call()
sayName.call(p1, 'hello');
// sayName.call(p2);
// sayName.call({ name: 'Janet '});

// Using apply()
sayName.apply(p1, ['hello']);

// call() and apply() must supply the object on each call, bind() ties an object to the function
var boundSayName = sayName.bind(p1, 'hello');   // this always set to p1
boundSayName();