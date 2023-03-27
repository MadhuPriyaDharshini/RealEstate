const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const db = require('./db');

const app = express();

const loginRoute = require('./Routes/loginRoute');

app.use(express.static(__dirname + '/templates'));

app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

db.on('error',console.error.bind(console,'MongoDB connection error'));

app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/templates/index.html");
});

app.use('/api',loginRoute);

app.listen(4001,()=>{
  console.log("Server Connected to the port 4001");
});