const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const config = require('config');
const bodyparser = require('body-parser');
const path = require('path');

const db = config.get('mongoURI');

app.use(express.json());


// Connect to Mongo
mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Listening on port ${port}`));

//routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});