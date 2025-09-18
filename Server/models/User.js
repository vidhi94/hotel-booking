import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    _id : {typr: String, require: true},
    username : {typr: String, require: true},
    email : {typr: String, require: true},
    image : {typr: String, require: true},
    role : {typr: String, enum: ["user", "hotelOwner"], default: "user"},
    recentSearchedCities : [{typr: String, require: true}],
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

export default User;