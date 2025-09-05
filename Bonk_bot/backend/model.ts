
import mongoose from "mongoose";

mongoose.connect("")

const UserSchema =  new mongoose.Schema({
    username : {type : String},
    password : {type : String},
    publicKey : {type : String}, 
    privateKey : {type : String}
})

export  const uesrModel =  mongoose.model("user", UserSchema)
