const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    phonenumber:{type:String , required:false}
})

module.exports = mongoose.model('User', userSchema)