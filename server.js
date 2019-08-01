const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

// connecting to MongoDB
// mongoose.connect("mongodb://localhost/scraped_news");
const MONGODB_URI =
process.env.MONGODB_URI || "mongodb://localhost/scraped_news";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});