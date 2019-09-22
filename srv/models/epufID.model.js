//jshint esversion: 6
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const epufIDSchema = new Schema ({
    epufID: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 1,
    },
}, {
    timestamps: true,
});
const  epufID = mongoose.model('epufID', epufIDSchema);

module.exports = epufID;