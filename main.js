// const port = 3000,
//     http = require("http"),
//     app = http.createServer((request, response) => {
//         console.log("Received an incoming request!");
//         response.writeHead(httpStatus.OK, {
//             "Content - Type": "text/html"
//         });

//         let responseMessage = "<h1>Hello, Universe!</h1>";
//         response.write(responseMessage);
//         response.end();
//         console.log(`Sent a response : ${responseMessage}`);
//     });

// app.listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function(req, res) {
    // res.send("Hello world!");
    res.sendFile(__dirname + '/bmi.html');
});

app.post('/', (req, res) => {
    // const age = req.body.age;
    const weight = req.body.weight;
    const height = req.body.height / 100;
    // weight (kg) / [height (m)]2
    const result = "Your BMI: " + (weight / (height * height)).toString();
    res.send(result);
})

app.listen(3000, function() {
    console.log("Server is reunning on port 3000.");
});