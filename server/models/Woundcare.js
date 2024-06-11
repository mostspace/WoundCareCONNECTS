const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const WoundcareSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});



const WoundcareModel = mongoose.model("User", WoundcareSchema);
module.exports = WoundcareModel;
