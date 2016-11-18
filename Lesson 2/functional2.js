/**
 * Created by glenp on 09/11/2016.
 */

var numbers = [5, 10, 4, 3];

var evens = numbers.filter(function (number) {
    return number % 2 === 0;
});

var results = evens.map(function (number) {
    return number + 100;
});

console.log(results);

// Chaining methods
var results2 = numbers
    .filter(function (number) {
        return number % 2 === 0;
    })
    .map(function (number) {
        return number + 100;
    });

console.log(results2);
