const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/templates'));

app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/templates/index.html");
})

app.listen(4001,()=>{
  console.log("Server Connected to the port 4001");
})