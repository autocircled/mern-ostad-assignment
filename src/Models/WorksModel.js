const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    title: {type: String, required: true},
    // classNote: {type: String, required: true},
    description: {type: String},
    status: {type: String, required: true},
    email: {type: String, required: true},
},
{
    timestamps: true,
    versionKey: false
});

const WorksModel = mongoose.model('works', Schema);
module.exports = WorksModel;