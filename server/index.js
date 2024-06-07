const express = require('express');
const bodyParser = require('body-parser')  // using body parser to convert data into Json format
const mongo = require("./DB/Db");
const cors = require('cors');
const userContainer = require('./Controller/user');


const Port = 5000;
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended : false})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
mongo();

app.get('/',(req,res) =>{
    res.send('Hello World');
})

app.post('/signup',userContainer.signup)
app.post('/signin',userContainer.signin)
app.post('/forget-pass',userContainer.sendotp)
app.post('/otp',userContainer.submitotp)

app.listen(Port,() => {
    console.log(`Example app listening on Port ${Port}`)
})