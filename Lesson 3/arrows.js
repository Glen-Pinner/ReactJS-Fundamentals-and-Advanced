/**
 * Created by glenp on 09/11/2016.
 */

var numbers = [1, 2, 3, 4];

var numbers2 = numbers.map(function (number) {
    return number * 2;
});

// form 1
var numbers3 = numbers.map((number) => {
    return number * 2;
});

// form 2: only one parameter omitting parentheses
numbers.map(number => {
    return number * 2
});

// var myFunction = number => {
//     console.log(number);
// };
//
// myFunction(4);

// For one line functions omitting parentheses and return
var results = numbers.map(number => number * 2);
console.log(results);