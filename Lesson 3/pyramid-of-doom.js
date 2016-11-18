/**
 * Created by glenp on 10/11/2016.
 */

var fs = require('fs');

fs.readFile('./script.js', function (err, data) {
    console.log('script.js contents');

    fs.readFile('./pyramid-of-doom.js', function (err, data) {
        console.log('pyramid-of-doom.js contents');
    });
})