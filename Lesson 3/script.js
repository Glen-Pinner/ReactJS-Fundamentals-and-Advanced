/**
 * Created by glenp on 10/11/2016.
 */

var fs = require('fs');

// var file = fs.readFileSync('./script.js');
// console.log(file.toString());

// Inserted FIRST into event queue
fs.readFile('./script.js', function (err, data) {
    console.log(3);

    if (err) {
        console.err(err);
        return;
    }

    console.log(data.toString());
});

function helper() {
    console.log(2);

    // Inserted SECOND into event queue
    fs.readFile('./script.js', function (err, data) {
        console.log(4);

        if (err) {
            console.err(err);
            return;
        }

        console.log(data.toString());
    });

}

function main() {
    console.log(1);
    helper();
}

main();