const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');


const app = express();

//code for ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//code for bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

//Connecting to MongoDB database
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/myDB", { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log("could not connect to MongoDB..", err));


//Requeat session..
app.get('/', (req, res) => {
    // Add your get request here
});

app.post('/', (req, res) => {
    //Add your post request here

});

app.delete('/', (req, res) => {
    //Add your delete request here

});


app.listen(3000, function () {
    console.log("Server started on port 3000");
});