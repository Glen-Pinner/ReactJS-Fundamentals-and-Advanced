/**
 * Created by glenp on 23/11/2016.
 */

function add(x, y) {
    return x + y;
}

console.log(add(2, 4)); // 6
console.log(add(2, 4)); // 6

let timesCalled = 0;
function addImpure(x, y) {
    return `Times called: ${++timesCalled} Result: ${x + y}`;
}

console.log(addImpure(2, 4));   // Times called: 1 Result: 6
console.log(addImpure(2, 4));   // Times called: 2 Result: 6

function addToArrayImpure(array, element) {
    array.push(element);
    return array;   // enable chaining
}

function addToArrayPure(array, element) {
    // es5 version
    // let newArray = array.concat(element);
    // return newArray;

    // es6
    return [...array, element];
}

let names = ['tim', 'charlie', 'sue'];
let result = addToArrayPure(names, 'bob');
console.log(result);
console.log(names);

function addToObjectImpure(obj, prop, value) {
    obj[prop] = value;
    return obj; // enable chaining
}

function addToObjectPure(obj, prop, value) {
    return Object.assign({}, obj, {
        [prop]: value   // N.B. square brackets
    });
}

let person = {
    name: 'tim'
};

let result2 = addToObjectPure(person, 'age', 20);
console.log(result2);
console.log(person);
