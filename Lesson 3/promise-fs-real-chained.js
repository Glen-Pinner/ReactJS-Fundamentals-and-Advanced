/**
 * Created by glenp on 10/11/2016.
 */

var fs = require('fs');

function promiseFs(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// promiseFs('pyramid-of-doom.js')
//     .then(data => {
//         console.log('file 1 read');
//         return promiseFs('./script.js');
//     })
//     .then(data => {
//         console.log('file 2 read');
//     })
//     .catch(err => {
//         console.log(err);
//     });

promiseFs('pyramid-of-doom.js')
    .then(data => promiseFs('./script.js'))
    .then(data => console.log(data.toString()))
    .catch(err => console.log(err));
