const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    //name : { type: String, required: true },
    email : { type: String, required: true, unique: true },
    password : { type: String, required: true },
}
)


const User = mongoose.model("User", userSchema) //in mongoDB table name will be users
module.exports = User

