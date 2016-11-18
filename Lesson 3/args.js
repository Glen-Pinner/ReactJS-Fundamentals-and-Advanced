/**
 * Created by glenp on 09/11/2016.
 */

// ES5
// function add(x, y) {
//     y = y || 5; // won't work if y = 0
//
//     return x + y;
// }

function add(x, y = 5) {
    return x + y;
}

console.log(add(4, 0));
console.log(add(4, 4));