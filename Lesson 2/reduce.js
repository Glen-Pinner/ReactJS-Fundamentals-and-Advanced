/**
 * Created by glenp on 09/11/2016.
 */

var numbers = [1, 2, 10, 15, 100];

// 0 = initial memo value, value relates to each element in array
var sum = numbers.reduce(function (memo, value) {
    return memo + value;
}, 0);

console.log(sum);