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
    _id : {type: String, required: true},
    username : {type: String, required: true},
    email : {type: String, required: true},
    Image : {type: String, required: true},
    role : {type: String, enum: ["user", "hotelOwwner"], default: "user"},
    recentSearchedCities : [{type: String, required: true}]
}, {timestamps : true})

const User = mongoose.model("user", userSchema)
export default User



