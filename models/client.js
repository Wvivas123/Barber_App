const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ClientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    }
});

let Client = mongoose.model("Client", ClientSchema);

module.exports = Client;