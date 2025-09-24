// const mongoose = require("mongoose");

// let userSchema = new mongoose.Schema({
//     username:String,
//     password:String,
//     email:String,
//     phone:Number
// })

// const user = mongoose.model("user", userSchema );
// module.exports = user;


import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    _id : {type: String, require: true},
    username : {type: String, require: true},
    email : {type: String, require: true},
    Image : {type: String, require: true},
    role : {type: String, enum: ["user", "hotelOwwner"], default: "user"},
    recentSearchedCities : [{type: String, require: true}]
}, {timestamps : true})

const User = mongoose.model("user", userSchema)
export default User



