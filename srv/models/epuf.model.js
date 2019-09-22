//jshint esversion: 6
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const epufSchema = new Schema ({
    epufID: {type: String, required: true, unique: true},
    startDate: {type: Date},
    endDate: {type: Date},
    update: {type: Number},
    add: {type: Number},
    comments: {type: String},
    audit: {type: Boolean}
}, {
    timestamps: true,
});
const  epuf = mongoose.model('epuf', epufSchema);

module.exports = epuf;