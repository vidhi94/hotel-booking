import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/hotel-booking")

const db = mongoose.connection

db.on('connected', (err)=>{
    if (err) {
        console.log("Database is not connected.")
        return false
    }
    console.log("Database is connected.")
})

export default db

// const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/mvc");

// const db = mongoose.connection;

// db.on('connected', (err)=>{
//     if(err)
//     {
//         console.log("Database is not connected.")
//         return false;
//     }
//     console.log("Database is connected.")
// })

// module.exports = db;