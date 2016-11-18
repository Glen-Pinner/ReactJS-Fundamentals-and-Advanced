/**
 * Created by glenp on 09/11/2016.
 */

var numbers = [5, 10];

// N.B. The following lvalue is NOT an array
var [number1, number2] = numbers;
console.log(number1);
console.log(number2);

// To perform a simple swap
[number2, number1] = [number1, number2];
console.log(number1);
console.log(number2);
