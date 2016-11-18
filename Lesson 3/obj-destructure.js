/**
 * Created by glenp on 09/11/2016.
 */

var dog = {
    name: 'shorty',
    age: 4
};

var { name: dogName, age: dogAge } = dog;
console.log(dogName);
console.log(dogAge);

// Use same variable names as object properties is allowed
var { name, age } = dog;
console.log(name);
console.log(age);