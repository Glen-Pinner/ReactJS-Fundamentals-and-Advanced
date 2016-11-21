var express = require('express');
var app = express();

// Enable CORS for this server
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var profiles = [
    {
        name: "Sue",
        age: 30,
        bio: "enjoys swimming and biking",
        hobbies: ["swimming", "biking"]
    },
    {
       name: "Bill",
        age: 40,
        bio: "enjoys long walks on the beack",
        hobbies: ["gardening", "games"]        
    }
];

app.get('/profiles', (req, res) => {
//    res.end("Hello, world from Express!");
    res.json(profiles);
});

app.listen(3000, () => {
    console.log(`Server is listening on localhost:3000`);
});