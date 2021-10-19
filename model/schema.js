const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: {type: String},
    company : {type: String},
    gender: {type: String},
    city: {type: String}
},
{collection : "users"})
const model = mongoose.model('userSchema', userSchema)
module.exports = model;

