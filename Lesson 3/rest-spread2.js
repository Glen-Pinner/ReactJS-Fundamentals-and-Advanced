/**
 * Created by glenp on 09/11/2016.
 */

// ES5
// function talk(greeting, farewell, names) {
//     names.forEach(function(name) {
//         console.log(`${greeting} ${name}!`);
//         console.log(`${farewell} ${name}!`);
//     });
// }
//
// talk('hello', 'goodbye', ['bill', 'joe', 'morty']);

// function talk2(greeting, farewell) {
//     console.log(arguments);
// }
//
// talk2('hello', 'goodbye', 'bill', 'joe', 'morty');

// The rest operator
function talk3(greeting, farewell, ...names) {
    names.forEach(function(name) {
        console.log(`${greeting} ${name}!`);
        console.log(`${farewell} ${name}!`);
    });
}

// Using the rest operator
talk3('hello', 'goodbye', 'bill', 'joe', 'morty');

// Using the spread operator
var arr = ['hello', 'goodbye'];
talk3(...arr, 'bill', 'joe', 'morty');