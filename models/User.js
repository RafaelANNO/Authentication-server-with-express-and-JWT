const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date_creation: {
        type: Date,
        default: Date.now,
        required: true,
        unique: true
    }
});

module.exports = User = mongoose.model("users", UserSchema);