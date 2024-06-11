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

// Pre-save hook to hash passwords
WoundcareSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

// Method to compare password
WoundcareSchema.methods.isValidPassword = async function(password) {
    const user = this;
    return bcrypt.compare(password, user.password);
};

const WoundcareModel = mongoose.model("User", WoundcareSchema);
module.exports = WoundcareModel;
