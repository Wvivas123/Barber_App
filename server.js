const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const bodyparser = require('body-parser');
const path = require('path');
const db = require('./config/keys.js').mongoURI;

mongoose.connect(db, { 
    useNewUrlParser: true
    
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});